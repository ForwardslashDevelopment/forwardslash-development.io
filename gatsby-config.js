const siteMetadata = {
  title: `The Localhost Blog`,
  description: `This is my development blog where I write about my... development.`,
}
module.exports = {
  siteMetadata: {
    title: `Forwardslash Development`,
    siteDescription: 'Forwardslash Development. Modern application development, progressive web solutions',
    description: `Forwardslash Development Gatsby Starter, using Typescript, Styled Components, Tailwindcss and Framer Motion.`,
    author: `jv`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            },
          }
        ]
      },
    },
    {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "forwardslash-development.io",
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `forwardslash-development`,
        short_name: `forwardslash`,
        start_url: `/`,
        background_color: `#81e6d9`,
        theme_color: `#81e6d9`,
        display: `minimal-ui`,
        icon: `src/assets/images/42xlogo.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};
