import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Med Laamyry Portfolio",
  description: "A professional portfolio website for Med Laamyry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <title>Med Laamyry Portfolio</title>
        <meta name="description" content="Med Laamyry is a skilled Graphic and Motion Designer with expertise in creating stunning visuals." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Med Laamyry Portfolio" />
        <meta property="og:description" content="Med Laamyry is a skilled Graphic and Motion Designer with expertise in creating stunning visuals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medlaamyry.com" />
        <meta property="og:site_name" content="Med Laamyry Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Med Laamyry Portfolio" />
        <meta name="twitter:description" content="Med Laamyry is a skilled Graphic and Motion Designer with expertise in creating stunning visuals." />
        <meta name="twitter:site" content="@medlaamyry" />

        {/* Canonical Link Tag */}
        <link rel="canonical" href="https://medlaamyry.com" />

        {/* LinkedIn Meta Tags (optional, Open Graph usually covers LinkedIn) */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Med Laamyry",
              jobTitle: "Graphic & Motion Designer",
              url: "https://medlaamyry.com",
              sameAs: ["https://www.linkedin.com/in/medlaamyry", "https://www.behance.net/medlaamyry"],
              description: "Med Laamyry is a skilled Graphic and Motion Designer with expertise in creating stunning visuals.",
            }),
          }}
        />
      </head>
      <body>
        <main className="mx-auto">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
