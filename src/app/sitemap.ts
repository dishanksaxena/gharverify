import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "", "how-it-works", "services", "risk-scanner", "pricing", "case-studies",
  "trust-center", "dashboard", "founder", "faq", "contact", "privacy", "terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}/${r}`.replace(/\/$/, ""),
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
