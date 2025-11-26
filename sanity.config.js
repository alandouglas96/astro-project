// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  name: 'project-name',
  title: 'Astro Project',
  projectId: '7og2dskj',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
})
