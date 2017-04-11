var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var background = require('./../images/background.png');

var responses = ['Hold on, go back quickly', 'Try again', 'One more time', 'The \'Go\' button should pop up next time'];

var Continue = function (_React$Component) {
  babelHelpers.inherits(Continue, _React$Component);

  function Continue() {
    babelHelpers.classCallCheck(this, Continue);
    return babelHelpers.possibleConstructorReturn(this, (Continue.__proto__ || Object.getPrototypeOf(Continue)).apply(this, arguments));
  }

  babelHelpers.createClass(Continue, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      var resNum = Math.floor(Math.random() * responses.length);
      return _react2.default.createElement(
        _reactNative.Image,
        { source: background, style: _styles.styles.backgroundImage },
        _react2.default.createElement(
          _reactNative.View,
          { style: _styles.styles.picContainer },
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.text },
            _react2.default.createElement(
              _reactNative.Text,
              { style: _styles.styles.welcome },
              responses[resNum]
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
        )
      );
    }
  }]);
  return Continue;
}(_react2.default.Component);

Continue.navigationOptions = {
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


module.exports = { Continue: Continue };