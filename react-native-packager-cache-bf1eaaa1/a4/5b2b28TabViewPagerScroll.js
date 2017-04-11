Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TabViewPropTypes = require('./TabViewPropTypes');

var styles = _reactNative.StyleSheet.create({
  container: {
    flexGrow: 1
  },

  page: {
    flex: 1,
    overflow: 'hidden'
  }
});

var TabViewPagerScroll = function (_PureComponent) {
  babelHelpers.inherits(TabViewPagerScroll, _PureComponent);

  function TabViewPagerScroll() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabViewPagerScroll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabViewPagerScroll.__proto__ || Object.getPrototypeOf(TabViewPagerScroll)).call.apply(_ref, [this].concat(args))), _this), _this._isManualScroll = false, _this._isMomentumScroll = false, _this._scrollTo = function (x) {
      if (_this._scrollView) {
        _this._scrollView.scrollTo({
          x: x,
          animated: false
        });
      }
    }, _this._updatePosition = function (value) {
      if (_this._isManualScroll || !_this._scrollView) {
        return;
      }
      _this._scrollTo(value * _this.props.layout.width);
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
    }, _this._handleMomentumScrollEnd = function (e) {
      _this._isMomentumScroll = false;
      _this._isManualScroll = false;

      var nextIndex = Math.round(e.nativeEvent.contentOffset.x / _this.props.layout.width);
      _this.props.jumpToIndex(nextIndex);
    }, _this._handleScroll = function (e) {
      if (!_this._isManualScroll) {
        return;
      }
      _this.props.position.setValue(e.nativeEvent.contentOffset.x / _this.props.layout.width);
    }, _this._setRef = function (el) {
      return _this._scrollView = el;
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabViewPagerScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._scrollTo(this.props.navigationState.index * this.props.layout.width);
      this._positionListener = this.props.subscribe('position', this._updatePosition);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.layout !== this.props.layout || _react.Children.count(prevProps.children) !== _react.Children.count(this.props.children)) {
        global.requestAnimationFrame(function () {
          return _this2._scrollTo(_this2.props.navigationState.index * _this2.props.layout.width);
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
      var _props = this.props,
          children = _props.children,
          layout = _props.layout,
          navigationState = _props.navigationState;

      return _react2.default.createElement(
        _reactNative.ScrollView,
        {
          horizontal: true,
          pagingEnabled: true,
          directionalLockEnabled: true,
          keyboardDismissMode: 'on-drag',
          keyboardShouldPersistTaps: 'always',
          scrollEnabled: this.props.swipeEnabled,
          automaticallyAdjustContentInsets: false,
          bounces: false,
          alwaysBounceHorizontal: false,
          scrollsToTop: false,
          showsHorizontalScrollIndicator: false,
          scrollEventThrottle: 16,
          onScroll: this._handleScroll,
          onScrollBeginDrag: this._handleBeginDrag,
          onScrollEndDrag: this._handleEndDrag,
          onMomentumScrollBegin: this._handleMomentumScrollBegin,
          onMomentumScrollEnd: this._handleMomentumScrollEnd,
          contentOffset: { x: this.props.navigationState.index * this.props.layout.width, y: 0 },
          style: styles.container,
          contentContainerStyle: layout.width ? null : styles.container,
          ref: this._setRef
        },
        _react.Children.map(children, function (child, i) {
          return _react2.default.createElement(
            _reactNative.View,
            {
              key: navigationState.routes[i].key,
              testID: navigationState.routes[i].testID,
              style: layout.width ? { width: layout.width, overflow: 'hidden' } : i === 0 ? styles.page : null
            },
            i === 0 || layout.width ? child : null
          );
        })
      );
    }
  }]);
  return TabViewPagerScroll;
}(_react.PureComponent);

TabViewPagerScroll.propTypes = babelHelpers.extends({}, _TabViewPropTypes.SceneRendererPropType, {
  swipeEnabled: _react.PropTypes.bool,
  children: _react.PropTypes.node
});
exports.default = TabViewPagerScroll;