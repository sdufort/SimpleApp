var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var FirstWord = function (_React$Component) {
  babelHelpers.inherits(FirstWord, _React$Component);

  function FirstWord() {
    babelHelpers.classCallCheck(this, FirstWord);
    return babelHelpers.possibleConstructorReturn(this, (FirstWord.__proto__ || Object.getPrototypeOf(FirstWord)).apply(this, arguments));
  }

  babelHelpers.createClass(FirstWord, [{
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
            'Hey'
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
  return FirstWord;
}(_react2.default.Component);

FirstWord.navigationOptions = {
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: '#F5FCFF'
      }
    };
  }
};

var SecondWord = function (_React$Component2) {
  babelHelpers.inherits(SecondWord, _React$Component2);

  function SecondWord() {
    babelHelpers.classCallCheck(this, SecondWord);
    return babelHelpers.possibleConstructorReturn(this, (SecondWord.__proto__ || Object.getPrototypeOf(SecondWord)).apply(this, arguments));
  }

  babelHelpers.createClass(SecondWord, [{
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
            'There'
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.button },
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles.styles.buttonContainer },
              _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                  return navigate('SeeWhy');
                },
                title: 'See Why',
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
  return SecondWord;
}(_react2.default.Component);

SecondWord.navigationOptions = {
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: '#F5FCFF'
      }
    };
  }
};


var Tabs = (0, _reactNavigation.TabNavigator)({
  First: { screen: FirstWord },
  Second: { screen: SecondWord }
});

Tabs.navigationOptions = {
  title: 'My Thoughts'
};

module.exports = { Tabs: Tabs };