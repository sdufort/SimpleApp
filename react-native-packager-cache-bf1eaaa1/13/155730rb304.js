var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var background = require('./../images/background.png');

var boxes = [,,,,,,,,,];
var padTop = 0;

var RB304 = function (_React$Component) {
  babelHelpers.inherits(RB304, _React$Component);

  function RB304() {
    babelHelpers.classCallCheck(this, RB304);
    return babelHelpers.possibleConstructorReturn(this, (RB304.__proto__ || Object.getPrototypeOf(RB304)).apply(this, arguments));
  }

  babelHelpers.createClass(RB304, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      colorizeBoxes();
      return _react2.default.createElement(
        _reactNative.Image,
        { source: background, style: _styles.styles.backgroundImage },
        _react2.default.createElement(
          _reactNative.View,
          { style: _styles.styles.picContainer },
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles.styles.text },
            _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: 'rgba(50, 50, 50, .5)' } },
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row' } },
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[0], height: 70, width: 80, margin: 10 } }),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[1], height: 70, width: 80, margin: 10 } }),
                _react2.default.createElement(
                  _reactNative.View,
                  null,
                  _react2.default.createElement(
                    _reactNative.Text,
                    null,
                    '           '
                  )
                ),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[2], height: 70, width: 80, margin: 10 } })
              ),
              _react2.default.createElement(
                _reactNative.View,
                null,
                _react2.default.createElement(_reactNative.Text, null)
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row' } },
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[3], height: 70, width: 80, margin: 10 } }),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[4], height: 70, width: 80, margin: 10 } }),
                _react2.default.createElement(
                  _reactNative.View,
                  null,
                  _react2.default.createElement(
                    _reactNative.Text,
                    null,
                    '           '
                  )
                ),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[5], height: 70, width: 80, margin: 10 } })
              ),
              _react2.default.createElement(
                _reactNative.View,
                null,
                _react2.default.createElement(_reactNative.Text, null)
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row' } },
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[6], height: 70, width: 80, margin: 10 } }),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[7], height: 70, width: 80, margin: 10 } }),
                _react2.default.createElement(
                  _reactNative.View,
                  null,
                  _react2.default.createElement(
                    _reactNative.Text,
                    null,
                    '           '
                  )
                ),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[8], height: 70, width: 80, margin: 10 } })
              )
            ),
            _react2.default.createElement(_reactNative.Text, null),
            _react2.default.createElement(
              _reactNative.View,
              { style: { alignItems: 'center' } },
              _react2.default.createElement(
                _reactNative.Text,
                null,
                'White = Available'
              ),
              _react2.default.createElement(
                _reactNative.Text,
                null,
                'Black = Unavailable'
              )
            ),
            _react2.default.createElement(_reactNative.View, { style: { flex: 1 } })
          )
        )
      );
    }
  }]);
  return RB304;
}(_react2.default.Component);

RB304.navigationOptions = {
  title: 'RB 304 Availability',
  header: function header(navigation) {
    return {
      style: {
        backgroundColor: 'rgba(50, 50, 50, .5)'
      }
    };
  }
};


function colorizeBoxes() {
  for (var i = 0; i < boxes.length; i++) {
    var color = Math.floor(Math.random() * 2);
    if (color === 1) {
      boxes[i] = '#FFFFFF';
    } else {
      boxes[i] = '#000000';
    }
    padTop = padTop + 20;
  }
}

module.exports = { RB304: RB304 };