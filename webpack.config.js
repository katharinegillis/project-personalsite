var Encore = require('@symfony/webpack-encore');
var LiveReloadPlugin = require('webpack-livereload-plugin');

Encore
  // Directory for the compiled assets.
  .setOutputPath('html/assets')

  // The public path used by the web server to access the previous directory.
  .setPublicPath('/assets')

  // Create the app js and css.
  .addEntry('app', './src/main.js')

  // Enable source maps during development.
  .enableSourceMaps(!Encore.isProduction())

  // Empty the output path directory before each build.
  .cleanupOutputBeforeBuild()

  // Show OS notifications when builds finish or fail.
  .enableBuildNotifications()

  // Process Scss.
  .enableSassLoader()

  // Process React jsx.
  .enableReactPreset()

  // Include the LiveReload plugin to reload the browser to reload when the files are changed.
  .addPlugin(new LiveReloadPlugin())

  // Include eslinting in the airbnb style.
  .addLoader({
    test: /\.(js|jsx)$/,
    loader: 'eslint-loader',
    exclude: [/node_modules/],
    enforce: 'pre',
    options: {
      configFile: './.eslintrc',
      emitWarning: true
    }
  })
;

var config = Encore.getWebpackConfig();

// Update the watch options to:
// 1. Use polling in case the --watch is run on a Windows system (or WSL).
// 2. Don't care about changes in the node_modules folder.
//config.watchOptions = { poll: true, ignored: /node_modules/ };

module.exports = config;