const path = require('path') // imports the path module

module.exports = {
  entry: { main: './src/index.js' }, // entry point for bundling
  output: {
    path: path.resolve(__dirname, 'dist'), // output path using the path utility
    filename: 'main.js', // sets the output file name
    publicPath: '', // specify the base path for all assets
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // Path to serve files from in development mode
    compress: true, // This will speed up the load in development mode
    port: 8080, // Port to open the site at localhost:8080, you can always change the port
    open: true, // The site will open automatically when running 'npm run dev'
  },
}
