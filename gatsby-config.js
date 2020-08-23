require('dotenv').config();

const path = require('path');

const siteMetadata = require('./src/assets/data/metadata.json');

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: 'Github Fight',
        start_url: '/',
        background_color: '#B23F42',
        theme_color: '#B23F42',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/styles.ts'],
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-polished',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
