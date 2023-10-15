module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 110,
  overrides: [
    {
      files: "*.md",
      options: {
        useTabs: false,
        trailingComma: "none",
      },
    },
    {
      files: "*.json",
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
};
