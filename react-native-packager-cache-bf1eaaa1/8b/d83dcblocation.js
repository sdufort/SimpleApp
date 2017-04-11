var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var _weather = require('./weather');

var _currentWeather = require('./currentWeather');

var location = '';
var background = require('./../images/background.png');

var Location = function (_React$Component) {
  babelHelpers.inherits(Location, _React$Component);

  function Location() {
    babelHelpers.classCallCheck(this, Location);
    return babelHelpers.possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).apply(this, arguments));
  }

  babelHelpers.createClass(Location, [{
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
              'Your location is where you currently are. Duh.'
            ),
            _react2.default.createElement(_reactNative.TextInput, { style: _styles.styles.weatherAddress,
              justifyContent: 'center',
              style: { height: 40 },
              placeholder: 'Enter a location here',
              selectionColor: '#2E9298',
              clearButtonMode: 'while-editing',
              clearTextOnFocus: true,
              color: '#333333',
              backgroundColor: '#F5FCFF',
              borderWidth: 1,
              padding: 10,
              keyboardAppearance: 'dark',
              onChangeText: function onChangeText(text) {
                return (0, _weather.setWeather)(text);
              }
            }),
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles.styles.button },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('Weather');
                  },
                  title: 'Get Weather',
                  color: '#FFFFFF'
                })
              )
            ),
            _react2.default.createElement(_reactNative.Text, { style: _styles.styles.welcome }),
            _react2.default.createElement(_reactNative.Text, { style: _styles.styles.welcome }),
            _react2.default.createElement(
              _reactNative.Text,
              { style: _styles.styles.welcome },
              'Or just search your current location, because why would you care about anywhere else?'
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 2 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: ((0, _currentWeather.setCWeather)(), function () {
                    return navigate('CurrentWeather');
                  }),
                  title: 'Use Current Location',
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
        )
      );
    }
  }]);
  return Location;
}(_react2.default.Component);

Location.navigationOptions = {
  title: 'Location',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


module.exports = { Location: Location };