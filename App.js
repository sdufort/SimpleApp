import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './styles.js';

import {Continue} from './Pages/continue';
import {ChatScreen} from './Pages/chat';
import {WhyScreen} from './Pages/whyScreen';
import {Settings} from './Pages/settings';
import {Tabs} from './Pages/tabs';
import {SeeWhy} from './Pages/seeWhy';
import {Info} from './Pages/info';
import {Weather} from './Pages/weather';
import {Location} from './Pages/location';
import {CurrentWeather, setCWeather} from './Pages/currentWeather';
import {MusicSearch} from './Pages/musicsearch';
import {MusicSearchEnter} from './Pages/musicsearchenter';
import {MusicSearchResults} from './Pages/musicsearchresults';
import {iTunesSearch} from './Pages/itunessearch';
import {iTunesSearchResults} from './Pages/itunessearchresults';
import {Availability} from './Pages/availability';
import {RB306} from './Pages/rb306';
import {RB304} from './Pages/rb304';

const axios = require('axios');

var background = require('./images/background.png');

//var trueFalse = '';

//Maybe go to Satori and attempt to pull out the background image lol

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trueFalse: false
    };
  }
  static navigationOptions = {
    title: 'SimpleApp',
    header: navigation => ({
      // right:
      //   <Button
      //     title="Info"
      //     color = "#2E9298"
      //   />,
      style: {
        //backgroundColor: '#F5FCFF'
        //backgroundColor: '#A9A9A9'
        backgroundColor: 'rgba(50, 50, 50, .5)',
      },
    })
  };
  render() {
    setCWeather();
    const { navigate } = this.props.navigation;
    if(!this.state.trueFalse) {
      return (
        <Image source={background} style={styles.backgroundImage}>
          <View style={styles.picContainer}>
            <View style={styles.text}>
              <Text style={styles.welcome}>Hello, world!</Text>
              <View style={styles.button, {flex: 1, paddingTop: 40}}>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={() => navigate('Location')}
                    title="Weather"
                    color = "#FFFFFF"
                  />
                </View>
              </View>
              <View style={styles.button, {flex: 1, justifyContent: 'flex-start'}}>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={() => navigate('iTunesSearch')}
                    title="iTunes Search"
                    color = "#FFFFFF"
                  />
                </View>
              </View>
              <View style={styles.button, {flex: 1, justifyContent: 'flex-start'}}>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={() => navigate('MusicSearch')}
                    title="Spotify Search"
                    color = "#FFFFFF"
                  />
                </View>
              </View>
              <View style={styles.button, {flex: 1, justifyContent: 'flex-start'}}>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={() => navigate('Availability')}
                    title="Availability"
                    color = "#FFFFFF"
                  />
                </View>
              </View>
              <View style={styles.button, {flex: 1, justifyContent: 'flex-start'}}>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={() => navigate('Settings')}
                    title="Settings"
                    color = "#FFFFFF"
                  />
                </View>
              </View>
              <View style={{flex: 1}}>
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
    else {
      return (
        <View style={styles.container}>
          <View style={styles.text}>
            <Text style={styles.welcome}>Hello world!</Text>
          </View>
        </View>
      );
    }
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Continue: { screen: Continue },
  Chat: { screen: ChatScreen },
  Why: { screen: WhyScreen },
  Settings: { screen: Settings },
  Tabs: { screen: Tabs },
  SeeWhy: { screen: SeeWhy },
  Info: { screen: Info },
  Weather: { screen: Weather },
  Location: { screen: Location },
  CurrentWeather: { screen: CurrentWeather },
  MusicSearch: { screen: MusicSearch },
  MusicSearchEnter: { screen: MusicSearchEnter },
  MusicSearchResults: { screen: MusicSearchResults },
  iTunesSearch: { screen: iTunesSearch },
  iTunesSearchResults: { screen: iTunesSearchResults },
  Availability: { screen: Availability },
  RB306: { screen: RB306 },
  RB304: { screen: RB304 },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
