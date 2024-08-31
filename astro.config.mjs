import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jiangshuuu.com/",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
    starlight({
      title: "JohnShu Blog",
      logo: {
        light: "./public/trees01.png",
        dark: "./public/trees01.png",
      },
      favicon: "./public/favicon.svg",
      social: {
        github: "https://github.com/JiangShuuu",
      },
      sidebar: [
        {
          label: "NextJs - App Router",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "GraphQL Codegen & Tanstack Query",
              slug: "nextjs/graphql-codegen-tanstack-query",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      customCss: ["./src/styles/blog.css"],
    }),
    react(),
  ],
});
