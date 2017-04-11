var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

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

var axios = require('axios');

var iTunesSearchResults = function (_React$Component) {
  babelHelpers.inherits(iTunesSearchResults, _React$Component);

  function iTunesSearchResults() {
    babelHelpers.classCallCheck(this, iTunesSearchResults);
    return babelHelpers.possibleConstructorReturn(this, (iTunesSearchResults.__proto__ || Object.getPrototypeOf(iTunesSearchResults)).apply(this, arguments));
  }

  babelHelpers.createClass(iTunesSearchResults, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.Image,
        { source: background, style: _styles.styles.backgroundImage },
        _react2.default.createElement(
          _reactNative.View,
          { style: _styles.styles.picContainer },
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.text },
            _react2.default.createElement(
              _reactNative.Text,
              { style: _styles.styles.welcome },
              artists + album + song + year + genres + followers
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles.styles.copyright },
              _react2.default.createElement(
                _reactNative.Text,
                { style: _styles.styles.instructions },
                'Copyright 2017 - Sean Dufort'
              )
            )
          )
        )
      );
      iTunesReset();
    }
  }]);
  return iTunesSearchResults;
}(_react2.default.Component);

iTunesSearchResults.navigationOptions = {
  title: 'iTunes Search Results',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


function iTunesReset() {
  searchType = "";
  value = "";
  valueGive = false;
}

function setiTunesSearchType(type) {
  searchType = type;
}

function setiTunesSearch(value) {
  if (value !== "") {
    valueGiven = true;
  } else {
    value = "";
  }
  if (searchType === "") {
    searchType = "album";
  }
  var encodedValue = value.replace(" ", "+");
  var iTunesURL = "https://itunes.apple.com/search?term=" + encodedValue;
  axios.get(iTunesURL).then(function (response) {
    artists = '';
    album = '';
    song = '';
    year = '';
    genres = '';
    message = '';
    followers = '';
    image = '';
    if (response.data.status === 'ZERO_RESULTS') {
      message = 'Unable to find what you were looking for.' + encodedValue;
    }
    if (searchType === "track") {
      artists = 'Artist name: ' + response.data.tracks.items[0].artists[0].name + '\n';
      image = response.data.tracks.items[0].album.images[0].url;
    } else if (searchType === "artist") {
      genres = response.data.artists.items[0].genres[0] + '\n';
      genresArr = genres.split(" ");
      genres = '';
      for (var i = 0; i < genresArr.length; i++) {
        var firstLetter = genresArr[i].substring(0, 1);
        firstLetter = firstLetter.toUpperCase();
        genresArr[i] = firstLetter + genresArr[i].substring(1, genresArr[i].length);
        genres = genres + genresArr[i];
        if (i !== genresArr.length - 1) {
          genres = genres + ' ';
        }
      }
      genres = 'Genres: ' + genres + '\n';
      followers = response.data.artists.items[0].followers.total + '\n';
      if (followers.length > 3) {
        var formattedFollowers = '';
        for (var i = followers.length - 1; i >= 0; i = i - 3) {
          var setOfThree = followers.substring(i - 3, i);
          if (i > 3) {
            formattedFollowers = ',' + setOfThree + formattedFollowers;
          } else {
            formattedFollowers = setOfThree + formattedFollowers;
          }
        }
        followers = formattedFollowers;
      }
      followers = 'Followers: ' + followers;
      image = response.data.artists.items[0].images[0].url;
    } else {
      artists = 'Artist name: ' + response.data.results[0].artistName + '\n';
      album = 'Album name: ' + response.data.results[0].collectionName + '\n';
      song = 'Song name: ' + response.data.results[0].trackName + '\n';
    }
  }).catch(function (e) {
    if (e.code === 'ENOTFOUND') {
      message = 'Unable to connect to API servers.';
    } else {
      message = message;
    }
  });
}

module.exports = { iTunesSearchResults: iTunesSearchResults, setiTunesSearch: setiTunesSearch, setiTunesSearchType: setiTunesSearchType, iTunesReset: iTunesReset };