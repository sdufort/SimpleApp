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
import {setMusicSearch, setSearchType, reset} from './musicsearchresults';

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';
var searchType = '';

class MusicSearchEnter extends React.Component {
  static navigationOptions = {
    title: 'Spotify Search',
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
    reset();
    const { navigate } = this.props.navigation;
    return (
      <Image source={background} style={styles.backgroundImage}>
        <View style={styles.picContainer}>
          <View style={styles.text}>
            <Text style={styles.welcome}>One day you may be able to search music-related content... but not today... HA.</Text>
            <TextInput style={styles.weatherAddress}
              justifyContent='center'
              style={{height: 40}}
              placeholder={"Enter a Spotify " + searchType}
              selectionColor="#2E9298"
              clearButtonMode='while-editing'
              clearTextOnFocus={true}
              color='#333333'
              backgroundColor='#F5FCFF'
              borderWidth={1}
              padding={10}
              keyboardAppearance='dark'
              onChangeText={(text) => setMusicSearch(text)}
            />
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('MusicSearchResults')}
                  title="Search"
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

function setSearch(type) {
  searchType = type;
  setSearchType(searchType);
  if(searchType === 'track') {
    searchType = 'song';
  }
}

module.exports = {MusicSearchEnter, setSearch};
