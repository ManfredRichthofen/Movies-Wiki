const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jellyfin',
  tagline: 'Watch Movies, Host Games, Get Ad free Youtube',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://docs.jfapp.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'Hermes', // GitHub org/user name
  projectName: 'Watch Group', // Repo name
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Site language and localization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['./plugins/tailwind-config.js'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false, // Ensure sidebars are always expanded
        },
        blog: {
          showReadingTime: true,
          // Optional: Uncomment to enable "Edit this page" links
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      headTags: [
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Jellyfin',
            url: 'https://opensource.fb.com/',
            logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
          }),
        },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jellyfin',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/Downloads', label: 'Downloads', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://watch.jfapp.xyz',
            label: 'Jellyfin',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Jellyfin',
                to: '/docs/jellyfin',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Jellyfin',
                href: 'https://watch.jfapp.xyz',
              },
              {
                label: 'Server Status',
                href: 'https://status.jfapp.xyz',
              },
              {
                label: 'Game Panel',
                href: 'https://panel.jfapp.xyz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hermes Hosting`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
