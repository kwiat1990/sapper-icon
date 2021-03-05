const tailwind = require("tailwindcss");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");

const plugins =
  process.env.NODE_ENV === "production"
    ? [postcssImport, tailwind, autoprefixer, cssnano]
    : [postcssImport, tailwind, autoprefixer];

module.exports = { plugins };
