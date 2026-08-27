import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ADMIN_COOKIE_NAME, isAllowedAdminEmail } from "@/lib/admin-auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/dashboard" || pathname.startsWith("/admin/dashboard/")) {
    const sessionEmail = request.cookies.get(ADMIN_COOKIE_NAME)?.value ?? null;

    if (!isAllowedAdminEmail(sessionEmail)) {
      const redirectUrl = new URL("/admin", request.url);
      redirectUrl.searchParams.set("error", "Accès administrateur refusé.");
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard", "/admin/dashboard/:path*"],
};
