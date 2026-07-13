/** Public auth pages don't need the authenticated Sidebar/Topbar shell. */
export default function AuthRouteLayout({ children }) {
  return children;
}
