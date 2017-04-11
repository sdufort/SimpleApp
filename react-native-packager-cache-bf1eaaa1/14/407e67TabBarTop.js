Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeTabView = require('react-native-tab-view');

var _TabBarIcon = require('./TabBarIcon');

var _TabBarIcon2 = babelHelpers.interopRequireDefault(_TabBarIcon);

var TabBarTop = function (_PureComponent) {
  babelHelpers.inherits(TabBarTop, _PureComponent);

  function TabBarTop() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabBarTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabBarTop.__proto__ || Object.getPrototypeOf(TabBarTop)).call.apply(_ref, [this].concat(args))), _this), _this._renderLabel = function (scene) {
      var _this$props = _this.props,
          position = _this$props.position,
          navigationState = _this$props.navigationState,
          activeTintColor = _this$props.activeTintColor,
          inactiveTintColor = _this$props.inactiveTintColor,
          showLabel = _this$props.showLabel,
          upperCaseLabel = _this$props.upperCaseLabel,
          labelStyle = _this$props.labelStyle;

      if (showLabel === false) {
        return null;
      }
      var index = scene.index;
      var routes = navigationState.routes;

      var inputRange = [-1].concat(babelHelpers.toConsumableArray(routes.map(function (x, i) {
        return i;
      })));
      var outputRange = inputRange.map(function (inputIndex) {
        return inputIndex === index ? activeTintColor : inactiveTintColor;
      });
      var color = position.interpolate({
        inputRange: inputRange,
        outputRange: outputRange
      });

      var label = _this.props.getLabel(scene);
      if (typeof label === 'string') {
        return _react2.default.createElement(
          _reactNative.Animated.Text,
          { style: [styles.label, { color: color }, labelStyle] },
          upperCaseLabel ? label.toUpperCase() : label
        );
      }
      if (typeof label === 'function') {
        return label(scene);
      }

      return label;
    }, _this._renderIcon = function (scene) {
      var _this$props2 = _this.props,
          position = _this$props2.position,
          navigationState = _this$props2.navigationState,
          activeTintColor = _this$props2.activeTintColor,
          inactiveTintColor = _this$props2.inactiveTintColor,
          renderIcon = _this$props2.renderIcon,
          showIcon = _this$props2.showIcon;

      if (showIcon === false) {
        return null;
      }
      return _react2.default.createElement(_TabBarIcon2.default, {
        position: position,
        navigationState: navigationState,
        activeTintColor: activeTintColor,
        inactiveTintColor: inactiveTintColor,
        renderIcon: renderIcon,
        scene: scene,
        style: styles.icon
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabBarTop, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(_reactNativeTabView.TabBar, babelHelpers.extends({}, props, {
        renderIcon: this._renderIcon,
        renderLabel: this._renderLabel
      }));
    }
  }]);
  return TabBarTop;
}(_react.PureComponent);

TabBarTop.defaultProps = {
  activeTintColor: '#fff',
  inactiveTintColor: '#fff',
  showIcon: false,
  showLabel: true,
  upperCaseLabel: true
};
exports.default = TabBarTop;


var styles = _reactNative.StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  },
  label: {
    textAlign: 'center',
    fontSize: 13,
    margin: 8,
    backgroundColor: 'transparent'
  }
});