import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

interface SiteMetaData {
  site: {
    meta: {
      description: string;
      title: string;
      author: string;
    }
  }
}

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

const metaQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO: React.FC<SEOProps> = ({
  description,
  lang = 'en',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<SiteMetaData>(metaQuery);

  const metaDescription = description || site.meta.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.meta.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.meta.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
