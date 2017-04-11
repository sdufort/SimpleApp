Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _CardStackPanResponder = require('./CardStackPanResponder');

var _CardStackPanResponder2 = babelHelpers.interopRequireDefault(_CardStackPanResponder);

var _CardStackStyleInterpolator = require('./CardStackStyleInterpolator');

var _CardStackStyleInterpolator2 = babelHelpers.interopRequireDefault(_CardStackStyleInterpolator);

var _PointerEventsContainer = require('./PointerEventsContainer');

var _PointerEventsContainer2 = babelHelpers.interopRequireDefault(_PointerEventsContainer);

var _PropTypes = require('../PropTypes');

var _PropTypes2 = babelHelpers.interopRequireDefault(_PropTypes);

var Card = function (_React$Component) {
  babelHelpers.inherits(Card, _React$Component);

  function Card() {
    babelHelpers.classCallCheck(this, Card);
    return babelHelpers.possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  babelHelpers.createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          panHandlers = _props.panHandlers,
          pointerEvents = _props.pointerEvents,
          renderScene = _props.renderScene,
          style = _props.style,
          props = babelHelpers.objectWithoutProperties(_props, ['panHandlers', 'pointerEvents', 'renderScene', 'style']);


      var viewStyle = style === undefined ? _CardStackStyleInterpolator2.default.forHorizontal(props) : style;

      var viewPanHandlers = panHandlers === undefined ? _CardStackPanResponder2.default.forHorizontal(babelHelpers.extends({}, props, {
        onNavigateBack: this.props.onNavigateBack
      })) : panHandlers;

      return _react2.default.createElement(
        _reactNative.Animated.View,
        babelHelpers.extends({}, viewPanHandlers, {
          pointerEvents: pointerEvents,
          ref: this.props.onComponentRef,
          style: [styles.main, viewStyle]
        }),
        renderScene(props)
      );
    }
  }]);
  return Card;
}(_react2.default.Component);

Card.propTypes = babelHelpers.extends({}, _PropTypes2.default.SceneRendererProps, {
  onComponentRef: _react.PropTypes.func.isRequired,
  onNavigateBack: _react.PropTypes.func,
  panHandlers: _PropTypes2.default.panHandlers,
  pointerEvents: _react.PropTypes.string.isRequired,
  renderScene: _react.PropTypes.func.isRequired,
  style: _react.PropTypes.any
});


var styles = _reactNative.StyleSheet.create({
  main: {
    backgroundColor: '#E9E9EF',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    top: 0
  }
});

Card = (0, _PointerEventsContainer2.default)(Card);

Card.CardStackPanResponder = _CardStackPanResponder2.default;
Card.CardStackStyleInterpolator = _CardStackStyleInterpolator2.default;

exports.default = Card;