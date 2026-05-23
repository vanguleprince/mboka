function normalizeBaseUrl(rawUrl: string | undefined): string | null {
  if (!rawUrl) return null;

  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  return trimmed.replace(/\/+$/, "");
}

export function getApiBaseUrl(): string | null {
  return normalizeBaseUrl(process.env.MBOKA_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL);
}

export function hasRemoteApi(): boolean {
  return Boolean(getApiBaseUrl());
}
