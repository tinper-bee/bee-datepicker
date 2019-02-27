"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rcCalendar = require("rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Picker = require("rc-calendar/lib/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _zh_CN = require("rc-calendar/lib/locale/zh_CN");

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _en_US = require("rc-calendar/lib/locale/en_US");

var _en_US2 = _interopRequireDefault(_en_US);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment/locale/zh-cn");

require("moment/locale/en-gb");

var _YearPicker = require("./YearPicker");

var _YearPicker2 = _interopRequireDefault(_YearPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cn = location.search.indexOf("cn") !== -1;

var now = (0, _moment2["default"])();
if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

var format = "YYYY-Wo";

var style = "\n.week-calendar {\n  width: 386px;\n}\n.week-calendar .rc-calendar-tbody > tr:hover\n.rc-calendar-date {\n  background: #ebfaff;\n}\n\n.week-calendar .rc-calendar-tbody > tr:hover\n.rc-calendar-selected-day .rc-calendar-date {\n    background: #3fc7fa;\n}\n\n.week-calendar .week-calendar-sidebar {\n  position:absolute;\n  top:0;\n  left:0;\n  bottom:0;\n  width:100px;\n  border-right: 1px solid #ccc;\n}\n.week-calendar .rc-calendar-panel {\n  margin-left: 100px;\n}\n";

var WeekPicker = function (_Component) {
  _inherits(WeekPicker, _Component);

  function WeekPicker(props, context) {
    _classCallCheck(this, WeekPicker);

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

    _this.dateRender = function (current) {
      var selectedValue = _this.state.value;
      if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
        return _react2["default"].createElement(
          "div",
          { className: "rc-calendar-selected-day" },
          _react2["default"].createElement(
            "div",
            { className: "rc-calendar-date" },
            current.date()
          )
        );
      }
      return _react2["default"].createElement(
        "div",
        { className: "rc-calendar-date" },
        current.date()
      );
    };

    _this.lastWeek = function () {
      var value = _this.props.value || now;
      value.add(-1, "weeks");
      _this.setState({
        value: value,
        open: false
      });
    };

    _this.nextWeek = function () {
      var value = _this.props.value || now;
      value.add(+1, "weeks");
      _this.setState({
        value: value,
        open: false
      });
    };

    _this.renderSidebar = function () {
      return _react2["default"].createElement(
        "div",
        { className: "week-calendar-sidebar", key: "sidebar" },
        _react2["default"].createElement(
          "button",
          {
            className: "week-calendar-sidebar-button",
            onClick: _this.lastWeek.bind(_this),
            style: { margin: 8 }
          },
          "\u4E0A\u4E00\u5468"
        ),
        _react2["default"].createElement(
          "button",
          {
            className: "week-calendar-sidebar-button",
            onClick: _this.nextWeek.bind(_this),
            style: { margin: 8 }
          },
          "\u4E0B\u4E00\u5468"
        )
      );
    };

    _this.onTypeChange = function (type) {
      _this.setState({
        type: type
      });
    };

    _this.handleCalendarChange = function (value) {
      _this.setState({ value: value });
    };

    _this.state = {
      value: props.value || props.defaultValue,
      open: false
    };
    return _this;
  }

  WeekPicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;
    var props = this.props;
    var value = state.value;
    var calendar = _react2["default"].createElement(_rcCalendar2["default"], {
      className: "week-calendar",
      showWeekNumber: true,
      renderSidebar: this.renderSidebar,
      dateRender: this.dateRender,
      locale: cn ? _zh_CN2["default"] : _en_US2["default"],
      format: format,
      dateInputPlaceholder: this.props.placeholder,
      defaultValue: now,
      showDateInput: true,
      onChange: this.handleCalendarChange
    });
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
      _react2["default"].createElement(
        _Picker2["default"],
        _extends({
          animation: "slide-up"
        }, props, {
          onOpenChange: this.onOpenChange,
          open: this.state.open,
          calendar: calendar,
          value: state.value
        }),
        function (_ref) {
          _objectDestructuringEmpty(_ref);

          return _react2["default"].createElement(
            _beeInputGroup2["default"],
            { simple: true, className: "datepicker-input-group" },
            _react2["default"].createElement(_beeFormControl2["default"], {
              placeholder: _this2.props.placeholder,
              disabled: state.disabled,
              readOnly: true,
              tabIndex: "-1",
              className: _this2.props.className,
              value: value && value.format(format) || ""
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

  return WeekPicker;
}(_react.Component);

WeekPicker.defaultProps = {
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  }
};

exports["default"] = WeekPicker;
module.exports = exports["default"];