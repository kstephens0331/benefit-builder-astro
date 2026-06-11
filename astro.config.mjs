import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Custom sitemap + robots are produced by scripts/generate-sitemap.mjs after build
// (it also emits the image sitemap and AI-crawler robots rules), so we do not use
// @astrojs/sitemap here to avoid two competing sitemaps.
export default defineConfig({
  site: "https://benefitbuilderllc.com",
  output: "static",
  // applyBaseStyles: false because src/styles/globals.css already declares the
  // @tailwind base/components/utilities layers itself.
  integrations: [tailwind({ applyBaseStyles: false })],
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
