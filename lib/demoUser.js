/**
 * Fake logged-in user for demo deployments with no backend (see
 * NEXT_PUBLIC_DEMO_MODE in contexts/AuthContext.jsx and middleware.js).
 * Matches the shape services/authService.js expects back from a real
 * login call (full_name, role, church, avatar), and the name/role
 * already shown in the Sidebar footer mock throughout development.
 */
export const DEMO_USER = {
  id: "demo-user",
  full_name: "Rev. Michael",
  email: "demo@csistjohns.church",
  role: "PASTOR",
  church: { id: 1, name: "St. John's Church (Main)" },
  avatar: null,
};
