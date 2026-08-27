import { NextRequest, NextResponse } from "next/server";
import { ADMIN_ALLOWED_EMAILS, ADMIN_COOKIE_NAME, normalizeAdminEmail } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const rawEmail = String(formData.get("email") ?? "");
  const email = normalizeAdminEmail(rawEmail);

  const isAllowed = email.length > 0 && ADMIN_ALLOWED_EMAILS.has(email);

  if (!isAllowed) {
    const redirectUrl = new URL("/admin", request.url);
    redirectUrl.searchParams.set("error", "Accès administrateur refusé.");
    return NextResponse.redirect(redirectUrl);
  }

  const response = NextResponse.redirect(new URL("/admin/dashboard", request.url));
  response.cookies.set(ADMIN_COOKIE_NAME, email, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
