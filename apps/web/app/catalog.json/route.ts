import { ICONS } from "@kineticons/core/icons";

// The whole catalog as one static file (written at build), for the icon browser and the search dialog.
export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(ICONS), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
