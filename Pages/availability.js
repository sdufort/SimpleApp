import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Picker,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../styles.js';

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';

class Availability extends React.Component {
  static navigationOptions = {
    title: 'Spotify Search Type',
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
    return (
      <Image source={background} style={styles.backgroundImage}>
        <View style={styles.picContainer}>
          <View style={styles.text}>
          <Text style={styles.welcome}>Below are computer labs on the 3rd floor of Roger Bacon Hall, you can check the availability of each computer here.</Text>
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('RB304')}
                  title="RB 304"
                  color = "#FFFFFF"
                  paddingTop = {20}
                />
              </View>
            </View>
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('RB306')}
                  title="RB 306"
                  color = "#FFFFFF"
                  paddingTop = {20}
                />
              </View>
            </View>
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('')}
                  title="RB 330"
                  color = "#FFFFFF"
                  paddingTop = {20}
                />
              </View>
            </View>
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('')}
                  title="RB 350"
                  color = "#FFFFFF"
                  paddingTop = {20}
                />
              </View>
            </View>
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('')}
                  title="Software Lab"
                  color = "#FFFFFF"
                  paddingTop = {20}
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

module.exports = {Availability};
