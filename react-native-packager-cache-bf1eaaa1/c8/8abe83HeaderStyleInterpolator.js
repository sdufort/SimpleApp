Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

function forLeft(props) {
  var position = props.position,
      scene = props.scene;
  var index = scene.index;

  return {
    opacity: position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 0]
    })
  };
}

function forCenter(props) {
  var position = props.position,
      scene = props.scene;
  var index = scene.index;

  return {
    opacity: position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 0]
    }),
    transform: [{
      translateX: position.interpolate({
        inputRange: [index - 1, index + 1],
        outputRange: _reactNative.I18nManager.isRTL ? [-200, 200] : [200, -200]
      })
    }]
  };
}

function forRight(props) {
  var position = props.position,
      scene = props.scene;
  var index = scene.index;

  return {
    opacity: position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 0]
    })
  };
}

exports.default = {
  forLeft: forLeft,
  forCenter: forCenter,
  forRight: forRight
};