module.exports = {
  siteMetadata: {
    title: 'gatsby-minimal',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-functions',
      options: {
        // You can customize this path where your store functions but they
        // will always be served from {site_url}/functions/{file_name}
        path: `${__dirname}/src/functions`,
      },
    },
  ],
};
