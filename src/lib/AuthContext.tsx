"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { supabase } from "@/lib/supabase";
import {
  signIn as authSignIn,
  signUp as authSignUp,
  signOut as authSignOut,
  getRewardClaim,
  setRewardStatus,
  type User,
  type RewardClaim,
  type RewardStatus,
} from "@/lib/auth";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  claim: RewardClaim | null;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateRewardStatus: (status: RewardStatus) => Promise<void>;
  refreshClaim: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function mapSupabaseUser(u: { id: string; email?: string | null; created_at: string }): User {
  return { id: u.id, email: u.email ?? "", created_at: u.created_at };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [claim, setClaim] = useState<RewardClaim | null>(null);
  const [loading, setLoading] = useState(true);

  const loadClaim = useCallback(async (userId: string) => {
    const c = await getRewardClaim(userId);
    setClaim(c);
  }, []);

  const refreshClaim = useCallback(() => {
    if (user) loadClaim(user.id);
  }, [user, loadClaim]);

  useEffect(() => {
    // Hydrate session once on mount
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        const u = mapSupabaseUser(data.session.user);
        setUser(u);
        loadClaim(u.id);
      }
      setLoading(false);
    });

    // Keep in sync with Supabase auth events
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          const u = mapSupabaseUser(session.user);
          setUser(u);
          loadClaim(u.id);
        } else {
          setUser(null);
          setClaim(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [loadClaim]);

  const handleSignIn = async (email: string, password: string) => {
    const { user: u, error } = await authSignIn(email, password);
    if (u) setUser(u);
    return { error };
  };

  const handleSignUp = async (email: string, password: string) => {
    const { user: u, error } = await authSignUp(email, password);
    if (u) setUser(u);
    return { error };
  };

  const handleSignOut = async () => {
    await authSignOut();
    setUser(null);
    setClaim(null);
  };

  const handleUpdateRewardStatus = async (status: RewardStatus) => {
    if (!user) return;
    const updated = await setRewardStatus(user.id, status);
    if (updated) setClaim(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        claim,
        signIn: handleSignIn,
        signUp: handleSignUp,
        signOut: handleSignOut,
        updateRewardStatus: handleUpdateRewardStatus,
        refreshClaim,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
