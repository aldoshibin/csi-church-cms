"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import { DEMO_USER } from "@/lib/demoUser";


const isDemoMode = true;

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  const hydrate = React.useCallback(async () => {
    if (isDemoMode) {
      setUser(DEMO_USER);
      setIsLoading(false);
      return;
    }
    const hasToken = typeof window !== "undefined" && localStorage.getItem("csi_access_token");
    if (!hasToken) {
      setIsLoading(false);
      return;
    }
    try {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    hydrate();
  }, [hydrate]);

  const login = async (credentials) => {
    if (isDemoMode) {
      setUser(DEMO_USER);
      return DEMO_USER;
    }
    const loggedInUser = await authService.login(credentials);
    setUser(loggedInUser);
    return loggedInUser;
  };

  /** Does NOT log the user in or set `user` state — see authService.register. */
  const register = async (payload) => {
    if (isDemoMode) return DEMO_USER.email;
    return authService.register(payload);
  };

  const socialLogin = async (payload) => {
    if (isDemoMode) {
      setUser(DEMO_USER);
      return DEMO_USER;
    }
    const loggedInUser = await authService.socialLogin(payload);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = async () => {
    if (!isDemoMode) await authService.logout();
    setUser(null);
    router.push("/login");
  };

  const updateProfile = async (payload) => {
    if (isDemoMode) {
      setUser((prev) => ({ ...prev, ...payload }));
      return { ...DEMO_USER, ...payload };
    }
    const updatedUser = await authService.updateProfile(payload);
    setUser(updatedUser);
    return updatedUser;
  };

  /** hasRole("PASTOR", "CHURCH_SECRETARY") — true if user.role is any of these. */
  const hasRole = React.useCallback((...roles) => !!user && roles.includes(user.role), [user]);

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    socialLogin,
    logout,
    updateProfile,
    hasRole,
    refetchUser: hydrate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
