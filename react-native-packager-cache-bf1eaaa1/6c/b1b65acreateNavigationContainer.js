Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createNavigationContainer;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = babelHelpers.interopRequireDefault(_invariant);

var _PlatformHelpers = require('./PlatformHelpers');

var _NavigationActions = require('./NavigationActions');

var _NavigationActions2 = babelHelpers.interopRequireDefault(_NavigationActions);

var _addNavigationHelpers = require('./addNavigationHelpers');

var _addNavigationHelpers2 = babelHelpers.interopRequireDefault(_addNavigationHelpers);

function createNavigationContainer(Component, containerConfig) {

  function urlToPathAndParams(url) {
    var params = {};
    var URIPrefix = containerConfig && containerConfig.URIPrefix;
    var delimiter = URIPrefix || '://';
    var path = url.split(delimiter)[1];
    if (!path) {
      path = url;
    }
    return {
      path: path,
      params: params
    };
  }

  var NavigationContainer = function (_React$Component) {
    babelHelpers.inherits(NavigationContainer, _React$Component);

    function NavigationContainer(props) {
      babelHelpers.classCallCheck(this, NavigationContainer);

      var _this = babelHelpers.possibleConstructorReturn(this, (NavigationContainer.__proto__ || Object.getPrototypeOf(NavigationContainer)).call(this, props));

      _this.subs = null;

      _this._isStateful = function () {
        var hasNavProp = !!_this.props.navigation;
        if (hasNavProp) {
          (0, _invariant2.default)(!containerConfig, 'This navigator has a container config AND a navigation prop, so it is ' + 'unclear if it should own its own state. Remove the containerConfig ' + 'if the navigator should get its state from the navigation prop. If the ' + 'navigator should maintain its own state, do not pass a navigation prop.');
          return false;
        }
        return true;
      };

      _this._handleOpenURL = function (_ref) {
        var url = _ref.url;

        console.log('Handling URL:', url);
        var parsedUrl = urlToPathAndParams(url);
        if (parsedUrl) {
          var path = parsedUrl.path,
              params = parsedUrl.params;

          var action = Component.router.getActionForPathAndParams(path, params);
          if (action) {
            _this.dispatch(action);
          }
        }
      };

      _this.dispatch = function (action) {
        var state = _this.state;

        if (!_this._isStateful()) {
          return false;
        }
        var nav = Component.router.getStateForAction(action, state.nav);

        if (nav && nav !== state.nav) {
          if (console.group) {
            console.group('Navigation Dispatch: ');
            console.log('Action: ', action);
            console.log('New State: ', nav);
            console.log('Last State: ', state.nav);
            console.groupEnd();
          } else {
            console.log('Navigation Dispatch: ', { action: action, newState: nav, lastState: state.nav });
          }
          _this.setState({ nav: nav });
          return true;
        }
        return false;
      };

      _this.state = {
        nav: _this._isStateful() ? Component.router.getStateForAction(_NavigationActions2.default.init()) : null
      };
      return _this;
    }

    babelHelpers.createClass(NavigationContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        if (this._isStateful()) {
          this.subs = _PlatformHelpers.BackAndroid.addEventListener('backPress', function () {
            return _this2.dispatch(_NavigationActions2.default.back());
          });
          _PlatformHelpers.Linking.addEventListener('url', this._handleOpenURL);
          _PlatformHelpers.Linking.getInitialURL().then(function (url) {
            if (url) {
              console.log('Handling URL:', url);
              var parsedUrl = urlToPathAndParams(url);
              if (parsedUrl) {
                var path = parsedUrl.path,
                    params = parsedUrl.params;

                var action = Component.router.getActionForPathAndParams(path, params);
                if (action) {
                  _this2.dispatch(action);
                }
              }
            }
          });
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _ref2 = this._isStateful() ? [prevState.nav, this.state.nav] : [prevProps.navigation.state, this.props.navigation.state],
            _ref3 = babelHelpers.slicedToArray(_ref2, 2),
            prevNavigationState = _ref3[0],
            navigationState = _ref3[1];

        if (prevNavigationState !== navigationState && typeof this.props.onNavigationStateChange === 'function') {
          this.props.onNavigationStateChange(prevNavigationState, navigationState);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _PlatformHelpers.Linking.removeEventListener('url', this._handleOpenURL);
        this.subs && this.subs.remove();
      }
    }, {
      key: 'render',
      value: function render() {
        var navigation = this.props.navigation;
        if (this._isStateful()) {
          if (!this._navigation || this._navigation.state !== this.state.nav) {
            this._navigation = (0, _addNavigationHelpers2.default)({
              dispatch: this.dispatch.bind(this),
              state: this.state.nav
            });
          }
          navigation = this._navigation;
        }
        return _react2.default.createElement(Component, babelHelpers.extends({}, this.props, {
          navigation: navigation
        }));
      }
    }]);
    return NavigationContainer;
  }(_react2.default.Component);

  NavigationContainer.router = Component.router;


  return NavigationContainer;
}