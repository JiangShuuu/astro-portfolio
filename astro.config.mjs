import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
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
    }),
    react(),
  ],
});
