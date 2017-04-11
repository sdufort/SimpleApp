Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = babelHelpers.interopRequireDefault(_pathToRegexp);

var _NavigationActions = require('../NavigationActions');

var _NavigationActions2 = babelHelpers.interopRequireDefault(_NavigationActions);

var _createConfigGetter = require('./createConfigGetter');

var _createConfigGetter2 = babelHelpers.interopRequireDefault(_createConfigGetter);

var _getScreenForRouteName = require('./getScreenForRouteName');

var _getScreenForRouteName2 = babelHelpers.interopRequireDefault(_getScreenForRouteName);

var _StateUtils = require('../StateUtils');

var _StateUtils2 = babelHelpers.interopRequireDefault(_StateUtils);

var _validateRouteConfigMap = require('./validateRouteConfigMap');

var _validateRouteConfigMap2 = babelHelpers.interopRequireDefault(_validateRouteConfigMap);

var uniqueBaseId = 'id-' + Date.now();
var uuidCount = 0;
function _getUuid() {
  return uniqueBaseId + '-' + uuidCount++;
}

exports.default = function (routeConfigs) {
  var stackConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _validateRouteConfigMap2.default)(routeConfigs);

  var childRouters = {};
  var routeNames = Object.keys(routeConfigs);

  routeNames.forEach(function (routeName) {
    var screen = (0, _getScreenForRouteName2.default)(routeConfigs, routeName);
    if (screen && screen.router) {
      childRouters[routeName] = screen.router;
    } else {
      childRouters[routeName] = null;
    }
  });

  var initialRouteParams = stackConfig.initialRouteParams;


  var initialRouteName = stackConfig.initialRouteName || routeNames[0];

  var initialChildRouter = childRouters[initialRouteName];
  var paths = stackConfig.paths || {};

  routeNames.forEach(function (routeName) {
    var pathPattern = paths[routeName] || routeConfigs[routeName].path;
    var matchExact = !!pathPattern && !childRouters[routeName];
    if (!pathPattern) {
      pathPattern = routeName;
    }
    var keys = [];
    var re = (0, _pathToRegexp2.default)(pathPattern, keys);
    if (!matchExact) {
      var wildcardRe = (0, _pathToRegexp2.default)(pathPattern + '/*', keys);
      re = new RegExp('(?:' + re.source + ')|(?:' + wildcardRe.source + ')');
    }

    paths[routeName] = { re: re, keys: keys };
  });

  return {
    getComponentForState: function getComponentForState(state) {
      var activeChildRoute = state.routes[state.index];
      var routeName = activeChildRoute.routeName;

      if (childRouters[routeName]) {
        return childRouters[routeName].getComponentForState(activeChildRoute);
      }
      return (0, _getScreenForRouteName2.default)(routeConfigs, routeName);
    },
    getComponentForRouteName: function getComponentForRouteName(routeName) {
      return (0, _getScreenForRouteName2.default)(routeConfigs, routeName);
    },
    getStateForAction: function getStateForAction(action, state) {
      action = _NavigationActions2.default.mapDeprecatedActionAndWarn(action);

      if (!state) {
        var route = {};
        if (action.type === _NavigationActions2.default.NAVIGATE && childRouters[action.routeName] !== undefined) {
          return {
            index: 0,
            routes: [babelHelpers.extends({}, action, {
              type: undefined,
              key: 'Init'
            })]
          };
        }
        if (initialChildRouter) {
          route = initialChildRouter.getStateForAction(_NavigationActions2.default.navigate({
            routeName: initialRouteName,
            params: initialRouteParams
          }));
        }
        var _params = (route.params || action.params || initialRouteParams) && babelHelpers.extends({}, route.params || {}, action.params || {}, initialRouteParams || {});
        route = babelHelpers.extends({}, route, {
          routeName: initialRouteName,
          key: 'Init'
        }, _params ? { params: _params } : {});
        state = {
          index: 0,
          routes: [route]
        };
      }

      var currentRoute = state.routes[state.index];
      var childRouter = childRouters[currentRoute.routeName];
      if (childRouter) {
        var _route = childRouter.getStateForAction(action, currentRoute);
        if (_route && _route !== currentRoute) {
          return _StateUtils2.default.replaceAt(state, currentRoute.key, _route);
        }
      }

      if (action.type === _NavigationActions2.default.NAVIGATE && childRouters[action.routeName] !== undefined) {
        var _childRouter = childRouters[action.routeName];
        var _route2 = void 0;
        if (_childRouter) {
          var childAction = action.action || _NavigationActions2.default.init({ params: action.params });
          _route2 = babelHelpers.extends({}, action, _childRouter.getStateForAction(childAction), {
            key: _getUuid(),
            routeName: action.routeName
          });
        } else {
          _route2 = babelHelpers.extends({}, action, {
            key: _getUuid(),
            routeName: action.routeName
          });
        }
        return _StateUtils2.default.push(state, _route2);
      }

      if (action.type === _NavigationActions2.default.SET_PARAMS) {
        var lastRoute = state.routes.find(function (route) {
          return route.key === action.key;
        });
        if (lastRoute) {
          var _params2 = babelHelpers.extends({}, lastRoute.params, action.params);
          var routes = [].concat(babelHelpers.toConsumableArray(state.routes));
          routes[state.routes.indexOf(lastRoute)] = babelHelpers.extends({}, lastRoute, {
            params: _params2
          });
          return babelHelpers.extends({}, state, {
            routes: routes
          });
        }
      }

      if (action.type === _NavigationActions2.default.RESET) {
        var resetAction = action;

        return babelHelpers.extends({}, state, {
          routes: resetAction.actions.map(function (action, index) {
            var router = childRouters[action.routeName];
            if (router) {
              return babelHelpers.extends({}, action, router.getStateForAction(action), {
                routeName: action.routeName,
                key: 'Init' + index
              });
            }
            var route = babelHelpers.extends({}, action, {
              key: 'Init' + index
            });
            delete route.type;
            return route;
          }),
          index: action.index
        });
      }

      if (action.type === _NavigationActions2.default.BACK) {
        var backRouteIndex = null;
        if (action.key) {
          var backRoute = state.routes.find(function (route) {
            return route.key === action.key;
          });

          backRouteIndex = state.routes.indexOf(backRoute);
        }
        if (backRouteIndex == null) {
          return _StateUtils2.default.pop(state);
        }
        if (backRouteIndex > 0) {
          return babelHelpers.extends({}, state, {
            routes: state.routes.slice(0, backRouteIndex),
            index: backRouteIndex - 1
          });
        }
      }
      return state;
    },
    getPathAndParamsForState: function getPathAndParamsForState(state) {
      return {
        path: ''
      };
    },
    getActionForPathAndParams: function getActionForPathAndParams(pathToResolve) {
      if (!pathToResolve) {
        return _NavigationActions2.default.navigate({
          routeName: initialRouteName
        });
      }

      var matchedRouteName = void 0;
      var pathMatch = void 0;
      var pathMatchKeys = void 0;

      for (var routeName in paths) {
        var _paths$routeName = paths[routeName],
            re = _paths$routeName.re,
            keys = _paths$routeName.keys;

        pathMatch = re.exec(pathToResolve);
        if (pathMatch && pathMatch.length) {
          pathMatchKeys = keys;
          matchedRouteName = routeName;
          break;
        }
      }

      if (!matchedRouteName) {
        return null;
      }

      var nestedAction = void 0;
      if (childRouters[matchedRouteName]) {
        nestedAction = childRouters[matchedRouteName].getActionForPathAndParams(pathMatch.slice(pathMatchKeys.length).join('/'));
      }

      var params = pathMatch.slice(1).reduce(function (result, matchResult, i) {
        var key = pathMatchKeys[i];
        if (key.asterisk || !key) {
          return result;
        }
        var nextResult = result || {};
        var paramName = key.name;
        nextResult[paramName] = matchResult;
        return nextResult;
      }, null);

      return _NavigationActions2.default.navigate(babelHelpers.extends({
        routeName: matchedRouteName
      }, params ? { params: params } : {}, nestedAction ? { action: nestedAction } : {}));
    },


    getScreenConfig: (0, _createConfigGetter2.default)(routeConfigs, stackConfig.navigationOptions)

  };
};