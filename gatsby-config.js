module.exports = {
  siteMetadata: {
    title: `Noemi Álvarez Fernández`,
    description: `Discover Noemi Álvarez Fernández's work and research in Data Science and STEM.`,
    author: `Noemi Álvarez Fernández`,
    keywords: `Noemi Alvarez Fernandez, STEM, scientist, Data Scientist`,
    siteUrl: `https://noemiallefs.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-smoothscroll`,

    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Noemi Álvarez Fernández`,
        short_name: `Noemi`,
        start_url: `/`,
        background_color: `#FFDEDE`,
        theme_color: `#FFDEDE`,
        display: `minimal-ui`,
        icon: `src/images/profile.webp`,
      },
    },

    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://noemiallefs.com`,
        sitemap: `https://noemiallefs.com/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Zilla Slab Highlight",
            file: "https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight&display=swap",
          },
          {
            name: "Red Hat Mono",
            file: "https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap",
          },
          {
            name: "Oswald",
            file: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap",
          },
          {
            name: "Rajdhani",
            file: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600&display=swap",
          },
          {
            name: "Saira Extra Condensed",
            file: "https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap",
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ['/404', '/dev-404-page', '/offline-plugin-app-shell-fallback'],
      },
    },
  ],
};
