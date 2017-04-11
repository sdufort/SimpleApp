var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var Info = function (_React$Component) {
  babelHelpers.inherits(Info, _React$Component);

  function Info() {
    babelHelpers.classCallCheck(this, Info);
    return babelHelpers.possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
  }

  babelHelpers.createClass(Info, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.View,
        { style: _styles.styles.container },
        _react2.default.createElement(
          _reactNative.View,
          { style: _styles.styles.text },
          _react2.default.createElement(
            _reactNative.Text,
            { style: _styles.styles.welcome },
            'There is nothing to know, you are lame.'
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.copyright },
            _react2.default.createElement(
              _reactNative.Text,
              { style: _styles.styles.instructions },
              'Copyright 2017 - Sean Dufort'
            )
          )
        )
      );
    }
  }]);
  return Info;
}(_react2.default.Component);

module.exports = { Info: Info };