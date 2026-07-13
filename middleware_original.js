import { NextResponse } from "next/server";


const PUBLIC_PATHS = [
  "/login", "/register", "/forgot-password", "/reset-password",
  "/email-verification", "/otp-verification", "/verify-email", "/registration-success",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
  const hasSessionHint = request.cookies.get("csi_has_session")?.value === "1";

  if (!isPublicPath && !hasSessionHint && pathname !== "/") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

