var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var _musicsearchenter = require('./musicsearchenter');

var _musicsearchresults = require('./musicsearchresults');

var background = require('./../images/background.png');
var valueGiven = false;
var artists = '';

var MusicSearch = function (_React$Component) {
  babelHelpers.inherits(MusicSearch, _React$Component);

  function MusicSearch() {
    babelHelpers.classCallCheck(this, MusicSearch);
    return babelHelpers.possibleConstructorReturn(this, (MusicSearch.__proto__ || Object.getPrototypeOf(MusicSearch)).apply(this, arguments));
  }

  babelHelpers.createClass(MusicSearch, [{
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
            _react2.default.createElement(
              _reactNative.Picker,
              {
                style: {
                  borderWidth: 1,
                  backgroundColor: '#FFFFFF'
                },
                'default': 'album',
                onValueChange: function onValueChange(type) {
                  return (0, _musicsearchenter.setSearch)(type);
                } },
              _react2.default.createElement(_reactNative.Picker.Item, { label: 'Album', value: 'album' }),
              _react2.default.createElement(_reactNative.Picker.Item, { label: 'Artist', value: 'artist' }),
              _react2.default.createElement(_reactNative.Picker.Item, { label: 'Song', value: 'track' })
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: (_styles.styles.button, { flex: 1, justifyContent: 'flex-start', paddingTop: 20 }) },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles.styles.buttonContainer },
                _react2.default.createElement(_reactNative.Button, {
                  onPress: function onPress() {
                    return navigate('MusicSearchEnter');
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
  return MusicSearch;
}(_react2.default.Component);

MusicSearch.navigationOptions = {
  title: 'Spotify Search Type',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


module.exports = { MusicSearch: MusicSearch };