module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Canadian Software Intern",
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve:"gatsby-plugin-sharp",
    options: {
      icon: "src/images/gatsby-icon.png"
    }
  }],
};
