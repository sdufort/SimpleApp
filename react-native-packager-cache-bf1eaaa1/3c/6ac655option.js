var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 10
  }
});

var Option = function (_Component) {
  babelHelpers.inherits(Option, _Component);

  function Option(props) {
    babelHelpers.classCallCheck(this, Option);
    return babelHelpers.possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
  }

  babelHelpers.createClass(Option, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          styleText = _props.styleText;


      return _react2.default.createElement(
        _reactNative.View,
        { style: [styles.container, style] },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styleText },
          this.props.children
        )
      );
    }
  }]);
  return Option;
}(_react.Component);

Option.propTypes = {
  children: _react2.default.PropTypes.string.isRequired
};

module.exports = Option;