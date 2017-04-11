Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createNavigationContainer = require('../createNavigationContainer');

var _createNavigationContainer2 = babelHelpers.interopRequireDefault(_createNavigationContainer);

var _createNavigator = require('./createNavigator');

var _createNavigator2 = babelHelpers.interopRequireDefault(_createNavigator);

var _CardStack = require('../views/CardStack');

var _CardStack2 = babelHelpers.interopRequireDefault(_CardStack);

var _StackRouter = require('../routers/StackRouter');

var _StackRouter2 = babelHelpers.interopRequireDefault(_StackRouter);

exports.default = function (routeConfigMap) {
  var stackConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var containerOptions = stackConfig.containerOptions,
      initialRouteName = stackConfig.initialRouteName,
      initialRouteParams = stackConfig.initialRouteParams,
      paths = stackConfig.paths,
      headerComponent = stackConfig.headerComponent,
      headerMode = stackConfig.headerMode,
      mode = stackConfig.mode,
      cardStyle = stackConfig.cardStyle,
      onTransitionStart = stackConfig.onTransitionStart,
      onTransitionEnd = stackConfig.onTransitionEnd,
      navigationOptions = stackConfig.navigationOptions;

  var stackRouterConfig = {
    initialRouteName: initialRouteName,
    initialRouteParams: initialRouteParams,
    paths: paths,
    navigationOptions: navigationOptions
  };
  var router = (0, _StackRouter2.default)(routeConfigMap, stackRouterConfig);
  return (0, _createNavigationContainer2.default)((0, _createNavigator2.default)(router)(function (props) {
    return _react2.default.createElement(_CardStack2.default, babelHelpers.extends({}, props, {
      headerComponent: headerComponent,
      headerMode: headerMode,
      mode: mode,
      cardStyle: cardStyle,
      onTransitionStart: onTransitionStart,
      onTransitionEnd: onTransitionEnd
    }));
  }), containerOptions);
};