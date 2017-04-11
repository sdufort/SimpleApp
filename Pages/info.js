import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import {styles} from './../styles.js';

class Info extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.welcome}>There is nothing to know, you are lame.</Text>
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


module.exports = {Info};
