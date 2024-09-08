import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://jiangshuuu.com/",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
    starlight({
      title: "JiangShu Blog",
      components: {
        SiteTitle: "./src/overrides/SiteTitle.astro",
      },
      logo: {
        src: "./src/assets/trees.png",
      },
      favicon: "/favicon.png",
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
              slug: "docs/nextjs/graphql-codegen-tanstack-query",
            },
          ],
        },
        {
          label: "Cloudflare",
          items: [
            {
              label: "Cloudflare Tunnel",
              slug: "docs/cloudflare/cloudflare-tunnel",
            },
            {
              label: "Cloudflare Gmail",
              slug: "docs/cloudflare/cloudflare-gmail",
            },
          ],
        },
        {
          label: "SEO",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "SPA FrontEnd Rendertron SEO",
              slug: "docs/seo/rendertron-spa-seo",
            },
          ],
        },
      ],
      customCss: ["./src/styles/blog.css"],
    }),
    react(),
    mdx(),
  ],
});
