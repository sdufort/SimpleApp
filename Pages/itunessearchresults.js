import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './../styles.js';

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';
var album = '';
var song = '';
var year = '';
var genres = '';
var followers = '';
var image = '';
var message = '';
var searchType = '';

const axios = require('axios');

class iTunesSearchResults extends React.Component {
  static navigationOptions = {
    title: 'iTunes Search Results',
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
            <Text style={styles.welcome}>{artists +
                                          album +
                                          song +
                                          year +
                                          genres +
                                          followers}
            </Text>
            <View style={styles.copyright}>
              <Text style={styles.instructions}>
                Copyright 2017 - Sean Dufort
              </Text>
            </View>
          </View>
        </View>
      </Image>
    );
  iTunesReset();
  }
}

function iTunesReset() {
  searchType = "";
  value = "";
  valueGive = false;
}

function setiTunesSearchType(type) {
  searchType = type;
}

//Test Spotify ID: 4aawyAB9vmqN3uQ7FjRGTy
function setiTunesSearch(value) {
  if(value !== "") {
    valueGiven = true;
  }
  else {
    value = "";
  }
  if(searchType === "") {
    searchType = "album";
  }
  var encodedValue = value.replace(" ", "+");
  var iTunesURL = "https://itunes.apple.com/search?term=" + encodedValue
  axios.get(iTunesURL).then((response) => {
    artists = '';
    album = '';
    song = '';
    year = '';
    genres = '';
    message = '';
    followers = '';
    image = '';
    if(response.data.status === 'ZERO_RESULTS') {
      //message = 'Unable to find that address.'
      message = 'Unable to find what you were looking for.' + encodedValue;
    }
    if(searchType === "track") {
      artists = 'Artist name: ' + response.data.tracks.items[0].artists[0].name + '\n';
      image = response.data.tracks.items[0].album.images[0].url;
    }
    else if(searchType === "artist"){
      genres = response.data.artists.items[0].genres[0] + '\n';
      genresArr = genres.split(" ");
      genres = '';
      for(var i=0; i<genresArr.length; i++) {
        var firstLetter = genresArr[i].substring(0,1);
        firstLetter = firstLetter.toUpperCase();
        genresArr[i] = firstLetter + genresArr[i].substring(1, genresArr[i].length);
        genres = genres + genresArr[i];
        if(i !== genresArr.length-1) {
          genres = genres + ' ';
        }
      }
      genres = 'Genres: ' + genres + '\n';
      followers = response.data.artists.items[0].followers.total + '\n';
      if(followers.length > 3) {
        var formattedFollowers = '';
        for(var i=followers.length-1; i>=0; i=i-3) {
          var setOfThree = followers.substring(i-3,i);
          if(i > 3) {
            formattedFollowers = ',' + setOfThree + formattedFollowers;
          }
          else {
            formattedFollowers = setOfThree + formattedFollowers;
          }
        }
        followers = formattedFollowers;
      }
      followers = 'Followers: ' + followers;
      image = response.data.artists.items[0].images[0].url;
    }
    else {
      artists = 'Artist name: ' + response.data.results[0].artistName + '\n';
      album = 'Album name: ' + response.data.results[0].collectionName + '\n';
      song = 'Song name: ' + response.data.results[0].trackName + '\n';

      //image = response.data.albums.items[0].images[0].url;
    }
    //album = 'Album name: ' + response.data.tracks[0].name;
    //year = 'Year: ' + response.data.release_date.substring(0, 4);
  }).catch((e) => {
    if(e.code === 'ENOTFOUND') {
      message = 'Unable to connect to API servers.';
    }
    else {
      message = message;
    }
  });
}


module.exports = {iTunesSearchResults, setiTunesSearch, setiTunesSearchType, iTunesReset};
