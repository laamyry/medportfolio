import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Med Laamyry Portfolio",
  description: "Med Laamyry is a skilled Graphic and Motion Designer with expertise in creating stunning visuals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Med Laamyry Portfolio</title>
        <meta name="description" content="Med Laamyry is a skilled Graphic and Motion Designer with expertise in creating stunning visuals." />
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
