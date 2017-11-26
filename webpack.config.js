const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]';
//const path = require('path');

/*const PATHS = {
   index: path.join(__dirname, 'src/index'),
   build: path.join(__dirname, ''),
   base: path.join(__dirname, 'src')
};*/

module.exports = {
   resolve: {
      extensions: [' ', '.js', '.jsx']
   },
   entry:['./src/index.js'],
   output:{
      filename:'app.js',
      path: __dirname + '/build',
      publicPath: '/'
   },

   module: {
      loaders: [
         {  test: /(\.js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
         },
         {
            test: /\.css$/,
            loader: `style-loader!css-loader?${cssModules}`
         }
      ]
   },

   devServer: {
      host:    '0.0.0.0',
      port:    3000,
      inline:  true,
      historyApiFallback: true
   },

   plugins: [
      new HtmlWebpackPlugin({template: './src/assets/index.html'}),
      new ExtractTextPlugin('style.css', {allChunks: true})
   ]
}
