import { url } from "inspector";
import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.medlaamyry.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.medlaamyry.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.medlaamyry.com/works",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.medlaamyry.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.medlaamyry.com//clients",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

  ];
}
