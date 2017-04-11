var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./styles.js');

var _continue = require('./Pages/continue');

var _chat = require('./Pages/chat');

var _whyScreen = require('./Pages/whyScreen');

var _settings = require('./Pages/settings');

var _tabs = require('./Pages/tabs');

var _seeWhy = require('./Pages/seeWhy');

var _info = require('./Pages/info');

var _weather = require('./Pages/weather');

var _location = require('./Pages/location');

var _currentWeather = require('./Pages/currentWeather');

var _musicsearch = require('./Pages/musicsearch');

var _musicsearchenter = require('./Pages/musicsearchenter');

var _musicsearchresults = require('./Pages/musicsearchresults');

var _itunessearch = require('./Pages/itunessearch');

var _itunessearchresults = require('./Pages/itunessearchresults');

var _availability = require('./Pages/availability');

var _rb = require('./Pages/rb306');

var _rb2 = require('./Pages/rb304');

var axios = require('axios');

var background = require('./images/background.png');

var HomeScreen = function (_React$Component) {
  babelHelpers.inherits(HomeScreen, _React$Component);

  function HomeScreen(props) {
    babelHelpers.classCallCheck(this, HomeScreen);

    var _this = babelHelpers.possibleConstructorReturn(this, (HomeScreen.__proto__ || Object.getPrototypeOf(HomeScreen)).call(this, props));

    _this.state = {
      trueFalse: false
    };
    return _this;
  }

  babelHelpers.createClass(HomeScreen, [{
    key: 'render',
    value: function render() {
      (0, _currentWeather.setCWeather)();
      var navigate = this.props.navigation.navigate;

      if (!this.state.trueFalse) {
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
                'Hello, world!'
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: (_styles.styles.button, { flex: 1, paddingTop: 40 }) },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.buttonContainer },
                  _react2.default.createElement(_reactNative.Button, {
                    onPress: function onPress() {
                      return navigate('Location');
                    },
                    title: 'Weather',
                    color: '#FFFFFF'
                  })
                )
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start' }) },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.buttonContainer },
                  _react2.default.createElement(_reactNative.Button, {
                    onPress: function onPress() {
                      return navigate('iTunesSearch');
                    },
                    title: 'iTunes Search',
                    color: '#FFFFFF'
                  })
                )
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start' }) },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.buttonContainer },
                  _react2.default.createElement(_reactNative.Button, {
                    onPress: function onPress() {
                      return navigate('MusicSearch');
                    },
                    title: 'Spotify Search',
                    color: '#FFFFFF'
                  })
                )
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start' }) },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.buttonContainer },
                  _react2.default.createElement(_reactNative.Button, {
                    onPress: function onPress() {
                      return navigate('Availability');
                    },
                    title: 'Availability',
                    color: '#FFFFFF'
                  })
                )
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start' }) },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.buttonContainer },
                  _react2.default.createElement(_reactNative.Button, {
                    onPress: function onPress() {
                      return navigate('Settings');
                    },
                    title: 'Settings',
                    color: '#FFFFFF'
                  })
                )
              ),
              _react2.default.createElement(_reactNative.View, { style: { flex: 1 } }),
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
      } else {
        return _react2.default.createElement(
          _reactNative.View,
          { style: _styles.styles.container },
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.text },
            _react2.default.createElement(
              _reactNative.Text,
              { style: _styles.styles.welcome },
              'Hello world!'
            )
          )
        );
      }
    }
  }]);
  return HomeScreen;
}(_react2.default.Component);

HomeScreen.navigationOptions = {
  title: 'SimpleApp',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


var SimpleApp = (0, _reactNavigation.StackNavigator)({
  Home: { screen: HomeScreen },
  Continue: { screen: _continue.Continue },
  Chat: { screen: _chat.ChatScreen },
  Why: { screen: _whyScreen.WhyScreen },
  Settings: { screen: _settings.Settings },
  Tabs: { screen: _tabs.Tabs },
  SeeWhy: { screen: _seeWhy.SeeWhy },
  Info: { screen: _info.Info },
  Weather: { screen: _weather.Weather },
  Location: { screen: _location.Location },
  CurrentWeather: { screen: _currentWeather.CurrentWeather },
  MusicSearch: { screen: _musicsearch.MusicSearch },
  MusicSearchEnter: { screen: _musicsearchenter.MusicSearchEnter },
  MusicSearchResults: { screen: _musicsearchresults.MusicSearchResults },
  iTunesSearch: { screen: _itunessearch.iTunesSearch },
  iTunesSearchResults: { screen: _itunessearchresults.iTunesSearchResults },
  Availability: { screen: _availability.Availability },
  RB306: { screen: _rb.RB306 },
  RB304: { screen: _rb2.RB304 }
});

_reactNative.AppRegistry.registerComponent('SimpleApp', function () {
  return SimpleApp;
});