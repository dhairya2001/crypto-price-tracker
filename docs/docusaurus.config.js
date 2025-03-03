module.exports = {
  title: "Crypto Price Tracker Docs",
  tagline: "Documentation for Crypto Price Tracker",
  url: "http://localhost:3000",
  baseUrl: "/", 
  organizationName: "yourgithubusername",
  projectName: "crypto-price-tracker",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "./docs", 
          routeBasePath: "docs", 
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
