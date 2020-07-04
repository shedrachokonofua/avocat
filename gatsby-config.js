const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    // 	resolve: 'gatsby-source-filesystem',
    // 	options: {
    // 		name: 'images',
    // 		path: path.join(__dirname, '/src/images')
    // 	}
    // },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, '/content')
      }
    }
  ]
};
