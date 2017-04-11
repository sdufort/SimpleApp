Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _SceneView = require('../SceneView');

var _SceneView2 = babelHelpers.interopRequireDefault(_SceneView);

var _withCachedChildNavigation = require('../../withCachedChildNavigation');

var _withCachedChildNavigation2 = babelHelpers.interopRequireDefault(_withCachedChildNavigation);

var DrawerScreen = function (_PureComponent) {
  babelHelpers.inherits(DrawerScreen, _PureComponent);

  function DrawerScreen() {
    babelHelpers.classCallCheck(this, DrawerScreen);
    return babelHelpers.possibleConstructorReturn(this, (DrawerScreen.__proto__ || Object.getPrototypeOf(DrawerScreen)).apply(this, arguments));
  }

  babelHelpers.createClass(DrawerScreen, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          router = _props.router,
          navigation = _props.navigation,
          childNavigationProps = _props.childNavigationProps;
      var _navigation$state = navigation.state,
          routes = _navigation$state.routes,
          index = _navigation$state.index;

      var childNavigation = childNavigationProps[routes[index].key];
      var Content = router.getComponentForRouteName(routes[index].routeName);
      return _react2.default.createElement(_SceneView2.default, {
        screenProps: this.props.screenProps,
        component: Content,
        navigation: childNavigation
      });
    }
  }]);
  return DrawerScreen;
}(_react.PureComponent);

exports.default = (0, _withCachedChildNavigation2.default)(DrawerScreen);