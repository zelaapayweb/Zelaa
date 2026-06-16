"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  getSession,
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [claim, setClaim] = useState<RewardClaim | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshClaim = useCallback(() => {
    if (user) setClaim(getRewardClaim(user.id));
  }, [user]);

  useEffect(() => {
    const session = getSession();
    setUser(session);
    if (session) setClaim(getRewardClaim(session.id));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) setClaim(getRewardClaim(user.id));
  }, [user]);

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
