'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _en_US = require('rc-calendar/lib/locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

require('moment/locale/en-gb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var format = 'YYYY-MM-DD';

var fullFormat = 'YYYY-MM-DD';

var cn = location.search.indexOf('cn') !== -1;

var now = (0, _moment2["default"])();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

var Picker = function (_Component) {
    _inherits(Picker, _Component);

    function Picker(props, context) {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.onHoverChange = function (hoverValue) {

            _this.setState({ hoverValue: hoverValue });
        };

        _this.state = {
            hoverValue: []
        };
        return _this;
    }

    Picker.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var showValue = props.showValue;

        var calendar = _react2["default"].createElement(_RangeCalendar2["default"], {
            hoverValue: this.state.hoverValue,
            onHoverChange: this.onHoverChange,
            type: this.props.type,
            locale: cn ? _zh_CN2["default"] : _en_US2["default"],
            defaultValue: now,
            format: format,
            onChange: props.onChange,
            disabledDate: props.disabledDate
        });

        return _react2["default"].createElement(
            _Picker2["default"],
            {
                open: this.props.open,
                onOpenChange: this.props.onOpenChange,
                calendar: calendar,
                value: props.value
            },
            function () {
                return _react2["default"].createElement(
                    'span',
                    null,
                    _react2["default"].createElement(_beeFormControl2["default"], {
                        placeholder: _this2.props.placeholder,

                        value: showValue && showValue.format(fullFormat) || ''
                    })
                );
            }
        );
    };

    return Picker;
}(_react.Component);

var RangePicker = function (_Component2) {
    _inherits(RangePicker, _Component2);

    function RangePicker(props, context) {
        _classCallCheck(this, RangePicker);

        var _this3 = _possibleConstructorReturn(this, _Component2.call(this, props, context));

        _this3.onStartOpenChange = function (startOpen) {
            _this3.setState({
                startOpen: startOpen
            });
        };

        _this3.onEndOpenChange = function (endOpen) {
            _this3.setState({
                endOpen: endOpen
            });
        };

        _this3.onStartChange = function (value) {
            _this3.setState({
                startValue: value[0],
                startOpen: false,
                endOpen: true
            });
        };

        _this3.onEndChange = function (value) {
            _this3.setState({
                endValue: value[1]
            });
        };

        _this3.disabledStartDate = function (endValue) {
            if (!endValue) {
                return false;
            }
            var startValue = _this3.state.startValue;
            if (!startValue) {
                return false;
            }
            return endValue.diff(startValue, 'days') < 0;
        };

        _this3.state = {
            startValue: null,
            endValue: null,
            startOpen: false,
            endOpen: false
        };
        return _this3;
    }

    RangePicker.prototype.render = function render() {
        var state = this.state;
        return _react2["default"].createElement(
            'div',
            null,
            '\u5F00\u59CB\u65F6\u95F4\uFF1A',
            _react2["default"].createElement(Picker, {
                onOpenChange: this.onStartOpenChange,
                type: 'start',
                showValue: state.startValue,
                open: this.state.startOpen,
                value: [state.startValue, state.endValue],
                onChange: this.onStartChange,
                placeholder: this.props.placeholder
            }),
            '\u7ED3\u675F\u65F6\u95F4\uFF1A',
            _react2["default"].createElement(Picker, {
                onOpenChange: this.onEndOpenChange,
                open: this.state.endOpen,
                type: 'end',
                showValue: state.endValue,
                disabledDate: this.disabledStartDate,
                value: [state.startValue, state.endValue],
                onChange: this.onEndChange,
                placeholder: this.props.placeholder
            })
        );
    };

    return RangePicker;
}(_react.Component);

exports["default"] = RangePicker;
module.exports = exports['default'];