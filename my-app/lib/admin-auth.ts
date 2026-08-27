export const ADMIN_ALLOWED_EMAILS = new Set([
  "vangu.leprince@gmail.com",
]);

export const ADMIN_COOKIE_NAME = "mboka_admin_session";

export function normalizeAdminEmail(email: string | null | undefined): string {
  return (email ?? "").trim().toLowerCase();
}

export function isAllowedAdminEmail(email: string | null | undefined): boolean {
  const normalized = normalizeAdminEmail(email);
  return normalized.length > 0 && ADMIN_ALLOWED_EMAILS.has(normalized);
}

export function isAdminSessionValid(email: string | null | undefined): boolean {
  return isAllowedAdminEmail(email);
}
