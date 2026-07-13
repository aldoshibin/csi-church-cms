import apiClient, { clearStoredTokens, setStoredTokens } from "@/lib/axios";


export const authService = {
  async login({ email, password, rememberMe }) {
    const { data } = await apiClient.post("/auth/login/", {
      email,
      password,
      remember_me: rememberMe,
    });
    setStoredTokens({ access: data.data.access, refresh: data.data.refresh });
    return data.data.user;
  },


  async register({ firstName, lastName, email, phoneNumber, password, passwordConfirm, role }) {
    const { data } = await apiClient.post("/auth/register/", {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phoneNumber,
      password,
      password_confirm: passwordConfirm,
      role,
    });
    return data.data.email;
  },

  /** provider: "google" | "microsoft"; token: the provider's id/access token. */
  async socialLogin({ provider, token, rememberMe }) {
    const { data } = await apiClient.post("/auth/social/", {
      provider,
      token,
      remember_me: rememberMe,
    });
    setStoredTokens({ access: data.data.access, refresh: data.data.refresh });
    return data.data.user;
  },

  /** Confirms the 6-digit code sent at registration. See accounts.views.VerifyEmailView. */
  async verifyEmail({ email, code }) {
    const { data } = await apiClient.post("/auth/verify-email/", { email, code });
    return data;
  },

  /** Re-sends the 6-digit verification code. See accounts.views.ResendVerificationCodeView. */
  async resendVerificationCode(email) {
    const { data } = await apiClient.post("/auth/resend-verification-code/", { email });
    return data;
  },

  async forgotPassword(email) {
    const { data } = await apiClient.post("/auth/forgot-password/", { email });
    return data;
  },

  async resetPassword({ token, newPassword, newPasswordConfirm }) {
    const { data } = await apiClient.post("/auth/reset-password/", {
      token,
      new_password: newPassword,
      new_password_confirm: newPasswordConfirm,
    });
    return data;
  },

  async changePassword({ oldPassword, newPassword, newPasswordConfirm }) {
    const { data } = await apiClient.post("/auth/change-password/", {
      old_password: oldPassword,
      new_password: newPassword,
      new_password_confirm: newPasswordConfirm,
    });
    return data;
  },

  async getCurrentUser() {
    const { data } = await apiClient.get("/auth/me/");
    return data.data;
  },

  async updateProfile(payload) {
    const { data } = await apiClient.patch("/auth/me/", payload);
    return data.data;
  },

  async logout() {
    const refresh = typeof window !== "undefined" ? localStorage.getItem("csi_refresh_token") : null;
    try {
      if (refresh) await apiClient.post("/auth/logout/", { refresh });
    } finally {
      clearStoredTokens();
    }
  },
};
