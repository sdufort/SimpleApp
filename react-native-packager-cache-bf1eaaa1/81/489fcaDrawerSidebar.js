Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _withCachedChildNavigation = require('../../withCachedChildNavigation');

var _withCachedChildNavigation2 = babelHelpers.interopRequireDefault(_withCachedChildNavigation);

var DrawerSidebar = function (_PureComponent) {
  babelHelpers.inherits(DrawerSidebar, _PureComponent);

  function DrawerSidebar() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, DrawerSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = DrawerSidebar.__proto__ || Object.getPrototypeOf(DrawerSidebar)).call.apply(_ref, [this].concat(args))), _this), _this._getScreenConfig = function (routeKey, configName) {
      var DrawerScreen = _this.props.router.getComponentForRouteName('DrawerClose');
      return DrawerScreen.router.getScreenConfig(_this.props.childNavigationProps[routeKey], configName);
    }, _this._getLabel = function (_ref2) {
      var focused = _ref2.focused,
          tintColor = _ref2.tintColor,
          route = _ref2.route;

      var drawer = _this._getScreenConfig(route.key, 'drawer');
      if (drawer && drawer.label) {
        return typeof drawer.label === 'function' ? drawer.label({ tintColor: tintColor, focused: focused }) : drawer.label;
      }

      var title = _this._getScreenConfig(route.key, 'title');
      if (typeof title === 'string') {
        return title;
      }

      return route.routeName;
    }, _this._renderIcon = function (_ref3) {
      var focused = _ref3.focused,
          tintColor = _ref3.tintColor,
          route = _ref3.route;

      var drawer = _this._getScreenConfig(route.key, 'drawer');
      if (drawer && drawer.icon) {
        return typeof drawer.icon === 'function' ? drawer.icon({ tintColor: tintColor, focused: focused }) : drawer.icon;
      }
      return null;
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(DrawerSidebar, [{
    key: 'render',
    value: function render() {
      var ContentComponent = this.props.contentComponent;
      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.container, this.props.style] },
        _react2.default.createElement(ContentComponent, babelHelpers.extends({}, this.props.contentOptions, {
          navigation: this.props.navigation,
          getLabel: this._getLabel,
          renderIcon: this._renderIcon,
          router: this.props.router
        }))
      );
    }
  }]);
  return DrawerSidebar;
}(_react.PureComponent);

exports.default = (0, _withCachedChildNavigation2.default)(DrawerSidebar);


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});