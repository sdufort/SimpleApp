var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var currentLatitude = '';
var currentLongitude = '';
var useCurrent = false;

var axios = require('axios');

var message = '';
var weatherHeader = '';
var printTemp = '';
var printOutside = '';
var printHumidity = '';
var printWind = '';
var printHourly = '';
var printPrecip = '';
var printAlerts = '';
var background = '';

var CurrentWeather = function (_React$Component) {
  babelHelpers.inherits(CurrentWeather, _React$Component);

  function CurrentWeather() {
    babelHelpers.classCallCheck(this, CurrentWeather);
    return babelHelpers.possibleConstructorReturn(this, (CurrentWeather.__proto__ || Object.getPrototypeOf(CurrentWeather)).apply(this, arguments));
  }

  babelHelpers.createClass(CurrentWeather, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      if (printOutside === 'How it looks outside: Mostly Cloudy') {
        background = require('./../images/mostlycloudy.jpg');
      } else if (printOutside === 'How it looks outside: Partly Cloudy') {
        background = require('./../images/partlycloudy.jpg');
      } else if (printOutside === 'How it looks outside: Overcast') {
        background = require('./../images/overcast.jpg');
      } else if (printOutside === 'How it looks outside: Rain') {
        background = require('./../images/rain.jpg');
      } else if (printOutside === 'How it looks outside: Light Rain') {
        background = require('./../images/rain.jpg');
      } else if (printOutside === 'How it looks outside: Drizzle') {
        background = require('./../images/rain.jpg');
      } else if (printOutside === 'How it looks outside: Snow') {
        background = require('./../images/snow.jpg');
      } else if (printOutside === 'How it looks outside: Heavy Snow') {
        background = require('./../images/snow.jpg');
      } else if (printOutside === 'How it looks outside: Light Snow') {
        background = require('./../images/snow.jpg');
      } else if (printOutside === 'How it looks outside: Clear') {
        background = require('./../images/clear.jpg');
      } else {
        background = require('./../images/sunny.jpg');
      }
      if (message === '') {
        return _react2.default.createElement(
          _reactNative.Image,
          { source: background, style: _styles.styles.backgroundImage },
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.weatherPicContainer },
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles.styles.text },
              _react2.default.createElement(
                _reactNative.Text,
                { style: _styles.styles.welcome },
                weatherHeader
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.weather },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.weatherContainer },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _styles.styles.weatherText },
                    printTemp
                  )
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.weatherContainer },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _styles.styles.weatherText },
                    printOutside
                  )
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.weatherContainer },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _styles.styles.weatherText },
                    printPrecip
                  )
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.weatherContainer },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _styles.styles.weatherText },
                    printHumidity
                  )
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.weatherContainer },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _styles.styles.weatherText },
                    printWind
                  )
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: _styles.styles.weatherContainer },
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _styles.styles.weatherText },
                    printHourly
                  )
                )
              ),
              _react2.default.createElement(_reactNative.View, { style: _styles.styles.copyright })
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
              message
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
    }
  }]);
  return CurrentWeather;
}(_react2.default.Component);

CurrentWeather.navigationOptions = {
  title: 'Weather',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


function setCWeather() {
  getCurrentLocation();

  var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + currentLatitude + ',' + currentLongitude + '&key=AIzaSyDeE4RFK2tLyj3oh7A2ym48WFVrmqN1FlM';

  axios.get(geocodeURL).then(function (response) {
    if (response.data.status === 'ZERO_RESULTS') {
      message = 'Unable to find that address.' + currentLatitude + " " + currentLongitude;
    }
    var lat = currentLatitude;
    var lng = currentLongitude;
    var weatherURL = 'https://api.darksky.net/forecast/5be71ad818bd61327af15a6511757c8f/' + lat + ',' + lng;

    weatherHeader = 'Weather for your current location...';
    return axios.get(weatherURL);
  }).then(function (response) {
    var temperature = Math.floor(response.data.currently.temperature);
    var apparentTemperature = Math.floor(response.data.currently.apparentTemperature);
    var weather = response.data.currently.summary;
    var humidity = Math.floor(response.data.currently.humidity * 100);
    var windSpeed = Math.floor(response.data.currently.windSpeed);
    var hourly = response.data.hourly.summary;
    var precipProb = Math.floor(response.data.currently.precipProbability * 100);
    if (response.data.currently.precipIntensity !== 0) {
      var precip = response.data.currently.precipType;
    } else {
      var precip = 'precipitation';
    }

    printTemp = 'It\'s currently: ' + temperature + '\xB0\nIt feels like: ' + apparentTemperature + '\xB0';
    printOutside = 'How it looks outside: ' + weather;
    printPrecip = 'There is a ' + precipProb + '% chance of ' + precip;
    printHumidity = 'The humidity currently is: ' + humidity + '%';
    printWind = 'The wind speed is: ' + windSpeed + ' MPH';
    printHourly = 'Your outlook for the next 24 hours: \n' + hourly;
  }).catch(function (e) {
    if (e.code === 'ENOTFOUND') {
      message = 'Unable to connect to API servers.';
    } else {
      message = message;
    }
  });
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    currentLatitude = JSON.stringify(position.coords.latitude);
    currentLongitude = JSON.stringify(position.coords.longitude);
  }, function (error) {
    return alert(JSON.stringify(error));
  }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
}

module.exports = { CurrentWeather: CurrentWeather, setCWeather: setCWeather };