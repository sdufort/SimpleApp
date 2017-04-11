Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneRendererPropType = exports.NavigationStatePropType = exports.NavigationRoutePropType = undefined;

var _react = require('react');

var _reactNative = require('react-native');

var NavigationRoutePropType = exports.NavigationRoutePropType = _react.PropTypes.shape({
  title: _react.PropTypes.string,
  key: _react.PropTypes.string.isRequired
});

var NavigationStatePropType = exports.NavigationStatePropType = _react.PropTypes.shape({
  routes: _react.PropTypes.arrayOf(NavigationRoutePropType).isRequired,
  index: _react.PropTypes.number.isRequired
});

var SceneRendererPropType = exports.SceneRendererPropType = {
  layout: _react.PropTypes.shape({
    measured: _react.PropTypes.bool.isRequired,
    height: _react.PropTypes.number.isRequired,
    width: _react.PropTypes.number.isRequired
  }).isRequired,
  navigationState: NavigationStatePropType.isRequired,
  position: _react.PropTypes.instanceOf(_reactNative.Animated.Value).isRequired,
  jumpToIndex: _react.PropTypes.func.isRequired,
  getLastPosition: _react.PropTypes.func.isRequired,
  subscribe: _react.PropTypes.func.isRequired
};