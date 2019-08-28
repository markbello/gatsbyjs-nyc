module.exports = {
  siteMetadata: {
    title: `Gatsby NYC Meetup`,
    description: `Our community is a welcoming space where any Gatsby, React, Javascript, JAMStack related question is fair game, be it beginner, intermediate, or advanced. We don’t have all the answers, but we can find them as a team.`,
    author: `Gatsby NYC Meetup`,
    navbarLinks: [
      {
        id: 1,
        name: `Gatsby NYC`,
        link: `/`
      },
      {
        id: 2,
        name: `Feature Requests`,
        link: `/feature-requests`
      },
      {
        id: 3,
        name: `Blog`,
        link: `/blog`
      },
      {
        id: 4,
        name: `Join Our Slack`,
        link: `/slack`
      },
    ]
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
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
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
