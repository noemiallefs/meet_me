import React from "react";
import propTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, author, keywords, lang }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    defaultKeywords,
    defaultAuthor,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    author: author || defaultAuthor,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet 
      htmlAttributes={{
        lang,
      }}
      title={seo.title}>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content="index"/>

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.keywords && <meta property="og:keywords" content={seo.keywords} />}
      {seo.author && <meta property="og:author" content={seo.author} />}

    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  keywords: propTypes.string,
  author: propTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  keywords: null,
  author: null,
  lang: `en`,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        defautlAuthor: author
        siteUrl: siteUrl
      }
    }
  }
`
