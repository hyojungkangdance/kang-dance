import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kang.dance",

  output: "static",

  trailingSlash: "never",

  build: {
    format: "file",
  },
});