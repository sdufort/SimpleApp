var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var SeeWhy = function (_React$Component) {
  babelHelpers.inherits(SeeWhy, _React$Component);

  function SeeWhy() {
    babelHelpers.classCallCheck(this, SeeWhy);
    return babelHelpers.possibleConstructorReturn(this, (SeeWhy.__proto__ || Object.getPrototypeOf(SeeWhy)).apply(this, arguments));
  }

  babelHelpers.createClass(SeeWhy, [{
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
            'I do not know why'
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
  return SeeWhy;
}(_react2.default.Component);

SeeWhy.navigationOptions = {
  title: '',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: '#F5FCFF'
      }
    };
  }
};


module.exports = { SeeWhy: SeeWhy };