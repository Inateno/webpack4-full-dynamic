/***
 * actually we have 2 entry points, bootstrap and "main"
 * + a chunk of common stuff
 * thanks to dynamic-load we should be able to improve the build
 * with just the small script that launch Platform/analytics
 * and finally launch the load of the main
 * 
 * no aditionnal configuration is required (in the current demo)
 * if, by putting tis in our build's context, things went wrong
 * this mean we have something underhood that break webpack
 * 
 * I try to add, step by step, each component from our build
 * upgrade them and make them more clear to read/understand
 * 
 * comments are also welcome
 */
const path = require('path');

const helpers = {
  babelLoader     : require( './webpack-helpers/babel' ),
  typescriptLoader: require( './webpack-helpers/typescript' ),
  ifDefLoader     : require( './webpack-helpers/ifdef' ),
  plugins         : require('./webpack-helpers/plugins'),
}

// this will came from the main webpack.config.js file in the future
// for testing it's fine this way
var options = {
  webpack: {
    visualizer: true,
    bundleAnalyzer: true
  }
};

const rootDir = process.cwd() + '/';
const outputRelative = 'dist/';
const outputPath = path.resolve(__dirname, 'dist');

var config = {
  // only one entry point seems enough with split+dynamic
  entry: path.resolve( rootDir, 'src', 'Application' ),
  output: {
    filename: 'main.js',
    path: outputPath
  },
  mode: 'development',
  plugins: helpers.plugins,

  // rules for parsing all kind of files
  module: {
    rules: [
      {
        test: /\.js$/,
        // TODO setup include if prefered and remove exclude
        // include: codeIncludes,
        // exclude: /node_modules/,
        use: [
          helpers.babelLoader,
          helpers.ifDefLoader
        ]
      },

      {
        test: /\.ts$/,
        // TODO setup include if prefered and remove exclude
        // include: codeIncludes,
        // exclude: /node_modules/,
        use: [
          helpers.babelLoader,
          helpers.typescriptLoader,
          helpers.ifDefLoader
        ]
      },

      // Allow import of JSON files and remove comments
      {
        test: /^[^.]+?(?!\.schema)\.json$/,
        use: ['webpack-comment-remover-loader']
      },

      // Copy worker cache in theoretically.
      {
        test: /\.worker\\\.js$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              inline: true
            }
          },
          helpers.ifDefLoader
        ]
      },

      // Allow import of raw text files.
      {
        test: /\.(txt)$/,
        loader: 'raw-loader'
      },

      // Allow import of shader files.
      {
        test: /\.(vert|frag|glsl)$/,
        loader: 'raw-loader'
      },

      // Allow import of CSV.
      {
        test: /\.(csv)$/,
        loader: 'dsv-loader'
      },

      // Allow import of XML.
      {
        test: /\.(xml)$/,
        loader: 'xml-loader'
      },

      // Allow import of CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // Allow import of images.
      {
        test: /\.(jpe?g|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'files/images/'
          }
        }
      },

      // Allow import of sound data.
      {
        test: /\.(wav|mp3|ogg|mp4|webm|ogv)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'files/media/'
          }
        }
      }
    ]
  }
};

config.devServer = {
  https      : true,
  openPage   : outputRelative.substr(1),
  overlay    : true,
  contentBase: outputRelative,
  port       : options.DEV_SERVER_PORT
};

if ( options.webpack.visualizer ) {
  const Visualizer = require('webpack-visualizer-plugin');
  config.plugins.push(new Visualizer({
    filename: './statistics.html'
  }));
}

if ( options.webpack.bundleAnalyzer ) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  config.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    // if false wont open the browser should be false most of time
    openAnalyzer: false
  }));
}

module.exports = config;