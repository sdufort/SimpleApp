import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../styles.js';

var currentLatitude = '';
var currentLongitude = '';
var useCurrent = false;

const axios = require('axios');

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

class CurrentWeather extends React.Component {
  static navigationOptions = {
    title: 'Weather',
    header: navigation => ({
      style: {
        //backgroundColor: '#F5FCFF'
        //backgroundColor: '#A9A9A9'
        backgroundColor: 'rgba(50, 50, 50, .5)',
      },
    })
  };
  render() {
    const { navigate } = this.props.navigation;
    if(printOutside === 'How it looks outside: Mostly Cloudy') {
      background = require('./../images/mostlycloudy.jpg');
    }
    else if(printOutside === 'How it looks outside: Partly Cloudy') {
      background = require('./../images/partlycloudy.jpg');
    }
    else if(printOutside === 'How it looks outside: Overcast') {
      background = require('./../images/overcast.jpg');
    }
    else if(printOutside === 'How it looks outside: Rain') {
      background = require('./../images/rain.jpg');
    }
    else if(printOutside === 'How it looks outside: Light Rain') {
      background = require('./../images/rain.jpg');
    }
    else if(printOutside === 'How it looks outside: Drizzle') {
      background = require('./../images/rain.jpg');
    }
    else if(printOutside === 'How it looks outside: Snow') {
      background = require('./../images/snow.jpg');
    }
    else if(printOutside === 'How it looks outside: Heavy Snow') {
      background = require('./../images/snow.jpg');
    }
    else if(printOutside === 'How it looks outside: Light Snow') {
      background = require('./../images/snow.jpg');
    }
    else if(printOutside === 'How it looks outside: Clear') {
      background = require('./../images/clear.jpg');
    }
    else {
      background = require('./../images/sunny.jpg');
    }
    if(message === '') {
      return (
        <Image source={background} style={styles.backgroundImage}>
          <View style={styles.weatherPicContainer}>
            <View style={styles.text}>
              <Text style={styles.welcome}>{weatherHeader}</Text>
              <View style={styles.weather}>
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherText}>{printTemp}</Text>
                </View>
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherText}>{printOutside}</Text>
                </View>
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherText}>{printPrecip}</Text>
                </View>
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherText}>{printHumidity}</Text>
                </View>
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherText}>{printWind}</Text>
                </View>
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherText}>{printHourly}</Text>
                </View>
              </View>
              <View style={styles.copyright}>
              </View>
            </View>
          </View>
        </Image>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <View style={styles.text}>
            <Text style={styles.welcome}>{message}</Text>
            <View style={styles.copyright}>
              <Text style={styles.instructions}>
                Copyright 2017 - Sean Dufort
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
}

function setCWeather() {
  getCurrentLocation();
  //https://maps.googleapis.com/maps/api/geocode/json?latlng=37.785834,-122.406417
  var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + currentLatitude + ',' + currentLongitude +
    '&key=AIzaSyDeE4RFK2tLyj3oh7A2ym48WFVrmqN1FlM';

  axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
      //message = 'Unable to find that address.'
      message = 'Unable to find that address.' + currentLatitude + " " + currentLongitude;
    }
    var lat = currentLatitude;
    var lng = currentLongitude;
    var weatherURL = `https://api.darksky.net/forecast/5be71ad818bd61327af15a6511757c8f/${lat},${lng}`;
    //weatherHeader = 'Weather for ' + response.data.results[0].formatted_address;
    weatherHeader = 'Weather for your current location...';
    return axios.get(weatherURL);
  }).then((response) => {
    var temperature = Math.floor(response.data.currently.temperature);
    var apparentTemperature = Math.floor(response.data.currently.apparentTemperature);
    var weather = response.data.currently.summary;
    var humidity = Math.floor(response.data.currently.humidity * 100);
    var windSpeed = Math.floor(response.data.currently.windSpeed);
    var hourly = response.data.hourly.summary;
    var precipProb = Math.floor(response.data.currently.precipProbability * 100);
    if(response.data.currently.precipIntensity !== 0) {
        var precip = response.data.currently.precipType;
    }
    else {
      var precip = 'precipitation';
    }
    // var alertsDes = [];
    // var alertsSev = [];
    // var alertsReg = [];
    // if(response.data.alerts) {
    //   for(var i=0; i<response.data.alerts.length(); i++) {
    //     alertsDes[i] = response.data.alerts.description;
    //     alertsSev[i] = response.data.alerts.severity;
    //     alertsReg[i] = response.data.alerts.regions;
    //   }
    //   printAlerts = `Weather ${alertsSev[0]}: ${alertsDes}`;
    // }
    printTemp = `It's currently: ${temperature}°\nIt feels like: ${apparentTemperature}°`;
    printOutside = `How it looks outside: ${weather}`;
    printPrecip = `There is a ${precipProb}% chance of ${precip}`;
    printHumidity = `The humidity currently is: ${humidity}%`;
    printWind = `The wind speed is: ${windSpeed} MPH`;
    printHourly = `Your outlook for the next 24 hours: \n${hourly}`;
  }).catch((e) => {
    if(e.code === 'ENOTFOUND') {
      message = 'Unable to connect to API servers.';
    }
    else {
      message = message;
    }
  });
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    currentLatitude = JSON.stringify(position.coords.latitude);
    currentLongitude = JSON.stringify(position.coords.longitude);

  },
  (error) => alert(JSON.stringify(error)),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
}

module.exports = {CurrentWeather, setCWeather};
