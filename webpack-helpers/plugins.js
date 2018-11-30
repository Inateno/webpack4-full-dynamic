const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = [
  // Type checking.
  new CheckerPlugin(),
  
  // Show progress in an appealing way.
  new webpack.ProgressPlugin(),
  
  // If running in webpack-dev-server we want to write build files out
  // to disk to avoid a working build (in live dev) turning into a
  // failing build (if you run it later w/ webpack-dev-server).
  new WriteFilePlugin(),
  
  // Enforce case sensitive paths to make sure we're not running into any
  // weird cache issues
  new CaseSensitivePathsPlugin()
  
  // More plugins are added below in the game and GCF specific sections.
];