module.exports = {
  siteMetadata: {
    title: `noemiallefs_meet_me`,
    description: `Come and meet me and my research`,
    author: `@noemiallefs`,
    keywords: `Noemi Alvarez Fernandez, STEM, scientist, Data Scientist`,
    siteUrl: `https://meetme.gatsbyjs.io`,
  },

  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://meetme.gatsbyjs.io',
        sitemap: 'https://meetme.gatsbyjs.io/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }, 

    {
      resolve: "gatsby-omni-font-loader",
    
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

  ],
}
