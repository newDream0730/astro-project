import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import vercel from "@astrojs/vercel/serverless";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  // adapter: vercel(),
  output: 'server',
  adapter: netlify(),
  integrations: [react()],
  site: 'https://astro-project.netlify.app',
  // base: '/gpm-lds-astro',
  clientEntrypoint: '@astrojs/react/client.js',
});
