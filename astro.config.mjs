import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import db from "@astrojs/db";

import tailwindConfigViewer from "astro-tailwind-config-viewer";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), db(), tailwindConfigViewer()]
});