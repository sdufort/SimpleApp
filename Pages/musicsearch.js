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
import {setSearch} from './musicsearchenter';
import {reset} from './musicsearchresults';

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';

class MusicSearch extends React.Component {
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
            <Picker
              style = {{
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
              }}
              default="album"
              onValueChange={(type) => setSearch(type)}>
              <Picker.Item label="Album" value="album" />
              <Picker.Item label="Artist" value="artist" />
              <Picker.Item label="Song" value="track" />
            </Picker>
            <View style={styles.button, {flex: 1, justifyContent: 'flex-start', paddingTop: 20}}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigate('MusicSearchEnter')}
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

module.exports = {MusicSearch};
