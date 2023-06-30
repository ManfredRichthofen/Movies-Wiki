// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // jellyfinSidebar: ["jellyfin/accounts", "jellyfin/apps"],
  // serverSidebar: ["server-hosting/minecraft"],
  // botSidebar: ["discord-bots/musicbot"],

  jellyfinSidebar: [
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        title: "Jellyfin Guides",
        description: "Learn how to navigate and use jellyfin.",
        slug: "/category/jellyfin",
        keywords: ["guides"],
        image: "/img/docusaurus.png",
      },
      items: ["jellyfin/accounts", "jellyfin/apps", "jellyfin/request"],
    },
  ],
  serverSidebar: [
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        title: "Jellyfin Guides",
        description: "Learn how to navigate and use jellyfin.",
        slug: "/category/game-servers",
        keywords: ["guides"],
        image: "/img/docusaurus.png",
      },
      items: ["server-hosting/minecraft"],
    },
  ],
  botSidebar: [
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        title: "Jellyfin Guides",
        description: "Learn how to navigate and use jellyfin.",
        slug: "/category/discord-bots",
        keywords: ["guides"],
        image: "/img/docusaurus.png",
      },
      items: ["discord-bots/musicbot"],
    },
  ],
};

module.exports = sidebars;
