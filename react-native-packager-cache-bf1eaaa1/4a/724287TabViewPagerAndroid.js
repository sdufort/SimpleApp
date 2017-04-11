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
    overflow: 'hidden'
  }
});

var TabViewPagerAndroid = function (_PureComponent) {
  babelHelpers.inherits(TabViewPagerAndroid, _PureComponent);

  function TabViewPagerAndroid() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabViewPagerAndroid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabViewPagerAndroid.__proto__ || Object.getPrototypeOf(TabViewPagerAndroid)).call.apply(_ref, [this].concat(args))), _this), _this._isDrag = false, _this._isIdle = true, _this._setPage = function (index) {
      if (_this._viewPager && _this._currentIndex !== index) {
        _this._currentIndex = index;
        if (_this.props.animationEnabled !== false) {
          _this._viewPager.setPage(index);
        } else {
          _this._viewPager.setPageWithoutAnimation(index);
        }
      }
    }, _this._handleJump = function (index) {
      if (_this._isIdle) {
        _this._setPage(index);
      }
    }, _this._handlePageScroll = function (e) {
      if (_this._isDrag) {
        _this.props.position.setValue(e.nativeEvent.position + e.nativeEvent.offset);
      }
    }, _this._handlePageScrollStateChanged = function (e) {
      _this._isIdle = e === 'idle';
      if (e === 'dragging') {
        _this._isDrag = true;
      } else if (e === 'idle') {
        _this._isDrag = false;
        if (_this._currentIndex !== _this.props.navigationState.index) {
          _this.props.jumpToIndex(_this._currentIndex);
        }
      }
    }, _this._handlePageSelected = function (e) {
      _this._currentIndex = e.nativeEvent.position;
    }, _this._setRef = function (el) {
      return _this._viewPager = el;
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabViewPagerAndroid, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._currentIndex = this.props.navigationState.index;
      this._jumpListener = this.props.subscribe('jump', this._handleJump);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.layout !== nextProps.layout || _react.Children.count(this.props.children) !== _react.Children.count(nextProps.children)) {
        global.requestAnimationFrame(function () {
          if (_this2._viewPager) {
            _this2._viewPager.setPageWithoutAnimation(nextProps.navigationState.index);
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._isIdle) {
        this._setPage(this.props.navigationState.index);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._jumpListener.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          navigationState = _props.navigationState,
          swipeEnabled = _props.swipeEnabled;

      return _react2.default.createElement(
        _reactNative.ViewPagerAndroid,
        {
          key: navigationState.routes.length,
          keyboardDismissMode: 'on-drag',
          initialPage: navigationState.index,
          scrollEnabled: swipeEnabled !== false,
          onPageScroll: this._handlePageScroll,
          onPageScrollStateChanged: this._handlePageScrollStateChanged,
          onPageSelected: this._handlePageSelected,
          style: styles.container,
          ref: this._setRef
        },
        _react.Children.map(children, function (child, i) {
          return _react2.default.createElement(
            _reactNative.View,
            {
              key: navigationState.routes[i].key,
              testID: navigationState.routes[i].testID,
              style: styles.page
            },
            child
          );
        })
      );
    }
  }]);
  return TabViewPagerAndroid;
}(_react.PureComponent);

TabViewPagerAndroid.propTypes = babelHelpers.extends({}, _TabViewPropTypes.SceneRendererPropType, {
  swipeEnabled: _react.PropTypes.bool,
  animationEnabled: _react.PropTypes.bool,
  children: _react.PropTypes.node
});
exports.default = TabViewPagerAndroid;