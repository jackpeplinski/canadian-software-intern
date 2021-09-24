module.exports = {
  siteMetadata: {
    siteUrl: "https://canadian-software-intern.netlify.app/",
    title: "Canadian Software Intern",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        icon: "src/images/gatsby-icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
