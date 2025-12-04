import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dasapathi Indra Kumar Portfolio",
    short_name: "Indra's Portfolio",
    description:
      "Dasapathi Indra Kumar's developer portfolio built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
      "AI",
      "Machine Learning",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
