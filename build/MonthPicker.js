"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MonthCalendar = require("rc-calendar/lib/MonthCalendar");

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Picker = require("rc-calendar/lib/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MonthPicker = function (_Component) {
  _inherits(MonthPicker, _Component);

  function MonthPicker(props, context) {
    _classCallCheck(this, MonthPicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.onChange = function (value) {
      _this.setState({
        value: value
      });
    };

    _this.onOpenChange = function (open) {
      _this.setState({
        open: open
      });
    };

    _this.onTypeChange = function (type) {
      _this.setState({
        type: type
      });
    };

    _this.state = {
      type: "month",
      value: props.value || props.defaultValue,
      open: false
    };
    return _this;
  }

  MonthPicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;

    var props = this.props;

    var monthCalendar = _react2["default"].createElement(_MonthCalendar2["default"], props);

    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(
        _Picker2["default"],
        {
          onOpenChange: this.onOpenChange,
          animation: 'animation' in props ? props.animation : "slide-up",
          calendar: monthCalendar,
          open: this.state.open,
          value: state.value,
          onChange: this.onChange
        },
        function (_ref) {
          var value = _ref.value;

          return _react2["default"].createElement(
            _beeInputGroup2["default"],
            { simple: true, className: "datepicker-input-group" },
            _react2["default"].createElement(_beeFormControl2["default"], {
              placeholder: _this2.props.placeholder,
              className: _this2.props.className,
              value: value && value.format(props.format) || ""
            }),
            _react2["default"].createElement(
              _beeInputGroup2["default"].Button,
              { shape: "border" },
              props.renderIcon()
            )
          );
        }
      )
    );
  };

  return MonthPicker;
}(_react.Component);

MonthPicker.defaultProps = {
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  }
};

exports["default"] = MonthPicker;
module.exports = exports["default"];