const presets = [
  ['@babel/preset-env', { // specify preset
    targets: { // specify browser versions to support
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    // use polyfills for browsers specified in the targets property
    // by default, Babel uses 'core-js' library for polyfills
    useBuiltIns: "entry",
  }]
]

module.exports = { presets }
