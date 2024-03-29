const path = require('path') // imports the path module
const HtmlWebpackPlugin = require('html-webpack-plugin') // imports HtmlWebpackPlugin module
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // imports HtmlWebpackPlugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')  // imports MiniCssExtractPlugin plugin

module.exports = {
  entry: { main: './src/index.js' }, // entry point for bundling
  output: {
    path: path.resolve(__dirname, 'dist'), // output path using the path utility
    filename: '[name].[contenthash].js', // sets the output file name
    publicPath: '', // specify the base path for all assets
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'), // Path to serve files from in development mode
    compress: true, // This will speed up the load in development mode
    port: 8080, // Port to open the site at localhost:8080, you can always change the port
    open: true, // The site will open automatically when running 'npm run dev'
  },
  module: {
    rules: [ // list of rules
      // Babel rules
      {
        test: /\.js$/, // regular expression that matches all js files
        use: 'babel-loader', // use babel-loader to process js files
        exclude: '/node_modules/', // exclude the node_modules folder, files in it should not be processed
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // regular expression that matches image file types
        type: 'asset/resource', // use 'asset/resource' type for handling these file types
        generator: {
          filename: 'images/[name].[contenthash][ext]', // define the filename pattern and store them within the /images folder
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // regular expression that matches font file types
        type: 'asset/resource', // use 'asset/resource' type for handling these file types
        generator: {
          filename: 'fonts/[name].[contenthash][ext]', // define the filename pattern and store them within the /fonts folder
        }
      },
      {
        test: /\.css$/, // regular expression that matches all css files
        // use MiniCssExtractPlugin.loader and css-loader to process css files
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }, // modifies css-loader's behavior when handling @import in CSS files
        },
        'postcss-loader'], // applies post-processing with postcss-loader
      },
    ],
  },
  plugins: [ // list of plugins
    new HtmlWebpackPlugin({
      template: './src/index.html', // path to the index.html file
    }),
    new CleanWebpackPlugin(), // invokes CleanWebpackPlugin plugin
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }), // invokes MiniCssExtractPlugin plugin
  ],
}
