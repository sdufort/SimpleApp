var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Option = require('./option');

var window = _reactNative.Dimensions.get('window');

var SELECT = 'SELECT';

var styles = _reactNative.StyleSheet.create({
  container: {
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale
  }
});

var Select = function (_Component) {
  babelHelpers.inherits(Select, _Component);

  function Select(props) {
    babelHelpers.classCallCheck(this, Select);

    var _this = babelHelpers.possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.pageX = 0;
    _this.pageY = 0;

    var defaultValue = props.defaultValue;

    if (!defaultValue) {
      if (Array.isArray(props.children)) {
        defaultValue = props.children[0].props.children;
      } else {
        defaultValue = props.children.props.children;
      }
    }

    _this.state = {
      value: defaultValue
    };
    return _this;
  }

  babelHelpers.createClass(Select, [{
    key: 'reset',
    value: function reset() {
      var defaultValue = this.props.defaultValue;

      this.setState({ value: defaultValue });
    }
  }, {
    key: '_onPress',
    value: function _onPress() {
      var _this2 = this;

      var _props = this.props,
          optionListRef = _props.optionListRef,
          children = _props.children,
          onSelect = _props.onSelect,
          width = _props.width,
          height = _props.height;


      if (!children.length) {
        return false;
      }

      optionListRef()._show(children, this.pageX, this.pageY, width, height, function (item) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item;

        if (item) {
          onSelect(value);
          _this2.setState({
            value: item
          });
        }
      });
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.props.optionListRef()._blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          children = _props2.children,
          defaultValue = _props2.defaultValue,
          style = _props2.style,
          styleOption = _props2.styleOption,
          styleText = _props2.styleText;

      var dimensions = { width: width, height: height };

      return _react2.default.createElement(
        _reactNative.TouchableWithoutFeedback,
        { onPress: this._onPress.bind(this) },
        _react2.default.createElement(
          _reactNative.View,
          { ref: SELECT, style: [styles.container, dimensions, style] },
          _react2.default.createElement(
            Option,
            { style: styleOption, styleText: styleText },
            this.state.value
          )
        )
      );
    }
  }]);
  return Select;
}(_react.Component);

Select.propTypes = {
  width: _react2.default.PropTypes.number,
  height: _react2.default.PropTypes.number,
  optionListRef: _react2.default.PropTypes.func.isRequired,
  onSelect: _react2.default.PropTypes.func
};

Select.defaultProps = {
  width: 200,
  height: 40,
  onSelect: function onSelect() {}
};

module.exports = Select;