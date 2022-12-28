import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, author, keywords, siteUrl, lang }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
          }
        }
      }
    `,
  );
    
return (
  <Helmet 
    htmlAttributes={{
      lang,
    }}

    title={site.siteMetadata.title}
    titleTemplate={`%s · ${title}`}
    defaultTitle={site.siteMetadata.title}

    meta={[

      {
        name: 'author',
        content: site.siteMetadata.author || author,
      },

      {
        name: 'description',
        content: site.siteMetadata.description || description,
      },

      {
        name: 'keywords',
        content: site.siteMetadata.keywords || keywords,
      },

      {
        name: 'x-robots-tag',
        content: 'all',
      },

      {
        property: `og:`,
        content: site.siteMetadata.title || title,
      },

      {
          property: 'og:description',
          content: site.siteMetadata.description || description,
      },

      {
          property: `og:type`,
          content: `website`,
      },

      {
        property: 'og:siteUrl',
        content: site.siteMetadata.siteUrl || siteUrl,
      },

      {
        property: 'og:image',
        content: './src/images/profile.webp',
      },
    ]}
    
  />
)
}
    
export default Seo