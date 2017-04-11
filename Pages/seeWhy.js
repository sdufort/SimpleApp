import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import {styles} from './../styles.js';

class SeeWhy extends React.Component {
  static navigationOptions = {
    title: '',
    header: navigation => ({
      style: {
        backgroundColor: '#F5FCFF'
      },
    })
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.welcome}>I do not know why</Text>
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


module.exports = {SeeWhy};
