"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import { DEMO_USER } from "@/lib/demoUser";

/**
 * AuthContext — single source of truth for "who is logged in and what can
 * they do". Wraps the whole app (see app/layout.jsx). Every page/component
 * that needs the user or a role check uses `useAuth()` rather than reading
 * localStorage directly.
 *
 * ============================== DEMO MODE ==============================
 * DEMO_MODE is a hardcoded `true` below, not an env var — originally
 * this checked `process.env.NEXT_PUBLIC_DEMO_MODE`, matching
 * middleware.js, but relying on that reaching Vercel correctly (exact
 * name, right environment scope, redeployed after setting) turned out
 * to be a real failure point: if it silently didn't take effect, real
 * `login()` would try to call a backend that doesn't exist in this demo
 * deploy, fail, and `user` would never get set — bouncing straight back
 * to /login even after middleware was fixed.
 *
 * Hardcoding it removes that whole class of "did the env var propagate"
 * uncertainty. Every method below short-circuits to an instant, fake
 * success using DEMO_USER from lib/demoUser.js instead of calling
 * authService. This is the only file (plus middleware.js) that needs to
 * know about demo mode — every page still calls the real
 * useAuth()/login()/etc. API, so nothing elsewhere needs special-casing.
 *
 * TO RESTORE REAL AUTH (once a real backend is wired up): change
 * `const isDemoMode = true;` below to `false`, or delete it and the
 * `if (isDemoMode) { ... }` branch in each method.
 * =========================================================================
 */
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
