require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
          // Name of the database and collection where are books reside
          dbName: 'blog',
          collection: 'article',
          server: {
              address: 'website-shard-00-01.hzfpk.mongodb.net',
              port: 27017
          },
          auth: {
              user: process.env.MONGODB_READ_ONLY_USER,
              password: process.env.MONGODB_READ_ONLY_PASS,
          },
          extraParams: {
              replicaSet: 'Main-shard-0',
              ssl: true,
              authSource: 'admin',
              retryWrites: true
          }
      }
    },
  ],
}
