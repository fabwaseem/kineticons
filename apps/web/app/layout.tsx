import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";
import { Shell } from "@/components/ui/Shell";
import { Footer } from "@/components/ui/Footer";
import { ThemeProvider } from "@/lib/theme";
import { DESCRIPTION, REPO_URL, SITE_NAME, SITE_URL, TAGLINE } from "@/lib/site";
import { ICON_COUNT } from "@/lib/stats.generated";
import "./globals.css";

const display = Inter_Tight({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-tight", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME}: ${TAGLINE.toLowerCase()}`, template: `%s | ${SITE_NAME}` },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ["animated icons", "react icons", "vue icons", "svelte icons", "svg icons", "icon library", "open source icons", "duotone icons", "motion icons", "nextjs icons"],
  authors: [{ name: "Waseem Anjum" }],
  creator: "Waseem Anjum",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME}: ${TAGLINE.toLowerCase()}`,
    description: `${ICON_COUNT.toLocaleString("en-US")} rounded icons in outline, duotone and filled, each with a motion of its own. For React, Vue, Svelte and HTML.`,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "light dark",
};

/** the theme before first paint, so a dark-mode visitor never sees a white flash */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("ki.theme");var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light"}catch(e){}})()`;

const SITE_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      potentialAction: { "@type": "SearchAction", target: `${SITE_URL}/icons/?q={search_term_string}`, "query-input": "required name=search_term_string" },
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${SITE_URL}/#software`,
      name: SITE_NAME,
      description: DESCRIPTION,
      codeRepository: REPO_URL,
      programmingLanguage: ["TypeScript", "JavaScript", "CSS", "SVG"],
      license: "https://opensource.org/licenses/MIT",
      isAccessibleForFree: true,
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_LD) }} />
      </head>
      <body>
        <ThemeProvider>
          <Shell footer={<Footer />}>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
