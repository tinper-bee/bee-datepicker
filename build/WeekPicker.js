'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

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

var cn = location.search.indexOf('cn') !== -1;

var now = (0, _moment2["default"])();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

var format = 'YYYY-Wo';

var style = '\n.week-calendar {\n  width: 386px;\n}\n.week-calendar .rc-calendar-tbody > tr:hover\n.rc-calendar-date {\n  background: #ebfaff;\n}\n\n.week-calendar .rc-calendar-tbody > tr:hover\n.rc-calendar-selected-day .rc-calendar-date {\n    background: #3fc7fa;\n}\n\n.week-calendar .week-calendar-sidebar {\n  position:absolute;\n  top:0;\n  left:0;\n  bottom:0;\n  width:100px;\n  border-right: 1px solid #ccc;\n}\n.week-calendar .rc-calendar-panel {\n  margin-left: 100px;\n}\n';

var WeekPicker = function (_Component) {
    _inherits(WeekPicker, _Component);

    function WeekPicker(props, context) {
        _classCallCheck(this, WeekPicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.state = {
            value: undefined,
            open: false
        };
        return _this;
    }

    WeekPicker.prototype.onChange = function onChange(value) {
        //console.log('DatePicker change: ', (value && value.format(format)));
        this.setState({
            value: value
        });
    };

    WeekPicker.prototype.onOpenChange = function onOpenChange(open) {
        this.setState({
            open: open
        });
    };

    WeekPicker.prototype.dateRender = function dateRender(current) {
        var selectedValue = this.state.value;
        if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
            return _react2["default"].createElement(
                'div',
                { className: 'rc-calendar-selected-day' },
                _react2["default"].createElement(
                    'div',
                    { className: 'rc-calendar-date' },
                    current.date()
                )
            );
        }
        return _react2["default"].createElement(
            'div',
            { className: 'rc-calendar-date' },
            current.date()
        );
    };

    WeekPicker.prototype.lastWeek = function lastWeek() {
        var value = this.state.value || now;
        value.add(-1, 'weeks');
        this.setState({
            value: value,
            open: false
        });
    };

    WeekPicker.prototype.renderSidebar = function renderSidebar() {
        return _react2["default"].createElement(
            'div',
            { className: 'week-calendar-sidebar', key: 'sidebar' },
            _react2["default"].createElement(
                _beeButton2["default"],
                { onClick: this.lastWeek.bind(this), size: 'sm', colors: 'primary', style: { margin: 8 } },
                '\u4E0A\u4E00\u5468'
            )
        );
    };

    WeekPicker.prototype.onTypeChange = function onTypeChange(type) {
        this.setState({
            type: type
        });
    };

    WeekPicker.prototype.render = function render() {
        var _this2 = this;

        var state = this.state;
        var calendar = _react2["default"].createElement(_rcCalendar2["default"], {
            className: 'week-calendar',
            showWeekNumber: true,
            renderSidebar: this.renderSidebar.bind(this),
            dateRender: this.dateRender.bind(this),
            locale: cn ? _zh_CN2["default"] : _en_US2["default"],
            format: format,
            dateInputPlaceholder: this.props.placeholder,
            defaultValue: now,
            showDateInput: true
        });
        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
            _react2["default"].createElement(
                _Picker2["default"],
                {
                    onOpenChange: this.onOpenChange.bind(this),
                    open: this.state.open,
                    animation: 'slide-up',
                    calendar: calendar,
                    value: state.value,
                    onChange: this.onChange.bind(this)
                },
                function (_ref) {
                    var value = _ref.value;

                    return _react2["default"].createElement(_beeFormControl2["default"], {
                        placeholder: _this2.props.placeholder,
                        disabled: state.disabled,
                        readOnly: true,
                        tabIndex: '-1',
                        className: _this2.props.className,
                        value: value && value.format(format) || ''
                    });
                }
            )
        );
    };

    return WeekPicker;
}(_react.Component);

exports["default"] = WeekPicker;
module.exports = exports['default'];