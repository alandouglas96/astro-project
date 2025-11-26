// @ts-check
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel'

import sanity from '@sanity/astro'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: '7og2dskj',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
  ],
})
