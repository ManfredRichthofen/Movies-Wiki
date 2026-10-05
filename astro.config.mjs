// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.jfapp.xyz',

  integrations: [
    react(),
    starlight({
      title: 'JFapp',
      description: 'Request anything, watch it free.',
      favicon: '/favicon.ico',
      logo: {
        src: './public/img/logo.svg',
        alt: 'JFapp',
      },
      // English at `/…` (root); Korean at `/ko/…` — Starlight’s recommended default pattern.
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ko: {
          label: '한국어',
          lang: 'ko',
        },
      },
      social: [
        {
          icon: 'external',
          label: 'Jellyfin',
          href: 'https://watch.jfapp.xyz',
        },
      ],
      sidebar: [
        { slug: 'docs' },
        {
          label: 'Jellyfin',
          translations: { ko: 'Jellyfin' },
          items: [
            { slug: 'docs/jellyfin' },
            { slug: 'docs/jellyfin/set-up-account' },
            { slug: 'docs/jellyfin/watch-on-iphone' },
            { slug: 'docs/jellyfin/watch-anywhere' },
            { slug: 'docs/jellyfin/request-titles' },
            {
              label: 'Fix problems',
              translations: { ko: '문제 해결' },
              items: [
                { slug: 'docs/jellyfin/troubleshooting' },
                { slug: 'docs/jellyfin/remote-stream' },
              ],
            },
          ],
        },
        {
          label: 'YouTube apps',
          translations: { ko: 'YouTube 앱' },
          items: [
            { slug: 'docs/youtube-apps' },
            { slug: 'docs/youtube-apps/install-on-android' },
            { slug: 'docs/youtube-apps/youtube' },
            { slug: 'docs/youtube-apps/youtube-music' },
            {
              label: 'Fix problems',
              translations: { ko: '문제 해결' },
              items: [{ slug: 'docs/youtube-apps/playback-issues' }],
            },
          ],
        },
      ],
      customCss: ['./src/styles/global.css'],
      components: {
        Header: './src/components/starlight/Header.astro',
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
      ],
    }),
  ],

  redirects: {
    '/docs/installation': '/docs/youtube-apps/install-on-android/',
    '/ko/docs/installation': '/ko/docs/youtube-apps/install-on-android/',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'icons';
            }
            if (id.includes('node_modules/@base-ui')) {
              return 'ui';
            }
          },
        },
      },
    },
  },
});
