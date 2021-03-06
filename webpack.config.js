const path = require('path');

var config = {
  entry: path.join(__dirname, './client/index.js'),
	
  output: {
    path: path.join(__dirname, 'bundles'),
    filename: 'bundle.js',
  },
	
  // devServer: {
  //   inline: true,
  //   port: 8080
  // }, tabbed this out to see if we can get this running on our actual server
	
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
				
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};

module.exports = config;