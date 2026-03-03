import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jordan Page",
    template: "%s | Jordan Page",
  },
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var theme=localStorage.getItem("jp-theme");if(theme==="light"||theme==="dark"){document.documentElement.dataset.theme=theme;}}catch(_){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
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
