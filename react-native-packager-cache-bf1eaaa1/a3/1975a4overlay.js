var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var window = _reactNative.Dimensions.get('window');

var styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    position: 'absolute',
    width: window.width,
    height: window.height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

var Overlay = function (_Component) {
  babelHelpers.inherits(Overlay, _Component);

  function Overlay(props) {
    babelHelpers.classCallCheck(this, Overlay);
    return babelHelpers.possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));
  }

  babelHelpers.createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          pageX = _props.pageX,
          pageY = _props.pageY,
          show = _props.show,
          onPress = _props.onPress,
          overlayStyles = _props.overlayStyles;


      if (!show) {
        return null;
      }

      return _react2.default.createElement(
        _reactNative.TouchableWithoutFeedback,
        { style: styles.container, onPress: onPress },
        _react2.default.createElement(
          _reactNative.View,
          { style: [styles.overlay, { top: -pageY, left: -pageX }, overlayStyles] },
          this.props.children
        )
      );
    }
  }]);
  return Overlay;
}(_react.Component);

Overlay.propTypes = {
  pageX: _react2.default.PropTypes.number,
  pageY: _react2.default.PropTypes.number,
  show: _react2.default.PropTypes.bool,
  overlayStyles: _react2.default.PropTypes.object
};

Overlay.defaultProps = {
  pageX: 0,
  pageY: 0,
  show: false,
  overlayStyles: {}
};

module.exports = Overlay;