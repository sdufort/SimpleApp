var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _styles = require('./../styles.js');

var background = require('./../images/background.png');

var boxes = [,,,,,,,,];
var padTop = 0;

var Boxes = function (_React$Component) {
  babelHelpers.inherits(Boxes, _React$Component);

  function Boxes() {
    babelHelpers.classCallCheck(this, Boxes);
    return babelHelpers.possibleConstructorReturn(this, (Boxes.__proto__ || Object.getPrototypeOf(Boxes)).apply(this, arguments));
  }

  babelHelpers.createClass(Boxes, [{
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
              { style: { flex: 10, flexDirection: 'column', borderWidth: 1, backgroundColor: 'rgba(50, 50, 50, .5)' } },
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row' } },
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[0], width: 70, height: 80, margin: 15 } }),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[1], width: 70, height: 80, margin: 15 } })
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row' } },
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[2], width: 70, height: 80, margin: 15 } }),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[3], width: 70, height: 80, margin: 15 } })
              ),
              _react2.default.createElement(
                _reactNative.View,
                null,
                _react2.default.createElement(
                  _reactNative.Text,
                  null,
                  '\n'
                )
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row' } },
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[4], width: 70, height: 80, margin: 15 } }),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[5], width: 70, height: 80, margin: 15 } })
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: { flex: 1, flexDirection: 'row' } },
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[6], width: 70, height: 80, margin: 15 } }),
                _react2.default.createElement(_reactNative.View, { style: { backgroundColor: boxes[7], width: 70, height: 80, margin: 15 } })
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
                'Black = Unvailable'
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles.styles.copyright },
              _react2.default.createElement(
                _reactNative.Text,
                { style: _styles.styles.instructions },
                'Copyright 2017 - Sean Dufort'
              )
            )
          )
        )
      );
    }
  }]);
  return Boxes;
}(_react2.default.Component);

Boxes.navigationOptions = {
  title: 'RB 306 Availability',
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

module.exports = { Boxes: Boxes };