import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../styles.js';
import {setWeather} from './weather';
import {setCWeather} from './currentWeather';

var location = '';
var background = require('./../images/background.png');

class Location extends React.Component {

  static navigationOptions = {
    title: 'Location',
    header: navigation => ({
      // left:
      //   backgroundColor: "#FFFFFF",
      style: {
        //backgroundColor: '#F5FCFF'
        //backgroundColor: '#A9A9A9'
        backgroundColor: 'rgba(50, 50, 50, .5)',
      },
    })
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={background} style={styles.backgroundImage}>
        <View style={styles.picContainer}>
          <View style={styles.text}>
            <Text style={styles.welcome}>Your location is where you currently are. Duh.</Text>
            <TextInput style={styles.weatherAddress}
              justifyContent='center'
              style={{height: 40}}
              placeholder="Enter a location here"
              selectionColor="#2E9298"
              clearButtonMode='while-editing'
              clearTextOnFocus={true}
              color='#333333'
              backgroundColor='#F5FCFF'
              borderWidth={1}
              padding={10}
              keyboardAppearance='dark'
              onChangeText={(text) => setWeather(text)}
            />
            <View style={styles.button}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('Weather')}
                  title="Get Weather"
                  color = "#FFFFFF"
                />
              </View>
            </View>
            <Text style={styles.welcome}></Text>
            <Text style={styles.welcome}></Text>
            <Text style={styles.welcome}>Or just search your current location, because why would you care about anywhere else?</Text>
            <View style={styles.button, {flex: 2}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={setCWeather(), () => navigate('CurrentWeather')}
                  title="Use Current Location"
                  color = "#FFFFFF"
                />
              </View>
            </View>
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

module.exports = {Location};
