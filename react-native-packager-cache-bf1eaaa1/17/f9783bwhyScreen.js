var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var WhyScreen = function (_React$Component) {
  babelHelpers.inherits(WhyScreen, _React$Component);

  function WhyScreen() {
    babelHelpers.classCallCheck(this, WhyScreen);
    return babelHelpers.possibleConstructorReturn(this, (WhyScreen.__proto__ || Object.getPrototypeOf(WhyScreen)).apply(this, arguments));
  }

  babelHelpers.createClass(WhyScreen, [{
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
            'Because why not'
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.button },
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles.styles.buttonContainer },
              _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                  return navigate('Tabs');
                },
                title: 'Tabs',
                color: '#FFFFFF'
              })
            )
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
  return WhyScreen;
}(_react2.default.Component);

WhyScreen.navigationOptions = {
  title: 'Why You Ask?',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: '#F5FCFF'
      }
    };
  }
};


module.exports = { WhyScreen: WhyScreen };