import { NextResponse } from "next/server";
import { getAllArtistTracklists } from "@/lib/services/artist-tracklist.service";

export const dynamic = "force-static";

export async function GET() {
  const tracklists = await getAllArtistTracklists();
  return NextResponse.json(tracklists);
}