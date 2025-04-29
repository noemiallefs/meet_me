// src/components/seo.js
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({
  title,
  description,
  author,
  keywords,
  siteUrl,
  lang = "en",
}) => {
  const { site } = useStaticQuery(graphql`
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
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    author: defaultAuthor,
    siteUrl: defaultSiteUrl,
  } = site.siteMetadata;

  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaAuthor = author || defaultAuthor;
  const metaKeywords = keywords || defaultKeywords;
  const metaSiteUrl = siteUrl || defaultSiteUrl;
  const metaImage = `${metaSiteUrl}/images/profile.webp`;

  return (
    <>
      <html lang={lang} />
      <title>{metaTitle}</title>
      <meta name="author" content={metaAuthor} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="x-robots-tag" content="all" />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_url" content={metaSiteUrl} />
      <meta property="og:image" content={metaImage} />
    </>
  );
};

export default Seo;
