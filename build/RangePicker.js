'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

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

/**
 * Created by chief on 17/4/6.
 */

var format = 'YYYY-MM-DD';

var fullFormat = 'YYYY-MM-DD';

var cn = navigator.browserLanguage ? navigator.browserLanguage : navigator.language.indexOf('zh') > -1;

var now = (0, _moment2["default"])();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

var Picker = _react2["default"].createClass({
    displayName: 'Picker',
    getInitialState: function getInitialState() {
        return {
            hoverValue: []
        };
    },
    onHoverChange: function onHoverChange(hoverValue) {
        console.log(hoverValue);
        this.setState({ hoverValue: hoverValue });
    },
    render: function render() {
        var _this = this;

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
                        placeholder: _this.props.placeholder,

                        value: showValue && showValue.format(fullFormat) || ''
                    })
                );
            }
        );
    }
});

var RangePicker = _react2["default"].createClass({
    displayName: 'RangePicker',
    getInitialState: function getInitialState() {
        return {
            startValue: null,
            endValue: null,
            startOpen: false,
            endOpen: false
        };
    },
    onStartOpenChange: function onStartOpenChange(startOpen) {
        this.setState({
            startOpen: startOpen
        });
    },
    onEndOpenChange: function onEndOpenChange(endOpen) {
        this.setState({
            endOpen: endOpen
        });
    },
    onStartChange: function onStartChange(value) {
        this.setState({
            startValue: value[0],
            startOpen: false,
            endOpen: true
        });
    },
    onEndChange: function onEndChange(value) {
        this.setState({
            endValue: value[1]
        });
    },
    disabledStartDate: function disabledStartDate(endValue) {
        if (!endValue) {
            return false;
        }
        var startValue = this.state.startValue;
        if (!startValue) {
            return false;
        }
        return endValue.diff(startValue, 'days') < 0;
    },
    render: function render() {
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
    }
});

exports["default"] = RangePicker;
module.exports = exports['default'];