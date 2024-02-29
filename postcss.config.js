const autoprefixer = require('autoprefixer') // imports autoprefixer plugin
const cssnano = require('cssnano') // imports cssnano plugin

module.exports = {
  plugins: [
    autoprefixer, // includes autoprefixer
    cssnano({ preset: 'default' }), // { preset: default } indicates the use of default minification settings

  ],
}
