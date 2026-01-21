// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en", "de"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  site: 'https://slapenopeeneiland.nl',
});