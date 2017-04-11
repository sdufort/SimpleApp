Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TabViewPropTypes = require('./TabViewPropTypes');

var DefaultTransitionSpec = {
  timing: _reactNative.Animated.spring,
  tension: 300,
  friction: 35
};

var TabViewTransitioner = function (_PureComponent) {
  babelHelpers.inherits(TabViewTransitioner, _PureComponent);

  function TabViewTransitioner(props) {
    babelHelpers.classCallCheck(this, TabViewTransitioner);

    var _this = babelHelpers.possibleConstructorReturn(this, (TabViewTransitioner.__proto__ || Object.getPrototypeOf(TabViewTransitioner)).call(this, props));

    _this._mounted = false;
    _this._subscriptions = {};

    _this._trackPosition = function (e) {
      _this._triggerEvent('position', e.value);
      _this._lastPosition = e.value;
      var onChangePosition = _this.props.onChangePosition;

      if (onChangePosition) {
        onChangePosition(e.value);
      }
    };

    _this._getLastPosition = function () {
      if (typeof _this._lastPosition === 'number') {
        return _this._lastPosition;
      } else {
        return _this.props.navigationState.index;
      }
    };

    _this._handleLayout = function (e) {
      var _e$nativeEvent$layout = e.nativeEvent.layout,
          height = _e$nativeEvent$layout.height,
          width = _e$nativeEvent$layout.width;


      if (_this.state.layout.width === width && _this.state.layout.height === height) {
        return;
      }

      _this.setState({
        layout: {
          measured: true,
          height: height,
          width: width
        }
      });
    };

    _this._buildSceneRendererProps = function () {
      return {
        layout: _this.state.layout,
        navigationState: _this.props.navigationState,
        position: _this.state.position,
        jumpToIndex: _this._jumpToIndex,
        getLastPosition: _this._getLastPosition,
        subscribe: _this._addSubscription
      };
    };

    _this._transitionTo = function (toValue, callback) {
      var lastPosition = _this._getLastPosition();
      var currentTransitionProps = {
        progress: lastPosition
      };
      var nextTransitionProps = {
        progress: toValue
      };
      var transitionSpec = void 0;
      if (_this.props.configureTransition) {
        transitionSpec = _this.props.configureTransition(currentTransitionProps, nextTransitionProps);
      }
      if (transitionSpec) {
        var _transitionSpec = transitionSpec,
            timing = _transitionSpec.timing,
            transitionConfig = babelHelpers.objectWithoutProperties(_transitionSpec, ['timing']);

        timing(_this.state.position, babelHelpers.extends({}, transitionConfig, {
          toValue: toValue
        })).start(callback);
      } else {
        _this.state.position.setValue(toValue);
        if (callback) {
          callback();
        }
      }
    };

    _this._jumpToIndex = function (index) {
      if (!_this._mounted) {
        return;
      }

      var _this$props = _this.props,
          canJumpToTab = _this$props.canJumpToTab,
          navigationState = _this$props.navigationState;


      if (canJumpToTab && !canJumpToTab(navigationState.routes[index])) {
        var lastPosition = _this._getLastPosition();
        if (lastPosition !== navigationState.index) {
          _this._transitionTo(navigationState.index);
        }
        return;
      }

      _this._triggerEvent('jump', index);
      _this._nextIndex = index;
      _this._transitionTo(index, function () {
        return global.requestAnimationFrame(function () {
          if (_this.props.navigationState.index === index) {
            return;
          }

          if (_this._nextIndex === index && _this._mounted) {
            _this.props.onRequestChangeTab(index);
          }
        });
      });
    };

    _this._addSubscription = function (event, callback) {
      if (!_this._subscriptions[event]) {
        _this._subscriptions[event] = [];
      }
      _this._subscriptions[event].push(callback);
      return {
        remove: function remove() {
          var index = _this._subscriptions[event].indexOf(callback);
          if (index > -1) {
            _this._subscriptions[event].splice(index, 1);
          }
        }
      };
    };

    _this._triggerEvent = function (event, value) {
      if (_this._subscriptions[event]) {
        _this._subscriptions[event].forEach(function (fn) {
          return fn(value);
        });
      }
    };

    _this.state = {
      layout: babelHelpers.extends({}, _this.props.initialLayout, {
        measured: false
      }),
      position: new _reactNative.Animated.Value(_this.props.navigationState.index)
    };
    return _this;
  }

  babelHelpers.createClass(TabViewTransitioner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
      this._positionListener = this.state.position.addListener(this._trackPosition);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.navigationState.index !== this.props.navigationState.index) {
        this._transitionTo(this.props.navigationState.index);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      this.state.position.removeListener(this._positionListener);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, this.props, { onLayout: this._handleLayout }),
        this.props.render(this._buildSceneRendererProps())
      );
    }
  }]);
  return TabViewTransitioner;
}(_react.PureComponent);

TabViewTransitioner.propTypes = {
  navigationState: _TabViewPropTypes.NavigationStatePropType.isRequired,
  render: _react.PropTypes.func.isRequired,
  configureTransition: _react.PropTypes.func.isRequired,
  onRequestChangeTab: _react.PropTypes.func.isRequired,
  onChangePosition: _react.PropTypes.func,
  initialLayout: _react.PropTypes.shape({
    height: _react.PropTypes.number.isRequired,
    width: _react.PropTypes.number.isRequired
  }),
  canJumpToTab: _react.PropTypes.func
};
TabViewTransitioner.defaultProps = {
  configureTransition: function configureTransition() {
    return DefaultTransitionSpec;
  },
  initialLayout: {
    height: 0,
    width: 0
  }
};
exports.default = TabViewTransitioner;