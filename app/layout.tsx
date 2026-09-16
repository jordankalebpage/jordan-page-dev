import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";

const siteUrl = new URL("https://jordanpage.dev");
const siteTitle = "Jordan Page";
const siteDescription =
  "Personal website of Jordan Page, a full stack developer building web apps.";
const themeStorageKey = "jp-theme";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteTitle,
    url: siteUrl.toString(),
    jobTitle: "Full Stack Developer",
    description: siteDescription,
    sameAs: [
      "https://github.com/jordankalebpage",
      "https://www.linkedin.com/in/jordankalebpage/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl.toString(),
    description: siteDescription,
    inLanguage: "en-US",
  },
];

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteTitle,
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Jordan Page personal website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/social-card.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var resolvedTheme="light";try{var storedTheme=localStorage.getItem("${themeStorageKey}");if(storedTheme==="light"||storedTheme==="dark"){resolvedTheme=storedTheme;}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){resolvedTheme="dark";}}catch(_){if(window.matchMedia("(prefers-color-scheme: dark)").matches){resolvedTheme="dark";}}document.documentElement.dataset.theme=resolvedTheme;})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${ibmPlexMono.variable} bg-background text-foreground antialiased`}
      >
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-(--skip-link-bg) focus:px-3 focus:py-2 focus:text-(--skip-link-text) focus:outline-none"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" aria-label="Main content">
          {children}
        </main>
      </body>
    </html>
  );
}
