var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Overlay = require('./overlay');
var Items = require('./items');

var window = _reactNative.Dimensions.get('window');

var OptionList = function (_Component) {
  babelHelpers.inherits(OptionList, _Component);

  function OptionList(props) {
    babelHelpers.classCallCheck(this, OptionList);

    var _this = babelHelpers.possibleConstructorReturn(this, (OptionList.__proto__ || Object.getPrototypeOf(OptionList)).call(this, props));

    _this.state = {
      show: false,

      width: 0,
      height: 0,

      pageX: 0,
      pageY: 0,

      positionX: 0,
      positionY: 0,

      items: [],
      onSelect: function onSelect() {}
    };
    return _this;
  }

  babelHelpers.createClass(OptionList, [{
    key: '_show',
    value: function _show(items, positionX, positionY, width, height, onSelect) {
      positionX = positionX - this.state.pageX;
      positionY = positionY - this.state.pageY;

      this.setState(babelHelpers.extends({}, this.state, {
        positionX: positionX,
        positionY: positionY,
        width: width,
        height: height,
        items: items,
        onSelect: onSelect,
        show: true
      }));
    }
  }, {
    key: '_onOverlayPress',
    value: function _onOverlayPress() {
      var onSelect = this.state.onSelect;

      onSelect(null, null);

      this.setState(babelHelpers.extends({}, this.state, {
        show: false
      }));
    }
  }, {
    key: '_onItemPress',
    value: function _onItemPress(item, value) {
      var onSelect = this.state.onSelect;

      onSelect(item, value);

      this.setState(babelHelpers.extends({}, this.state, {
        show: false
      }));
    }
  }, {
    key: '_blur',
    value: function _blur() {
      this.setState(babelHelpers.extends({}, this.state, {
        show: false
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          items = _state.items,
          pageX = _state.pageX,
          pageY = _state.pageY,
          positionX = _state.positionX,
          positionY = _state.positionY,
          width = _state.width,
          height = _state.height,
          show = _state.show;
      var overlayStyles = this.props.overlayStyles;

      return _react2.default.createElement(
        Overlay,
        {
          pageX: pageX,
          pageY: pageY,
          show: show,
          onPress: this._onOverlayPress.bind(this),
          overlayStyles: overlayStyles },
        _react2.default.createElement(Items, {
          items: items,
          positionX: positionX,
          positionY: positionY,
          width: width,
          height: height,
          show: show,
          onPress: this._onItemPress.bind(this) })
      );
    }
  }]);
  return OptionList;
}(_react.Component);

OptionList.propTypes = {};

OptionList.defaultProps = {};

module.exports = OptionList;