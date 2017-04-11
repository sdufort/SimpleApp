var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var ChatScreen = function (_React$Component) {
  babelHelpers.inherits(ChatScreen, _React$Component);

  function ChatScreen() {
    babelHelpers.classCallCheck(this, ChatScreen);
    return babelHelpers.possibleConstructorReturn(this, (ChatScreen.__proto__ || Object.getPrototypeOf(ChatScreen)).apply(this, arguments));
  }

  babelHelpers.createClass(ChatScreen, [{
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
            'Hey!'
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.button },
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles.styles.buttonContainer },
              _react2.default.createElement(_reactNative.Button, {
                onPress: function onPress() {
                  return navigate('Why');
                },
                title: 'Why?',
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
  return ChatScreen;
}(_react2.default.Component);

ChatScreen.navigationOptions = {
  title: function title(_ref) {
    var state = _ref.state;
    return 'Chat with ' + state.params.user;
  },
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: '#F5FCFF'
      }
    };
  }
};


module.exports = { ChatScreen: ChatScreen };