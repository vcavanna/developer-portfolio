import React from "react";
import Head from "next/head";
import { seoData } from "../portfolio";

type SEOProps = {
  title?: string;
  description?: string;
};

function SEO({ title, description }: SEOProps = {}) {
  // Inner pages append their own name; the home page stands on seoData alone.
  const pageTitle = title ? `${title} | ${seoData.title}` : seoData.title;
  const pageDescription = description ?? seoData.description;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="author" content={seoData.author} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={seoData.url} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.title} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={seoData.image} />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
    </Head>
  );
}

// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };

export default SEO;
