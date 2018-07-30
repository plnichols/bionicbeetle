const rewireStyledComponents = require('react-app-rewire-styled-components');
const { injectBabelPlugin } = require('react-app-rewired');

const moduleResolver = ['module-resolver', {
  "root": ["./src"]
}];

module.exports = function override(config, env) {
  // add plugins
  config = injectBabelPlugin(moduleResolver, config);

  // add styled-components rewire
  config = rewireStyledComponents(config, env);
  return config;
};
