module.exports = {
  siteMetadata: {
    title: `Noemi Álvarez Fernández`,
    description: `Come and meet me and my research`,
    author: `@noemiallefs`,
    keywords: `Noemi Alvarez Fernandez, STEM, scientist, Data Scientist`,
    siteUrl: `https://noemiallefs.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-smoothscroll`,

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gastby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFDEDE`,
        theme_color: `#FFDEDE`,
        display: `minimal-ui`,
        icon: `src/images/profile.webp`,
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-NERZKBVL1C`],
        gtagConfig: {
          optimize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**"],
          origin: "https://www.noemiallefs.com",
        },
      },
    },

    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://noemiallefs.com`,
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

    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
