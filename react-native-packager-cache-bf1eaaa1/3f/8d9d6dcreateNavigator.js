Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var createNavigator = function createNavigator(router) {
  return function (View) {
    var Navigator = function (_React$Component) {
      babelHelpers.inherits(Navigator, _React$Component);

      function Navigator() {
        babelHelpers.classCallCheck(this, Navigator);
        return babelHelpers.possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).apply(this, arguments));
      }

      babelHelpers.createClass(Navigator, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(View, babelHelpers.extends({}, this.props, {
            router: router
          }));
        }
      }]);
      return Navigator;
    }(_react2.default.Component);

    Navigator.router = router;


    return Navigator;
  };
};

exports.default = createNavigator;