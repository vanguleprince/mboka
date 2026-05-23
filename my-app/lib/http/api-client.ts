import { getApiBaseUrl } from "@/lib/config/env";

type ApiClientOptions = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export async function apiGetJson<T>(path: string, options?: ApiClientOptions): Promise<T> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    throw new Error("MBOKA_API_BASE_URL is not configured.");
  }

  const urlPath = path.startsWith("/") ? path : `/${path}`;
  const response = await fetch(`${baseUrl}${urlPath}`, {
    ...options,
    method: "GET",
    headers: {
      Accept: "application/json",
      ...(options?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}
