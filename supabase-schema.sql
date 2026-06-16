-- Zelaa Beta Dashboard — Supabase Schema
-- Run this in the Supabase SQL editor after connecting your project.

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- ─── profiles ──────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─── reward_claims ──────────────────────────────────────────────────────────
create type public.reward_status as enum (
  'not_started',
  'pending_verification',
  'approved',
  'rejected',
  'paid'
);

create table if not exists public.reward_claims (
  id                   uuid primary key default gen_random_uuid(),
  user_id              uuid not null references auth.users(id) on delete cascade,
  email                text not null,
  status               public.reward_status not null default 'not_started',
  telegram_opened_at   timestamptz,
  claimed_at           timestamptz,
  reviewed_at          timestamptz,
  admin_notes          text,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

alter table public.reward_claims enable row level security;

create policy "Users can read their own claim"
  on public.reward_claims for select
  using (auth.uid() = user_id);

create policy "Users can insert their own claim"
  on public.reward_claims for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own claim (limited fields)"
  on public.reward_claims for update
  using (auth.uid() = user_id);

-- Only admins (service_role) can change status to approved/rejected/paid
-- Enforce this by checking allowed transitions in application code or via a trigger.

-- Unique: one claim per user
create unique index if not exists reward_claims_user_id_idx on public.reward_claims(user_id);

-- ─── updated_at triggers ────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger reward_claims_updated_at
  before update on public.reward_claims
  for each row execute function public.set_updated_at();
