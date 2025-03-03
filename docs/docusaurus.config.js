module.exports = {
  title: "Crypto Price Tracker Docs",
  tagline: "Documentation for Crypto Price Tracker",
  url: "http://localhost:3000",
  baseUrl: "/", // ✅ Set to "/" for local development
  organizationName: "yourgithubusername",
  projectName: "crypto-price-tracker",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "./docs", // ✅ Ensure Docusaurus looks in the correct folder
          routeBasePath: "docs", // ✅ Ensures the documentation is accessible at "/docs/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
