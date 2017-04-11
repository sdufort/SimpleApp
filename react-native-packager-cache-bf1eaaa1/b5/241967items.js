var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var AnimatedScrollView = _reactNative.Animated.createAnimatedComponent(_reactNative.ScrollView);
var window = _reactNative.Dimensions.get('window');

var styles = _reactNative.StyleSheet.create({
  scrollView: {
    height: 120,
    width: 198 },
  container: {
    height: 120,
    borderColor: '#BDBDC1',
    borderWidth: 1,
    backgroundColor: "#ffffff"
  }
});

var Items = function (_Component) {
  babelHelpers.inherits(Items, _Component);

  function Items(props) {
    babelHelpers.classCallCheck(this, Items);

    var _this = babelHelpers.possibleConstructorReturn(this, (Items.__proto__ || Object.getPrototypeOf(Items)).call(this, props));

    _this.state = {
      height: new _reactNative.Animated.Value(0)
    };
    return _this;
  }

  babelHelpers.createClass(Items, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var height = this.props.height;


      _reactNative.Animated.timing(this.state.height, {
        toValue: height * 3,
        duration: 200,
        easing: _reactNative.Easing.linear
      }).start();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          positionX = _props.positionX,
          positionY = _props.positionY,
          show = _props.show,
          _onPress = _props.onPress,
          width = _props.width,
          height = _props.height;


      if (!show) {
        return null;
      }

      var renderedItems = _react2.default.Children.map(items, function (item) {

        return _react2.default.createElement(
          _reactNative.TouchableWithoutFeedback,
          { onPress: function onPress() {
              return _onPress(item.props.children, item.props.value);
            } },
          _react2.default.createElement(
            _reactNative.View,
            null,
            item
          )
        );
      });

      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.container] },
        _react2.default.createElement(
          AnimatedScrollView,
          {
            style: { width: width - 2, height: this.state.height },
            automaticallyAdjustContentInsets: false,
            bounces: false },
          renderedItems
        )
      );
    }
  }]);
  return Items;
}(_react.Component);

Items.propTypes = {
  positionX: _react2.default.PropTypes.number,
  positionY: _react2.default.PropTypes.number,
  show: _react2.default.PropTypes.bool,
  onPress: _react2.default.PropTypes.func
};

Items.defaultProps = {
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  show: false,
  onPress: function onPress() {}
};

module.exports = Items;