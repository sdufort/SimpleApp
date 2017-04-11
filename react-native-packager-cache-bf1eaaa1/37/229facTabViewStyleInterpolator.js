Object.defineProperty(exports, "__esModule", {
  value: true
});


function forHorizontal(props) {
  var layout = props.layout,
      position = props.position,
      navigationState = props.navigationState;
  var width = layout.width;
  var routes = navigationState.routes;

  var inputRange = [-1].concat(babelHelpers.toConsumableArray(routes.map(function (x, i) {
    return i;
  })));
  var outputRange = inputRange.map(function (i) {
    return width * i * -1;
  });

  var translateX = position.interpolate({
    inputRange: inputRange,
    outputRange: outputRange
  });

  return {
    transform: [{ translateX: translateX }]
  };
}

exports.default = {
  forHorizontal: forHorizontal
};