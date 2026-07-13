"use client";

import axios from "axios";


const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "http://localhost:8000/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

function getStoredTokens() {
  if (typeof window === "undefined") return { access: null, refresh: null };
  return {
    access: localStorage.getItem("csi_access_token"),
    refresh: localStorage.getItem("csi_refresh_token"),
  };
}

export function setStoredTokens({ access, refresh }) {
  if (typeof window === "undefined") return;
  if (access) localStorage.setItem("csi_access_token", access);
  if (refresh) localStorage.setItem("csi_refresh_token", refresh);
  // Non-sensitive hint cookie (no token value) so Next.js edge middleware
  // can redirect logged-out visitors without needing to read localStorage.
  document.cookie = "csi_has_session=1; path=/; max-age=2592000; SameSite=Lax";
}

export function clearStoredTokens() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("csi_access_token");
  localStorage.removeItem("csi_refresh_token");
  document.cookie = "csi_has_session=; path=/; max-age=0";
}

apiClient.interceptors.request.use((config) => {
  const { access } = getStoredTokens();
  if (access) config.headers.Authorization = `Bearer ${access}`;
  return config;
});

// --- Transparent token refresh -------------------------------------------
let refreshPromise = null;

async function refreshAccessToken() {
  const { refresh } = getStoredTokens();
  if (!refresh) throw new Error("No refresh token available.");

  const response = await axios.post(`${API_BASE_URL}/auth/login/refresh/`, { refresh });
  const newAccess = response.data.access;
  setStoredTokens({ access: newAccess });
  return newAccess;
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    const isAuthEndpoint = config?.url?.includes("/auth/login");
    if (response?.status === 401 && !config._retry && !isAuthEndpoint) {
      config._retry = true;
      try {
        refreshPromise = refreshPromise || refreshAccessToken();
        const newAccess = await refreshPromise;
        refreshPromise = null;
        config.headers.Authorization = `Bearer ${newAccess}`;
        return apiClient(config);
      } catch (refreshError) {
        refreshPromise = null;
        clearStoredTokens();
        if (typeof window !== "undefined") window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // Normalize: always reject with the backend's { success, message, errors } shape.
    const normalized = response?.data ?? {
      success: false,
      message: error.message || "Network error. Please check your connection.",
      errors: null,
    };
    return Promise.reject(normalized);
  }
);

export default apiClient;
