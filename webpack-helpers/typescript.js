/***
 * This file is the configuration for Typescripts files
 */
var rootDir = process.cwd() + '/';

module.exports = {
  loader: 'awesome-typescript-loader',
  options: {
    silent: true,
    visualStudioErrorFormat: true,
    ignoreDiagnostics: [1192, 2305, 2307],
    useBabel: false,
    useCache: false,
    babelCore: require.resolve('@babel/core'),
    // transpilation speedup
    cacheDirectory: rootDir + '.cache/awesome-typescript-loader-cache/',
    reportFiles: ['src/*.{ts,tsx}', 'src/**/*.{ts,tsx}']
  }
};