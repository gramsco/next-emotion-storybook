module.exports = {
  stories: [
    "../components/**/*.stories.js",
    // "../components/**/**/*.stories.js",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
