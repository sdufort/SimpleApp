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

var background = require('./../images/background.png');

var responses = ['Hold on, go back quickly', 'Try again', 'One more time', 'The \'Go\' button should pop up next time'];

class Continue extends React.Component {
  static navigationOptions = {
    //title: '',
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
    var resNum = Math.floor(Math.random() * (responses.length));
    return (
      <Image source={background} style={styles.backgroundImage}>
        <View style={styles.picContainer}>
          <View style={styles.text}>
            <Text style={styles.welcome}>{responses[resNum]}</Text>
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

module.exports = {Continue};
