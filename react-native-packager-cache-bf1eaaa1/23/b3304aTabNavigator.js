Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _createNavigator = require('./createNavigator');

var _createNavigator2 = babelHelpers.interopRequireDefault(_createNavigator);

var _createNavigationContainer = require('../createNavigationContainer');

var _createNavigationContainer2 = babelHelpers.interopRequireDefault(_createNavigationContainer);

var _TabRouter = require('../routers/TabRouter');

var _TabRouter2 = babelHelpers.interopRequireDefault(_TabRouter);

var _TabView = require('../views/TabView/TabView');

var _TabView2 = babelHelpers.interopRequireDefault(_TabView);

var TabNavigator = function TabNavigator(routeConfigs) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var mergedConfig = babelHelpers.extends({}, TabNavigator.Presets.Default, config);
  var containerOptions = mergedConfig.containerOptions,
      tabBarComponent = mergedConfig.tabBarComponent,
      tabBarPosition = mergedConfig.tabBarPosition,
      tabBarOptions = mergedConfig.tabBarOptions,
      swipeEnabled = mergedConfig.swipeEnabled,
      animationEnabled = mergedConfig.animationEnabled,
      lazyLoad = mergedConfig.lazyLoad,
      tabsConfig = babelHelpers.objectWithoutProperties(mergedConfig, ['containerOptions', 'tabBarComponent', 'tabBarPosition', 'tabBarOptions', 'swipeEnabled', 'animationEnabled', 'lazyLoad']);

  var router = (0, _TabRouter2.default)(routeConfigs, tabsConfig);
  return (0, _createNavigationContainer2.default)((0, _createNavigator2.default)(router)(function (props) {
    return _react2.default.createElement(_TabView2.default, babelHelpers.extends({}, props, {
      tabBarComponent: tabBarComponent,
      tabBarPosition: tabBarPosition,
      tabBarOptions: tabBarOptions,
      swipeEnabled: swipeEnabled,
      animationEnabled: animationEnabled,
      lazyLoad: lazyLoad
    }));
  }), containerOptions);
};

var Presets = {
  iOSBottomTabs: {
    tabBarComponent: _TabView2.default.TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false
  },
  AndroidTopTabs: {
    tabBarComponent: _TabView2.default.TabBarTop,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    lazyLoad: false
  }
};

TabNavigator.Presets = {
  iOSBottomTabs: Presets.iOSBottomTabs,
  AndroidTopTabs: Presets.AndroidTopTabs,
  Default: _reactNative.Platform.OS === 'ios' ? Presets.iOSBottomTabs : Presets.AndroidTopTabs
};

exports.default = TabNavigator;