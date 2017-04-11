import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../styles.js';

var currentLatitude = '';
var currentLongitude = '';
var useCurrent = false;
var addressGiven = false;
var backgroundImage = require('./../images/background.png');

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
  var background  = '';

class Weather extends React.Component {
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
    if(message === '' && addressGiven) {
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
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherText}>{printAlerts}</Text>
                </View>
              </View>
              <View style={styles.copyright}>
              </View>
            </View>
          </View>
        </Image>
      );
    }
    else if(!addressGiven) {
      return (
        <Image source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.picContainer}>
            <View style={styles.text}>
              <Text style={styles.welcome}>You forgot to enter in a location... Honestly, how stupid are you?</Text>
              <View style={styles.copyright}>
                <Text style={styles.instructions}>
                  Copyright 2017 - Sean Dufort
                </Text>
              </View>
            </View>
          </View>
        </Image>
      );
    }
    else {
      return (
        <Image source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.picContainer}>
            <View style={styles.text}>
              <Text style={styles.welcome}>{message}</Text>
              <View style={styles.copyright}>
                <Text style={styles.instructions}>
                  Copyright 2017 - Sean Dufort
                </Text>
              </View>
            </View>
          </View>
        </Image>
      );
    }
  }
}

function setWeather(address) {
  if(address !== '') {
    addressGiven = true;
  }
  else {
    address = '';
  }
  var encodedAddress = encodeURIComponent(address);
  var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress;

  axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
      //message = 'Unable to find that address.'
      message = 'Unable to find that address.' + encodedAddress;
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/5be71ad818bd61327af15a6511757c8f/${lat},${lng}`;
    weatherHeader = 'Weather for ' + response.data.results[0].formatted_address + '...';
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

module.exports = {Weather, setWeather};
