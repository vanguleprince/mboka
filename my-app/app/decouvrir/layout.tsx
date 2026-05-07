import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "MBOKA",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#581c87",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function DecouvrirLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
