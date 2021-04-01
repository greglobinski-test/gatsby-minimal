const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'gatsby-hosting-canary',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-functions`,
      options: {
        path: path.join(__dirname, `src/api`),
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          '/*': [`X-Test-Header: this is the header for /*`],
          '/client-only/*': [
            `X-Test-Header: this is the header for /client-only/*`,
          ],
          '/static-page': [
            `X-Test-Header: this is the header for /static-page`,
          ],
        },
      },
    },
  ],
};
