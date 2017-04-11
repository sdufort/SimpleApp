var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactNative = require('react-native');

var _reactNativeDrawerLayout = require('react-native-drawer-layout');var _reactNativeDrawerLayout2 = _interopRequireDefault(_reactNativeDrawerLayout);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

if (_reactNative.Platform.OS === 'android') {
  module.exports = _reactNative.DrawerLayoutAndroid;
} else {
  module.exports = _reactNativeDrawerLayout2.default;
}