import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page
  if (pathname === "/gadgets/admin/login") {
    return NextResponse.next();
  }

  // Ignore static files
  if (
    pathname.startsWith("/images") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("gadget_admin_auth");

  if (!authCookie || authCookie.value !== "authenticated") {
    return NextResponse.redirect(
      new URL("/gadgets/admin/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/gadgets/admin/:path*"],
};