Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TabViewStyleInterpolator = require('./TabViewStyleInterpolator');

var _TabViewStyleInterpolator2 = babelHelpers.interopRequireDefault(_TabViewStyleInterpolator);

var _TabViewPropTypes = require('./TabViewPropTypes');

var styles = _reactNative.StyleSheet.create({
  sheet: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  }
});

var DEAD_ZONE = 12;

var TabViewPagerPan = function (_PureComponent) {
  babelHelpers.inherits(TabViewPagerPan, _PureComponent);

  function TabViewPagerPan() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabViewPagerPan);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabViewPagerPan.__proto__ || Object.getPrototypeOf(TabViewPagerPan)).call.apply(_ref, [this].concat(args))), _this), _this._lastValue = null, _this._isMoving = null, _this._startDirection = 0, _this._isIndexInRange = function (index) {
      var routes = _this.props.navigationState.routes;

      return index >= 0 && index <= routes.length - 1;
    }, _this._isMovingHorzontally = function (evt, gestureState) {
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 3) && Math.abs(gestureState.vx) > Math.abs(gestureState.vy * 3);
    }, _this._isReverseDirection = function (gestureState) {
      if (_this._startDirection > 0) {
        return gestureState.vx < 0;
      } else {
        return gestureState.vx > 0;
      }
    }, _this._getNextIndex = function (evt, gestureState) {
      var index = _this.props.navigationState.index;


      var swipeVelocityThreshold = _this.props.swipeVelocityThreshold;

      if (_reactNative.Platform.OS === 'android') {
        swipeVelocityThreshold /= 1000000;
      }

      if (Math.abs(gestureState.dx) > _this.props.swipeDistanceThreshold || Math.abs(gestureState.vx) > swipeVelocityThreshold) {
        var nextIndex = index - gestureState.dx / Math.abs(gestureState.dx);
        if (_this._isIndexInRange(nextIndex)) {
          return nextIndex;
        }
      }
      return index;
    }, _this._canMoveScreen = function (evt, gestureState) {
      if (_this.props.swipeEnabled === false) {
        return false;
      }
      var _this$props$navigatio = _this.props.navigationState,
          routes = _this$props$navigatio.routes,
          index = _this$props$navigatio.index;

      var canMove = _this._isMovingHorzontally(evt, gestureState) && (gestureState.dx >= DEAD_ZONE && index >= 0 || gestureState.dx <= -DEAD_ZONE && index <= routes.length - 1);
      if (canMove) {
        _this._startDirection = gestureState.dx;
      }
      return canMove;
    }, _this._startGesture = function () {
      _this._lastValue = _this.props.getLastPosition();
      _this.props.position.stopAnimation();
    }, _this._respondToGesture = function (evt, gestureState) {
      var width = _this.props.layout.width;

      var currentPosition = typeof _this._lastValue === 'number' ? _this._lastValue : _this.props.navigationState.index;
      var nextPosition = currentPosition - gestureState.dx / width;
      if (_this._isMoving === null) {
        _this._isMoving = _this._isMovingHorzontally(evt, gestureState);
      }
      if (_this._isMoving && _this._isIndexInRange(nextPosition)) {
        _this.props.position.setValue(nextPosition);
      }
    }, _this._finishGesture = function (evt, gestureState) {
      var currentIndex = _this.props.navigationState.index;
      var currentValue = _this.props.getLastPosition();
      if (currentValue !== currentIndex) {
        if (_this._isMoving && !_this._isReverseDirection(gestureState)) {
          var nextIndex = _this._getNextIndex(evt, gestureState);
          _this.props.jumpToIndex(nextIndex);
        } else {
          _this.props.jumpToIndex(currentIndex);
        }
      }
      _this._lastValue = null;
      _this._isMoving = null;
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabViewPagerPan, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._panResponder = _reactNative.PanResponder.create({
        onMoveShouldSetPanResponder: this._canMoveScreen,
        onMoveShouldSetPanResponderCapture: this._canMoveScreen,
        onPanResponderGrant: this._startGesture,
        onPanResponderMove: this._respondToGesture,
        onPanResponderTerminate: this._finishGesture,
        onPanResponderRelease: this._finishGesture,
        onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {
          return true;
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          navigationState = _props.navigationState,
          layout = _props.layout;
      var routes = navigationState.routes;


      var style = _TabViewStyleInterpolator2.default.forHorizontal(this.props);

      return _react2.default.createElement(
        _reactNative.Animated.View,
        babelHelpers.extends({ style: [styles.sheet, style, { width: layout.width * routes.length }] }, this._panResponder.panHandlers),
        _react.Children.map(this.props.children, function (child, i) {
          return _react2.default.createElement(
            _reactNative.View,
            {
              key: navigationState.routes[i].key,
              testID: navigationState.routes[i].testID,
              style: { width: layout.width }
            },
            child
          );
        })
      );
    }
  }]);
  return TabViewPagerPan;
}(_react.PureComponent);

TabViewPagerPan.propTypes = babelHelpers.extends({}, _TabViewPropTypes.SceneRendererPropType, {
  swipeEnabled: _react.PropTypes.bool,
  swipeDistanceThreshold: _react.PropTypes.number.isRequired,
  swipeVelocityThreshold: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node
});
TabViewPagerPan.defaultProps = {
  swipeDistanceThreshold: 120,
  swipeVelocityThreshold: 0.25
};
exports.default = TabViewPagerPan;