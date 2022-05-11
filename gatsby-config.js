module.exports = {
  siteMetadata: {
    title: `noemiallefs_meet_me`,
    description: `Come and meet me and my research`,
    author: `@noemiallefs`,
    keywords: `Noemi Alvarez Fernandez, STEM, scientist, Data Scientist`,
    siteUrl: `https://noemiallefs-meetme.com`,
  },

  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: 'https://noemiallefs-meetme.com',
      },
    },

    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(
            filter: {
              path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
            }
          ) {
            nodes {
              path
            }
          }
        }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: 'weekly',
            priority: 0.7,
          };
        },
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://noemiallefs-meetme.com',
        sitemap: 'https://noemiallefs-meetme.com/sitemap/sitemap-index.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/404'],
          },
        ],
      },
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
