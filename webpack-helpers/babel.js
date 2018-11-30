/***
 * This file is the configuration of Babel
 * getting rid of the .babelrc file by pushing everything here
 */
var rootDir = process.cwd() + '/';

module.exports = {
  loader: 'babel-loader',
  options: {
    presets: [
      // [
      // preset or not ?? browser specification ?
      // the new polyfill seems pretty powerful imo
      // ]
    ],
    plugins: [
      require.resolve('@babel/plugin-syntax-dynamic-import'),
      require.resolve('@babel/plugin-transform-object-assign'),
      [
        require.resolve('@babel/plugin-proposal-object-rest-spread'),
        { loose: true }
      ],
      require.resolve('@babel/plugin-proposal-class-properties')
    ],
    // transpilation speedup
    cacheDirectory: rootDir + '.cache/babel-cache/'
  }
};