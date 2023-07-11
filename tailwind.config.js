
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html","./src/**/*.{html,js,ts,jsx,tsx,vue}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
});