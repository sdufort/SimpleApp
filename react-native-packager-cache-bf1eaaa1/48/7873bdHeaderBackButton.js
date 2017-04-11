Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TouchableItem = require('./TouchableItem');

var _TouchableItem2 = babelHelpers.interopRequireDefault(_TouchableItem);

var HeaderBackButton = function (_React$PureComponent) {
  babelHelpers.inherits(HeaderBackButton, _React$PureComponent);

  function HeaderBackButton() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, HeaderBackButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = HeaderBackButton.__proto__ || Object.getPrototypeOf(HeaderBackButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._onTextLayout = function (e) {
      if (_this.state.initialTextWidth) {
        return;
      }
      _this.setState({
        initialTextWidth: e.nativeEvent.layout.x + e.nativeEvent.layout.width
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(HeaderBackButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onPress = _props.onPress,
          width = _props.width,
          title = _props.title,
          tintColor = _props.tintColor,
          truncatedTitle = _props.truncatedTitle;


      var renderTruncated = this.state.initialTextWidth && width ? this.state.initialTextWidth > width : false;

      return _react2.default.createElement(
        _TouchableItem2.default,
        {
          delayPressIn: 0,
          onPress: onPress,
          style: styles.container,
          borderless: true
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container },
          _react2.default.createElement(_reactNative.Image, {
            style: [styles.icon, title && styles.iconWithTitle, { tintColor: tintColor }],
            source: require('./assets/back-icon.png')
          }),
          _reactNative.Platform.OS === 'ios' && title && _react2.default.createElement(
            _reactNative.Text,
            {
              onLayout: this._onTextLayout,
              style: [styles.title, { color: tintColor }],
              numberOfLines: 1
            },
            renderTruncated ? truncatedTitle : title
          )
        )
      );
    }
  }]);
  return HeaderBackButton;
}(_react2.default.PureComponent);

HeaderBackButton.propTypes = {
  onPress: _react.PropTypes.func.isRequired,
  title: _react.PropTypes.string,
  tintColor: _react.PropTypes.string,
  truncatedTitle: _react.PropTypes.string,
  width: _react.PropTypes.number
};
HeaderBackButton.defaultProps = {
  tintColor: _reactNative.Platform.select({
    ios: '#037aff'
  }),
  truncatedTitle: 'Back'
};


var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 17,
    paddingRight: 10
  },
  icon: _reactNative.Platform.OS === 'ios' ? {
    height: 20,
    width: 12,
    marginLeft: 10,
    marginRight: 22,
    marginVertical: 12,
    resizeMode: 'contain',
    transform: [{ scaleX: _reactNative.I18nManager.isRTL ? -1 : 1 }]
  } : {
    height: 24,
    width: 24,
    margin: 16,
    resizeMode: 'contain',
    transform: [{ scaleX: _reactNative.I18nManager.isRTL ? -1 : 1 }]
  },
  iconWithTitle: _reactNative.Platform.OS === 'ios' ? {
    marginRight: 5
  } : {}
});

exports.default = HeaderBackButton;