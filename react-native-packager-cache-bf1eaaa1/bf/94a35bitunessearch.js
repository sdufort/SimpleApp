var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var _itunessearchresults = require('./itunessearchresults');

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';

var iTunesSearch = function (_React$Component) {
  babelHelpers.inherits(iTunesSearch, _React$Component);

  function iTunesSearch() {
    babelHelpers.classCallCheck(this, iTunesSearch);
    return babelHelpers.possibleConstructorReturn(this, (iTunesSearch.__proto__ || Object.getPrototypeOf(iTunesSearch)).apply(this, arguments));
  }

  babelHelpers.createClass(iTunesSearch, [{
    key: '_getOptionList',
    value: function _getOptionList() {
      return this.refs['OPTIONLIST'];
    }
  }, {
    key: 'render',
    value: function render() {
      (0, _itunessearchresults.iTunesReset)();
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
              placeholder: "Enter a iTunes song, artist, etc.",
              selectionColor: '#2E9298',
              clearButtonMode: 'while-editing',
              clearTextOnFocus: true,
              color: '#333333',
              backgroundColor: '#F5FCFF',
              borderWidth: 1,
              padding: 10,
              keyboardAppearance: 'dark',
              onChangeText: function onChangeText(text) {
                return (0, _itunessearchresults.setiTunesSearch)(text);
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
                    return navigate('iTunesSearchResults');
                  },
                  title: 'Continue',
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
  return iTunesSearch;
}(_react2.default.Component);

iTunesSearch.navigationOptions = {
  title: 'iTunes Search Type',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


module.exports = { iTunesSearch: iTunesSearch };