module.exports = {
  siteMetadata: {
    title: "recipes",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "wH2tODmld4_N9z24oSTRT2IK4KQy0zG3c9uHZcRLh6I",
        spaceId: "3dg1yd026d8e",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
