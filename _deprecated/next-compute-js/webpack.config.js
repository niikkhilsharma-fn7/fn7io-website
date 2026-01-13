const path = require("path");
const webpack = require("webpack");

const { applyWebpackTransform } = require("@fastly/serve-vercel-build-output/dist/node/webpack/transform");

module.exports = {
  mode: 'production',
  experiments: {
    topLevelAwait: true,
  },
  entry: "./src/index.js",
  optimization: {
    minimize: true,
  },
  target: "webworker",
  performance: {
    hints: false,
    maxEntrypointSize: 10240000,
    maxAssetSize: 10240000,
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "bin"),
    libraryTarget: "this",
  },
  resolve: {
    fallback: {
      "fs": false,
      "http": false,
      "https": false,
      "net": false,
      "tls": false,
      "crypto": false,
      "stream": false,
      "stream/web": false,
      "url": false,
      "zlib": false,
      "util": false,
      "buffer": false,
      "assert": false,
      "events": false,
      "path": false,
      "os": false,
      "querystring": false,
      "child_process": false,
      "cluster": false,
      "dgram": false,
      "dns": false,
      "module": false,
      "readline": false,
      "repl": false,
      "string_decoder": false,
      "sys": false,
      "timers": false,
      "tty": false,
      "vm": false,
      "v8": false,
      "inspector": false,
      "async_hooks": false,
      "perf_hooks": false,
      "worker_threads": false,
      "constants": false,
      "pnpapi": false,
    },
  },
  module: {
    rules: [
      // Loaders go here.
      // e.g., ts-loader for TypeScript
    ],
  },
  plugins: [
    // Handle node: prefixed imports by replacing them with regular module names
    new webpack.NormalModuleReplacementPlugin(
      /^node:/,
      (resource) => {
        resource.request = resource.request.replace(/^node:/, '');
      }
    ),
    // Polyfills go here.
    // Used for, e.g., any cross-platform WHATWG,
    // or core nodejs modules needed for your application.
    // new webpack.ProvidePlugin({
    // }),
  ],
  externals: [
    ({request,}, callback) => {
      // Allow Webpack to handle fastly:* namespaced module imports by treating
      // them as modules rather than try to process them as URLs
      if (/^fastly:.*$/.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      // Exclude webpack internal modules
      if (/^webpack(\/|$)/.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      // Exclude Next.js server modules that shouldn't be bundled
      if (/^next\/dist\/(server|build)/.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    }
  ],
};

// Allow plugins to apply transforms
module.exports = applyWebpackTransform(module.exports, webpack);
