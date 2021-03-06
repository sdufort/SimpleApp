Object.defineProperty(exports, "__esModule", {
  value: true
});
var namespacedAction = function namespacedAction(action) {
  return 'Navigation/' + action;
};

var BACK = namespacedAction('BACK');
var INIT = namespacedAction('INIT');
var NAVIGATE = namespacedAction('NAVIGATE');
var RESET = namespacedAction('RESET');
var SET_PARAMS = namespacedAction('SET_PARAMS');
var URI = namespacedAction('URI');

var createAction = function createAction(type) {
  return function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return babelHelpers.extends({
      type: type
    }, payload);
  };
};

var back = createAction(BACK);
var init = createAction(INIT);
var navigate = createAction(NAVIGATE);
var reset = createAction(RESET);
var setParams = createAction(SET_PARAMS);
var uri = createAction(URI);

var deprecatedActionMap = {
  Back: BACK,
  Init: INIT,
  Navigate: NAVIGATE,
  Reset: RESET,
  SetParams: SET_PARAMS,
  Uri: URI
};

var mapDeprecatedActionAndWarn = function mapDeprecatedActionAndWarn(action) {
  var mappedType = deprecatedActionMap[action.type];
  if (!mappedType) {
    return action;
  }

  console.warn(['The action type \'' + action.type + '\' has been renamed to \'' + mappedType + '\'.', '\'' + action.type + '\' will continue to work while in beta but will be removed', 'in the first major release. Moving forward, you should use the', 'action constants and action creators exported by this library in', "the 'actions' object.", 'See https://github.com/react-community/react-navigation/pull/120 for', 'more details.'].join(' '));

  return babelHelpers.extends({}, action, {
    type: deprecatedActionMap[action.type]
  });
};

exports.default = {
  BACK: BACK,
  INIT: INIT,
  NAVIGATE: NAVIGATE,
  RESET: RESET,
  SET_PARAMS: SET_PARAMS,
  URI: URI,

  back: back,
  init: init,
  navigate: navigate,
  reset: reset,
  setParams: setParams,
  uri: uri,

  mapDeprecatedActionAndWarn: mapDeprecatedActionAndWarn
};