/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting started',
    },
    {
      type: 'category',
      label: 'Jellyfin',
      link: { type: 'doc', id: 'jellyfin/index' },
      items: [
        'jellyfin/set-up-account',
        'jellyfin/watch-on-iphone',
        'jellyfin/watch-anywhere',
        'jellyfin/request-titles',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'YouTube apps',
      link: { type: 'doc', id: 'youtube-apps/index' },
      items: [
        'youtube-apps/install-on-android',
        'youtube-apps/youtube',
        'youtube-apps/youtube-music',
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
