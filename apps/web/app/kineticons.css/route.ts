import { ICONS } from "@kineticons/core/icons";
import { stylesheet } from "@kineticons/core";

// Every icon's motion in one stylesheet (written at build). The icon browser loads it once instead of letting each of
// two thousand icons add its own <style>, which made the page restyle itself on every scroll.
export const dynamic = "force-static";

export function GET() {
  return new Response(stylesheet(ICONS), {
    headers: { "content-type": "text/css; charset=utf-8", "cache-control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
