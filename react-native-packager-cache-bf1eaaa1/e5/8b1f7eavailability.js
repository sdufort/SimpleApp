var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';

var Availability = function (_React$Component) {
  babelHelpers.inherits(Availability, _React$Component);

  function Availability() {
    babelHelpers.classCallCheck(this, Availability);
    return babelHelpers.possibleConstructorReturn(this, (Availability.__proto__ || Object.getPrototypeOf(Availability)).apply(this, arguments));
  }

  babelHelpers.createClass(Availability, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

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
              'Below are computer labs on the 3rd floor of Roger Bacon Hall, you can check the availability of each computer here.'
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start', paddingTop: 20 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('RB304');
                  },
                  title: 'RB 304',
                  color: '#FFFFFF',
                  paddingTop: 20
                })
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start', paddingTop: 20 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('RB306');
                  },
                  title: 'RB 306',
                  color: '#FFFFFF',
                  paddingTop: 20
                })
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start', paddingTop: 20 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('');
                  },
                  title: 'RB 330',
                  color: '#FFFFFF',
                  paddingTop: 20
                })
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start', paddingTop: 20 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('');
                  },
                  title: 'RB 350',
                  color: '#FFFFFF',
                  paddingTop: 20
                })
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start', paddingTop: 20 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('');
                  },
                  title: 'Software Lab',
                  color: '#FFFFFF',
                  paddingTop: 20
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
        )
      );
    }
  }]);
  return Availability;
}(_react2.default.Component);

Availability.navigationOptions = {
  title: 'Spotify Search Type',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


module.exports = { Availability: Availability };