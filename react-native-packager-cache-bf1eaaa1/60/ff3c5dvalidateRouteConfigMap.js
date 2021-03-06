Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = babelHelpers.interopRequireDefault(_invariant);

function validateRouteConfigMap(routeConfigs) {
  var routeNames = Object.keys(routeConfigs);
  (0, _invariant2.default)(routeNames.length > 0, 'Please specify at least one route when configuring a navigator.');

  routeNames.forEach(function (routeName) {
    var routeConfig = routeConfigs[routeName];

    (0, _invariant2.default)(routeConfig.screen || routeConfig.getScreen, 'Route \'' + routeName + '\' should declare a screen. ' + 'For example:\n\n' + 'import MyScreen from \'./MyScreen\';\n' + '...\n' + (routeName + ': {\n') + '  screen: MyScreen,\n' + '}');

    if (routeConfig.screen && routeConfig.getScreen) {
      (0, _invariant2.default)(false, 'Route \'' + routeName + '\' should declare a screen or ' + 'a getScreen, not both.');
    }

    if (routeConfig.screen) {
      (0, _invariant2.default)(typeof routeConfig.screen === 'function', 'The component for route \'' + routeName + '\' must be a ' + 'a React component. For example:\n\n' + 'import MyScreen from \'./MyScreen\';\n' + '...\n' + (routeName + ': {\n') + '  screen: MyScreen,\n' + '}\n\n' + 'You can also use a navigator:\n\n' + 'import MyNavigator from \'./MyNavigator\';\n' + '...\n' + (routeName + ': {\n') + '  screen: MyNavigator,\n' + '}');
    }
  });
}

exports.default = validateRouteConfigMap;