var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var _musicsearchresults = require('./musicsearchresults');

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';
var searchType = '';

var MusicSearchEnter = function (_React$Component) {
  babelHelpers.inherits(MusicSearchEnter, _React$Component);

  function MusicSearchEnter() {
    babelHelpers.classCallCheck(this, MusicSearchEnter);
    return babelHelpers.possibleConstructorReturn(this, (MusicSearchEnter.__proto__ || Object.getPrototypeOf(MusicSearchEnter)).apply(this, arguments));
  }

  babelHelpers.createClass(MusicSearchEnter, [{
    key: '_getOptionList',
    value: function _getOptionList() {
      return this.refs['OPTIONLIST'];
    }
  }, {
    key: 'render',
    value: function render() {
      (0, _musicsearchresults.reset)();
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
              'One day you may be able to search music-related content... but not today... HA.'
            ),
            _react2.default.createElement(_reactNative.TextInput, { style: _styles.styles.weatherAddress,
              justifyContent: 'center',
              style: { height: 40 },
              placeholder: "Enter a Spotify " + searchType,
              selectionColor: '#2E9298',
              clearButtonMode: 'while-editing',
              clearTextOnFocus: true,
              color: '#333333',
              backgroundColor: '#F5FCFF',
              borderWidth: 1,
              padding: 10,
              keyboardAppearance: 'dark',
              onChangeText: function onChangeText(text) {
                return (0, _musicsearchresults.setMusicSearch)(text);
              }
            }),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start', paddingTop: 20 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('MusicSearchResults');
                  },
                  title: 'Search',
                  color: '#FFFFFF',
                  paddingTop: 20
                })
              )
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
    }
  }]);
  return MusicSearchEnter;
}(_react2.default.Component);

MusicSearchEnter.navigationOptions = {
  title: 'Spotify Search',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


function setSearch(type) {
  searchType = type;
  (0, _musicsearchresults.setSearchType)(searchType);
  if (searchType === 'track') {
    searchType = 'song';
  }
}

module.exports = { MusicSearchEnter: MusicSearchEnter, setSearch: setSearch };