/* config-overrides.js */
// const rewirePreact = require("react-app-rewire-preact");
const webpack = require("webpack");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const DynamicCDNWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const path = require("path");
var _require = require("react-app-rewired"),
  injectBabelPlugin = _require.injectBabelPlugin;
// const rewirePreact = require("react-app-rewire-preact");


function rewirePreload(config, env) {
  config.plugins = [
    ...config.plugins,
    new DynamicCDNWebpackPlugin({ only: ["react", "react-dom"] }),
    new CompressionPlugin({ test: /\.js/ }),
    new PreloadWebpackPlugin({
      rel: "prefetch"
    })
  ];
  return config;
}
function compileLinkNodeModules(config, env) {
  config.module.rules[1].oneOf[1].include = [
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "../../node_modules/components"),
    path.resolve(__dirname, "node_modules/components"),
  ];
  return config;
}
// module.exports = rewireStyledComponents;

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config = rewirePreact(config, env);
  if (env === "production") {
    console.log("rewire with preload");
    config = rewirePreload(config, env);
    
  } else {
  }
  config = compileLinkNodeModules(config, env);
  // config = rewireStyledComponents(config, env);
  // console.log(JSON.stringify(config, null, 2));
  // config = rewiredEmotionPluginOptions(config, env);
  return config;
};
