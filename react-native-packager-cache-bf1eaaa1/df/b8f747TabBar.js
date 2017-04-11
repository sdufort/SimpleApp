Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TouchableItem = require('./TouchableItem');

var _TouchableItem2 = babelHelpers.interopRequireDefault(_TouchableItem);

var _TabViewPropTypes = require('./TabViewPropTypes');

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    overflow: _reactNative.Platform.OS === 'web' ? 'auto' : 'scroll'
  },
  tabBar: {
    backgroundColor: '#2196f3',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: _reactNative.StyleSheet.hairlineWidth,
    shadowOffset: {
      height: _reactNative.StyleSheet.hairlineWidth
    },
    zIndex: 1
  },
  tabContent: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  tabLabel: {
    backgroundColor: 'transparent',
    color: 'white',
    margin: 8
  },
  tabItem: {
    flexGrow: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  indicator: {
    backgroundColor: '#ffeb3b',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 2
  }
});

var TabBar = function (_PureComponent) {
  babelHelpers.inherits(TabBar, _PureComponent);

  function TabBar() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offset: new _reactNative.Animated.Value(0),
      visibility: new _reactNative.Animated.Value(0)
    }, _this._isManualScroll = false, _this._isMomentumScroll = false, _this._renderLabel = function (scene) {
      if (typeof _this.props.renderLabel !== 'undefined') {
        return _this.props.renderLabel(scene);
      }
      var label = _this.props.getLabelText(scene);
      if (typeof label !== 'string') {
        return null;
      }
      return _react2.default.createElement(
        _reactNative.Text,
        { style: [styles.tabLabel, _this.props.labelStyle] },
        label
      );
    }, _this._renderIndicator = function (props) {
      if (typeof _this.props.renderIndicator !== 'undefined') {
        return _this.props.renderIndicator(props);
      }
      var width = props.width,
          position = props.position;

      var translateX = _reactNative.Animated.multiply(position, width);
      return _react2.default.createElement(_reactNative.Animated.View, {
        style: [styles.indicator, { width: width, transform: [{ translateX: translateX }] }, _this.props.indicatorStyle]
      });
    }, _this._getTabWidthFromStyle = function (style) {
      if (_this._tabWidthCache && _this._tabWidthCache.style === style) {
        return _this._tabWidthCache.width;
      }
      var passedTabStyle = _reactNative.StyleSheet.flatten(_this.props.tabStyle);
      var cache = { style: style, width: passedTabStyle ? passedTabStyle.width : null };
      _this._tabWidthCache = cache;
      return cache;
    }, _this._getFinalTabWidth = function (props) {
      var layout = props.layout,
          navigationState = props.navigationState;

      var tabWidth = _this._getTabWidthFromStyle(props.tabStyle);
      if (typeof tabWidth === 'number') {
        return tabWidth;
      }
      if (typeof tabWidth === 'string' && tabWidth.endsWith('%')) {
        return layout.width * (parseFloat(tabWidth, 10) / 100);
      }
      if (props.scrollEnabled) {
        return layout.width / 5 * 2;
      }
      return layout.width / navigationState.routes.length;
    }, _this._getMaxScrollableDistance = function (props) {
      var layout = props.layout,
          navigationState = props.navigationState;

      if (layout.width === 0) {
        return 0;
      }
      var finalTabWidth = _this._getFinalTabWidth(props);
      var tabBarWidth = finalTabWidth * navigationState.routes.length;
      var maxDistance = tabBarWidth - layout.width;
      return Math.max(maxDistance, 0);
    }, _this._normalizeScrollValue = function (props, value) {
      var maxDistance = _this._getMaxScrollableDistance(props);
      return Math.max(Math.min(value, maxDistance), 0);
    }, _this._getScrollAmount = function (props, i) {
      var layout = props.layout;

      var finalTabWidth = _this._getFinalTabWidth(props);
      var centerDistance = finalTabWidth * i + finalTabWidth / 2;
      var scrollAmount = centerDistance - layout.width / 2;
      return _this._normalizeScrollValue(props, scrollAmount);
    }, _this._resetScrollOffset = function (props) {
      if (!props.scrollEnabled || !_this._scrollView) {
        return;
      }

      var scrollAmount = _this._getScrollAmount(props, props.navigationState.index);
      _this._scrollView.scrollTo({
        x: scrollAmount,
        animated: true
      });
      _reactNative.Animated.timing(_this.state.offset, {
        toValue: 0,
        duration: 150
      }).start();
    }, _this._adjustScroll = function (index) {
      if (!_this.props.scrollEnabled || !_this._scrollView) {
        return;
      }

      var scrollAmount = _this._getScrollAmount(_this.props, index);
      _this._scrollView.scrollTo({
        x: scrollAmount,
        animated: false
      });
    }, _this._adjustOffset = function (value) {
      if (!_this._isManualScroll || !_this.props.scrollEnabled) {
        return;
      }

      var scrollAmount = _this._getScrollAmount(_this.props, _this.props.navigationState.index);
      var scrollOffset = value - scrollAmount;

      if (_this._isMomentumScroll) {
        _reactNative.Animated.spring(_this.state.offset, {
          toValue: -scrollOffset,
          tension: 300,
          friction: 35
        }).start();
      } else {
        _this.state.offset.setValue(-scrollOffset);
      }
    }, _this._handleScroll = function (e) {
      _this._adjustOffset(e.nativeEvent.contentOffset.x);
    }, _this._handleBeginDrag = function () {
      _this._isManualScroll = true;
      _this._isMomentumScroll = false;
    }, _this._handleEndDrag = function () {
      global.requestAnimationFrame(function () {
        if (_this._isMomentumScroll) {
          return;
        }
        _this._isManualScroll = false;
      });
    }, _this._handleMomentumScrollBegin = function () {
      _this._isMomentumScroll = true;
    }, _this._handleMomentumScrollEnd = function () {
      _this._isMomentumScroll = false;
      _this._isManualScroll = false;
    }, _this._setRef = function (el) {
      return _this._scrollView = el;
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.scrollEnabled === true) {
        var tabWidth = this._getTabWidthFromStyle(this.props.tabStyle);
        if (this.props.layout.width || tabWidth) {
          this.state.visibility.setValue(1);
        }
      } else {
        this.state.visibility.setValue(1);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._adjustScroll(this.props.navigationState.index);
      this._positionListener = this.props.subscribe('position', this._adjustScroll);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.navigationState !== nextProps.navigationState) {
        this._resetScrollOffset(nextProps);
      }

      var nextTabWidth = this._getTabWidthFromStyle(nextProps.tabStyle);

      if (this.props.tabStyle !== nextProps.tabStyle && nextTabWidth || this.props.layout.width !== nextProps.layout.width && nextProps.layout.width) {
        this.state.visibility.setValue(1);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.scrollEnabled && (prevProps.layout !== this.props.layout || prevProps.tabStyle !== this.props.tabStyle)) {
        global.requestAnimationFrame(function () {
          return _this2._adjustScroll(_this2.props.navigationState.index);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._positionListener.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          position = _props.position,
          navigationState = _props.navigationState,
          scrollEnabled = _props.scrollEnabled;
      var routes = navigationState.routes,
          index = navigationState.index;

      var initialOffset = this._getScrollAmount(this.props, this.props.navigationState.index);
      var maxDistance = this._getMaxScrollableDistance(this.props);
      var finalTabWidth = this._getFinalTabWidth(this.props);
      var tabBarWidth = finalTabWidth * routes.length;

      var inputRange = [-1].concat(babelHelpers.toConsumableArray(routes.map(function (x, i) {
        return i;
      })));
      var translateOutputRange = inputRange.map(function (i) {
        return _this3._getScrollAmount(_this3.props, i) * -1;
      });

      var translateX = _reactNative.Animated.add(position.interpolate({
        inputRange: inputRange,
        outputRange: translateOutputRange
      }), this.state.offset).interpolate({
        inputRange: [-maxDistance, 0],
        outputRange: [-maxDistance, 0],
        extrapolate: 'clamp'
      });

      return _react2.default.createElement(
        _reactNative.Animated.View,
        { style: [styles.tabBar, this.props.style] },
        _react2.default.createElement(
          _reactNative.Animated.View,
          { pointerEvents: 'none', style: [styles.indicatorContainer, scrollEnabled ? { width: tabBarWidth, transform: [{ translateX: translateX }] } : null] },
          this._renderIndicator(babelHelpers.extends({}, this.props, {
            width: new _reactNative.Animated.Value(finalTabWidth)
          }))
        ),
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.scroll },
          _react2.default.createElement(
            _reactNative.ScrollView,
            {
              horizontal: true,
              scrollEnabled: scrollEnabled,
              bounces: false,
              alwaysBounceHorizontal: false,
              scrollsToTop: false,
              showsHorizontalScrollIndicator: false,
              automaticallyAdjustContentInsets: false,
              contentContainerStyle: [styles.tabContent, scrollEnabled ? null : styles.container],
              scrollEventThrottle: 16,
              onScroll: this._handleScroll,
              onScrollBeginDrag: this._handleBeginDrag,
              onScrollEndDrag: this._handleEndDrag,
              onMomentumScrollBegin: this._handleMomentumScrollBegin,
              onMomentumScrollEnd: this._handleMomentumScrollEnd,
              contentOffset: { x: initialOffset, y: 0 },
              ref: this._setRef
            },
            routes.map(function (route, i) {
              var focused = index === i;
              var outputRange = inputRange.map(function (inputIndex) {
                return inputIndex === i ? 1 : 0.7;
              });
              var opacity = _reactNative.Animated.multiply(_this3.state.visibility, position.interpolate({
                inputRange: inputRange,
                outputRange: outputRange
              }));
              var scene = {
                route: route,
                focused: focused,
                index: i
              };
              var label = _this3._renderLabel(scene);
              var icon = _this3.props.renderIcon ? _this3.props.renderIcon(scene) : null;
              var badge = _this3.props.renderBadge ? _this3.props.renderBadge(scene) : null;

              var tabStyle = {};

              tabStyle.opacity = opacity;

              if (icon) {
                if (label) {
                  tabStyle.paddingTop = 8;
                } else {
                  tabStyle.padding = 12;
                }
              }

              var passedTabStyle = _reactNative.StyleSheet.flatten(_this3.props.tabStyle);
              var isWidthSet = passedTabStyle && typeof passedTabStyle.width !== 'undefined' || scrollEnabled === true;
              var tabContainerStyle = {};

              if (isWidthSet) {
                tabStyle.width = finalTabWidth;
              }

              if (passedTabStyle && typeof passedTabStyle.flex === 'number') {
                tabContainerStyle.flex = passedTabStyle.flex;
              } else if (!isWidthSet) {
                tabContainerStyle.flex = 1;
              }

              var accessibilityLabel = route.accessibilityLabel || route.title;

              return _react2.default.createElement(
                _TouchableItem2.default,
                {
                  borderless: true,
                  key: route.key,
                  testID: route.testID,
                  accessible: route.accessible,
                  accessibilityLabel: accessibilityLabel,
                  accessibilityTraits: 'button',
                  pressColor: _this3.props.pressColor,
                  pressOpacity: _this3.props.pressOpacity,
                  delayPressIn: 0,
                  onPress: function onPress() {
                    var _props2 = _this3.props,
                        onTabPress = _props2.onTabPress,
                        jumpToIndex = _props2.jumpToIndex;

                    jumpToIndex(i);
                    if (onTabPress) {
                      onTabPress(routes[i]);
                    }
                  },
                  style: tabContainerStyle
                },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: styles.container },
                  _react2.default.createElement(
                    _reactNative.Animated.View,
                    { style: [styles.tabItem, tabStyle, passedTabStyle, styles.container] },
                    icon,
                    label
                  ),
                  badge ? _react2.default.createElement(
                    _reactNative.Animated.View,
                    { style: [styles.badge, { opacity: _this3.state.visibility }] },
                    badge
                  ) : null
                )
              );
            })
          )
        )
      );
    }
  }]);
  return TabBar;
}(_react.PureComponent);

TabBar.propTypes = babelHelpers.extends({}, _TabViewPropTypes.SceneRendererPropType, {
  scrollEnabled: _react.PropTypes.bool,
  pressColor: _TouchableItem2.default.propTypes.pressColor,
  pressOpacity: _TouchableItem2.default.propTypes.pressOpacity,
  getLabelText: _react.PropTypes.func,
  renderIcon: _react.PropTypes.func,
  renderLabel: _react.PropTypes.func,
  renderIndicator: _react.PropTypes.func,
  onTabPress: _react.PropTypes.func,
  tabStyle: _reactNative.View.propTypes.style,
  indicatorStyle: _reactNative.View.propTypes.style,
  labelStyle: _reactNative.Text.propTypes.style,
  style: _react.PropTypes.any
});
TabBar.defaultProps = {
  getLabelText: function getLabelText(_ref2) {
    var route = _ref2.route;
    return route.title ? route.title.toUpperCase() : null;
  }
};
exports.default = TabBar;