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
import {setiTunesSearch} from './itunessearchresults';
import {iTunesReset} from './itunessearchresults';

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';

class iTunesSearch extends React.Component {
  static navigationOptions = {
    title: 'iTunes Search Type',
    header: navigation => ({
      style: {
        //backgroundColor: '#F5FCFF'
        //backgroundColor: '#A9A9A9'
        backgroundColor: 'rgba(50, 50, 50, .5)',
      },
    })
  };
  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }
  render() {
    iTunesReset();
    const { navigate } = this.props.navigation;
    return (
      <Image source={background} style={styles.backgroundImage}>
        <View style={styles.picContainer}>
          <View style={styles.text}>
            <Text style={styles.welcome}>One day you may be able to search music-related content... but not today... HA.</Text>
            <TextInput style={styles.weatherAddress}
              justifyContent='center'
              style={{height: 40}}
              placeholder={"Enter a iTunes song, artist, etc."}
              selectionColor="#2E9298"
              clearButtonMode='while-editing'
              clearTextOnFocus={true}
              color='#333333'
              backgroundColor='#F5FCFF'
              borderWidth={1}
              padding={10}
              keyboardAppearance='dark'
              onChangeText={(text) => setiTunesSearch(text)}
            />
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('iTunesSearchResults')}
                  title="Continue"
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

module.exports = {iTunesSearch};
