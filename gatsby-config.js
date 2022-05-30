module.exports = {
  siteMetadata: {
    title: `McGonigle Dev`,
    siteUrl: `https://www.mcgonigle.dev`,
    author: `Patrick McGonigle`,
    keywords: `Web Developer, LAMP Stack, JAM Stack, Full Stack, WordPress, GatsbyJS`,
    description: `Full Stack Web Developer`
  },
  plugins: ["gatsby-plugin-postcss","gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};