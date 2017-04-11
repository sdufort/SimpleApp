import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../styles.js';

class WhyScreen extends React.Component {
  static navigationOptions = {
    title: 'Why You Ask?',
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
          <Text style={styles.welcome}>Because why not</Text>
          <View style={styles.button}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => navigate('Tabs')}
                title="Tabs"
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
    );
  }
}


module.exports = {WhyScreen};
