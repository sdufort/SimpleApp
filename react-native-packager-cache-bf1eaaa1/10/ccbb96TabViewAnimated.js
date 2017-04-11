Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TabViewTransitioner = require('./TabViewTransitioner');

var _TabViewTransitioner2 = babelHelpers.interopRequireDefault(_TabViewTransitioner);

var _TabViewPropTypes = require('./TabViewPropTypes');

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  }
});

var TabViewPager = void 0;

switch (_reactNative.Platform.OS) {
  case 'android':
    TabViewPager = require('./TabViewPagerAndroid').default;
    break;
  case 'ios':
    TabViewPager = require('./TabViewPagerScroll').default;
    break;
  default:
    TabViewPager = require('./TabViewPagerPan').default;
    break;
}

var TabViewAnimated = function (_PureComponent) {
  babelHelpers.inherits(TabViewAnimated, _PureComponent);

  function TabViewAnimated(props) {
    babelHelpers.classCallCheck(this, TabViewAnimated);

    var _this = babelHelpers.possibleConstructorReturn(this, (TabViewAnimated.__proto__ || Object.getPrototypeOf(TabViewAnimated)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      loaded: [_this.props.navigationState.index]
    };
    return _this;
  }

  babelHelpers.createClass(TabViewAnimated, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TabViewTransitioner2.default, babelHelpers.extends({}, this.props, {
        loaded: this.state.loaded,
        onChangePosition: this._handleChangePosition,
        render: this._renderItems
      }));
    }
  }]);
  return TabViewAnimated;
}(_react.PureComponent);

TabViewAnimated.propTypes = {
  navigationState: _TabViewPropTypes.NavigationStatePropType.isRequired,
  renderPager: _react.PropTypes.func.isRequired,
  renderScene: _react.PropTypes.func.isRequired,
  renderHeader: _react.PropTypes.func,
  renderFooter: _react.PropTypes.func,
  onChangePosition: _react.PropTypes.func,
  lazy: _react.PropTypes.bool
};
TabViewAnimated.defaultProps = {
  renderPager: function renderPager(props) {
    return _react2.default.createElement(TabViewPager, props);
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._renderScene = function (props) {
    var _props = _this2.props,
        renderScene = _props.renderScene,
        navigationState = _props.navigationState,
        lazy = _props.lazy;
    var loaded = _this2.state.loaded;

    if (lazy) {
      if (loaded.includes(navigationState.routes.indexOf(props.route))) {
        return renderScene(props);
      }
      return null;
    }
    return renderScene(props);
  };

  this._renderItems = function (props) {
    var _props2 = _this2.props,
        renderPager = _props2.renderPager,
        renderHeader = _props2.renderHeader,
        renderFooter = _props2.renderFooter;
    var navigationState = props.navigationState;


    return _react2.default.createElement(
      _reactNative.View,
      { style: styles.container },
      renderHeader && renderHeader(props),
      renderPager(babelHelpers.extends({}, props, {
        children: navigationState.routes.map(function (route, index) {
          return _this2._renderScene(babelHelpers.extends({}, props, {
            route: route,
            index: index,
            focused: index === props.navigationState.index
          }));
        })
      })),
      renderFooter && renderFooter(props)
    );
  };

  this._handleChangePosition = function (value) {
    var _props3 = _this2.props,
        onChangePosition = _props3.onChangePosition,
        navigationState = _props3.navigationState,
        lazy = _props3.lazy;

    if (onChangePosition) {
      onChangePosition(value);
    }
    var loaded = _this2.state.loaded;

    if (lazy) {
      var next = Math.ceil(value);
      if (next === navigationState.index) {
        next = Math.floor(value);
      }
      if (loaded.includes(next)) {
        return;
      }
      _this2.setState({
        loaded: [].concat(babelHelpers.toConsumableArray(loaded), [next])
      });
    }
  };
};

exports.default = TabViewAnimated;