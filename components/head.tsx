import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Med Laamyry Portfolio</title>
        <meta name="description" content="Med Laamyry is a skilled Graphic and Motion Designer." />
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
      </Head>
    </>
  );
}
