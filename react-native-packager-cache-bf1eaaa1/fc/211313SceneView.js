Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var SceneView = function (_PureComponent) {
  babelHelpers.inherits(SceneView, _PureComponent);

  function SceneView() {
    babelHelpers.classCallCheck(this, SceneView);
    return babelHelpers.possibleConstructorReturn(this, (SceneView.__proto__ || Object.getPrototypeOf(SceneView)).apply(this, arguments));
  }

  babelHelpers.createClass(SceneView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        navigation: this.props.navigation
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          screenProps = _props.screenProps,
          navigation = _props.navigation,
          Component = _props.component;


      return _react2.default.createElement(Component, {
        screenProps: screenProps,
        navigation: navigation
      });
    }
  }]);
  return SceneView;
}(_react.PureComponent);

SceneView.childContextTypes = {
  navigation: _react2.default.PropTypes.object.isRequired
};
exports.default = SceneView;