"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _RangeCalendar = require("rc-calendar/lib/RangeCalendar");

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Picker = require("rc-calendar/lib/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _zh_CN = require("rc-calendar/lib/locale/zh_CN");

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _en_US = require("rc-calendar/lib/locale/en_US");

var _en_US2 = _interopRequireDefault(_en_US);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment/locale/zh-cn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var classNames = require('classnames');

function format(v) {
    return v ? v.format(formatStr) : '';
}
var formatStr = 'YYYY-MM-DD';

var fullFormat = "YYYY-MM-DD";

var cn = location.search.indexOf("cn") !== -1;

var now = (0, _moment2["default"])();

function isValidRange(v) {
    return v && v[0] && v[1];
}

if (cn) {
    now.locale("zh-cn").utcOffset(8);
} else {
    now.locale("en-gb").utcOffset(0);
}

var Picker = function (_Component) {
    _inherits(Picker, _Component);

    function Picker(props, context) {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.onChange = function (value) {
            //console.log('onChange', value);
            _this.setState({ value: value });
        };

        _this.onHoverChange = function (hoverValue) {
            _this.setState({ hoverValue: hoverValue });
        };

        _this.remove = function (e) {
            console.log(e);
            _this.setState({ value: '' });
        };

        _this.state = {
            hoverValue: [],
            value: props.defaultValue || []
        };
        return _this;
    }

    Picker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.defaultValue || []
        });
    };

    Picker.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var showValue = props.showValue,
            value = props.value;

        var calendar = _react2["default"].createElement(_RangeCalendar2["default"], _extends({}, props, {
            hoverValue: this.state.hoverValue,
            onHoverChange: this.onHoverChange,
            showWeekNumber: false,
            format: formatStr,
            dateInputPlaceholder: props.dateInputPlaceholder || ['start', 'end'],
            defaultValue: [now, now.clone().add(1, 'months')],
            locale: props.locale || _zh_CN2["default"],
            onChange: props.onChange,
            disabledDate: props.disabledDate
        }));

        return _react2["default"].createElement(
            _Picker2["default"],
            _extends({}, props, {
                value: this.state.value,
                onChange: this.onChange,
                animation: "slide-up",
                calendar: calendar
            }),
            function (_ref) {
                var value = _ref.value;

                return _react2["default"].createElement(
                    "div",
                    { className: classNames('calendar-picker', 'u-input-group', 'simple', props.className) },
                    _react2["default"].createElement(_beeFormControl2["default"], {
                        placeholder: _this2.props.placeholder ? _this2.props.placeholder : 'start ~ end',
                        value: isValidRange(value) && format(value[0]) + " ~ " + format(value[1]) || ''
                    })
                );
            }
        );
    };

    return Picker;
}(_react.Component);

exports["default"] = Picker;
module.exports = exports["default"];