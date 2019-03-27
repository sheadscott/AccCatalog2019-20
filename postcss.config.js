const postcss = require('postcss');
const cssnext = require("postcss-cssnext");
const sugarss = require('sugarss');

module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      features: {
        customProperties: true
      }
    },
    'cssnano': {}
  }
}