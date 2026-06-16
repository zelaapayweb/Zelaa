/**
 * Mock authentication layer — works with localStorage immediately.
 *
 * SWAP GUIDE (when Supabase is ready):
 *   npm install @supabase/supabase-js @supabase/ssr
 *   Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 *   Replace each function body with the equivalent supabase.auth.* call.
 */

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

// ── Storage keys ─────────────────────────────────────────────────────────────

const K = {
  users: "zelaa_users_v1",
  session: "zelaa_session_v1",
  claims: "zelaa_claims_v1",
} as const;

// ── Helpers ──────────────────────────────────────────────────────────────────

function safe<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function store(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

type StoredUser = User & { _pw: string };

// ── Auth ─────────────────────────────────────────────────────────────────────

export async function signUp(
  email: string,
  password: string
): Promise<{ user: User | null; error: string | null }> {
  const key = email.toLowerCase().trim();
  const users = safe<Record<string, StoredUser>>(K.users, {});

  if (users[key]) {
    return { user: null, error: "An account with this email already exists." };
  }

  const user: User = {
    id: crypto.randomUUID(),
    email: key,
    created_at: new Date().toISOString(),
  };

  users[key] = { ...user, _pw: password };
  store(K.users, users);
  store(K.session, user);
  ensureRewardClaim(user.id, user.email);

  return { user, error: null };
}

export async function signIn(
  email: string,
  password: string
): Promise<{ user: User | null; error: string | null }> {
  const key = email.toLowerCase().trim();
  const users = safe<Record<string, StoredUser>>(K.users, {});
  const stored = users[key];

  if (!stored || stored._pw !== password) {
    return { user: null, error: "Invalid email or password." };
  }

  const user: User = {
    id: stored.id,
    email: stored.email,
    created_at: stored.created_at,
  };
  store(K.session, user);
  ensureRewardClaim(user.id, user.email);

  return { user, error: null };
}

export async function signOut(): Promise<void> {
  if (typeof window !== "undefined") {
    localStorage.removeItem(K.session);
  }
}

export function getSession(): User | null {
  return safe<User | null>(K.session, null);
}

// ── Reward claims ─────────────────────────────────────────────────────────────

export function getRewardClaim(userId: string): RewardClaim | null {
  const claims = safe<Record<string, RewardClaim>>(K.claims, {});
  return claims[userId] ?? null;
}

export async function initiateRewardClaim(
  userId: string,
  email: string
): Promise<RewardClaim> {
  return ensureRewardClaim(userId, email);
}

export async function setRewardStatus(
  userId: string,
  status: RewardStatus
): Promise<RewardClaim | null> {
  const claims = safe<Record<string, RewardClaim>>(K.claims, {});
  const claim = claims[userId];
  if (!claim) return null;

  const now = new Date().toISOString();
  const updated: RewardClaim = {
    ...claim,
    status,
    updated_at: now,
    ...(status === "pending_verification"
      ? {
          claimed_at: claim.claimed_at ?? now,
          telegram_opened_at: now,
        }
      : {}),
  };

  claims[userId] = updated;
  store(K.claims, claims);
  return updated;
}

// ── Internal ──────────────────────────────────────────────────────────────────

function ensureRewardClaim(userId: string, email: string): RewardClaim {
  const claims = safe<Record<string, RewardClaim>>(K.claims, {});
  if (claims[userId]) return claims[userId];

  const now = new Date().toISOString();
  const claim: RewardClaim = {
    id: crypto.randomUUID(),
    user_id: userId,
    email,
    status: "not_started",
    telegram_opened_at: null,
    claimed_at: null,
    reviewed_at: null,
    admin_notes: null,
    created_at: now,
    updated_at: now,
  };

  claims[userId] = claim;
  store(K.claims, claims);
  return claim;
}
