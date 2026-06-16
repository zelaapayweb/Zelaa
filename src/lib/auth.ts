import { supabase } from "./supabase";

export interface User {
  id: string;
  email: string;
  created_at: string;
}

export type RewardStatus =
  | "not_started"
  | "pending_verification"
  | "approved"
  | "rejected"
  | "paid";

export interface RewardClaim {
  id: string;
  user_id: string;
  email: string;
  status: RewardStatus;
  telegram_opened_at: string | null;
  claimed_at: string | null;
  reviewed_at: string | null;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

// ── Auth ─────────────────────────────────────────────────────────────────────

export async function signUp(
  email: string,
  password: string
): Promise<{ user: User | null; error: string | null }> {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { user: null, error: error.message };
  const user = data.user ? mapUser(data.user) : null;
  if (user) await ensureRewardClaim(user.id, user.email);
  return { user, error: null };
}

export async function signIn(
  email: string,
  password: string
): Promise<{ user: User | null; error: string | null }> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return { user: null, error: error.message };
  const user = data.user ? mapUser(data.user) : null;
  if (user) await ensureRewardClaim(user.id, user.email);
  return { user, error: null };
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}

export async function getSession(): Promise<User | null> {
  const { data } = await supabase.auth.getSession();
  if (!data.session?.user) return null;
  return mapUser(data.session.user);
}

// ── Reward claims ─────────────────────────────────────────────────────────────

export async function getRewardClaim(
  userId: string
): Promise<RewardClaim | null> {
  const { data } = await supabase
    .from("reward_claims")
    .select("*")
    .eq("user_id", userId)
    .single();
  return (data as RewardClaim) ?? null;
}

export async function setRewardStatus(
  userId: string,
  status: RewardStatus
): Promise<RewardClaim | null> {
  const now = new Date().toISOString();
  const patch: Partial<RewardClaim> & { updated_at: string } = {
    status,
    updated_at: now,
    ...(status === "pending_verification"
      ? { claimed_at: now, telegram_opened_at: now }
      : {}),
  };

  const { data } = await supabase
    .from("reward_claims")
    .update(patch)
    .eq("user_id", userId)
    .select()
    .single();

  return (data as RewardClaim) ?? null;
}

// ── Internal ──────────────────────────────────────────────────────────────────

async function ensureRewardClaim(
  userId: string,
  email: string
): Promise<void> {
  const now = new Date().toISOString();
  await supabase.from("reward_claims").upsert(
    {
      user_id: userId,
      email,
      status: "not_started",
      created_at: now,
      updated_at: now,
    },
    { onConflict: "user_id", ignoreDuplicates: true }
  );
}

function mapUser(u: { id: string; email?: string | null; created_at: string }): User {
  return {
    id: u.id,
    email: u.email ?? "",
    created_at: u.created_at,
  };
}
