import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: '../dist',
  title: "Movies",
  description: "Server Guides",
  
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/jellyfin/apps' }
    ],

    sidebar: [
      {
        text: 'Jellyfin Guides',
        collapsed: false,
        items: [
          { text: 'Apps', link: '/jellyfin/apps' },
          { text: 'Requesting Movies', link: '/jellyfin/requests' },
          { text: 'Request an Account', link: '/jellyfin/account' },
          { text: 'Server Status', link: '/jellyfin/status' }
        ]
      },
      {
        text: 'Server Hosting Guides',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Upload Server Files', link: '/api-examples' }
        ]
      },
      {
        text: 'Discord Bot Guides',
        items: [
          { text: 'Music Bot', link: '/discord-bots/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      {
        icon: {
          svg: '<img src = "/imgs/jellyfin.svg" alt="jellyfin" width="24" height="24"/>'
        },
        link: 'https://jfapp.xyz'
      }
    ]
  }
})
