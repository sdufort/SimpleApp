import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import {styles} from './../styles.js';

class FirstWord extends React.Component {
  static navigationOptions = {
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
          <Text style={styles.welcome}>Hey</Text>
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

class SecondWord extends React.Component {
  static navigationOptions = {
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
          <Text style={styles.welcome}>There</Text>
          <View style={styles.button}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => navigate('SeeWhy')}
                title="See Why"
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

const Tabs = TabNavigator({
  First: { screen: FirstWord },
  Second: { screen: SecondWord },
});

Tabs.navigationOptions = {
  title: 'My Thoughts',
};

module.exports = {Tabs};
