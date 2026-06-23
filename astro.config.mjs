import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: process.env.ASTRO_BASE ?? "/",
  output: "static",
  integrations: [tailwind()],
});
