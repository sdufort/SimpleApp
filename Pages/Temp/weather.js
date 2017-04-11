import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../../styles.js';

var message = '';
var weatherHeader = ``;
var printTemp = ``;
var printOutside = ``;
var printHumidity = ``;
var printWind = ``;

class Weather extends React.Component {
  static navigationOptions = {
    title: 'Weather',
    header: navigation => ({
      style: {
        backgroundColor: '#F5FCFF'
      },
    })
  };
  render() {
    const { navigate } = this.props.navigation;
    if(message === '') {
      return (
        <View style={styles.container}>
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
                <Text style={styles.weatherText}>{printHumidity}</Text>
              </View>
              <View style={styles.weatherContainer}>
                <Text style={styles.weatherText}>{printWind}</Text>
              </View>
            </View>
            <View style={styles.copyright}>
              <Text style={styles.instructions}>
                Copyright 2017 - Sean Dufort
              </Text>
            </View>
          </View>
        </View>
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

function setAddress(address) {
  getWeather(address);
}

function getWeather(address) {
  weatherHeader = `Weather for "${address}"`;
  printTemp = `It's currently 20 degrees.\nIt feels like 8 degrees.`;
  printOutside = `How it looks outside: Overcast`;
  printHumidity = `The humidity currently is: 40%`;
  printWind = `The wind speed is: 15 MPH`;
}

module.exports = {Weather, setAddress};
