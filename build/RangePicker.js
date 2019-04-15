"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _RangeCalendar = require("./rc-calendar/RangeCalendar");

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Picker = require("./rc-calendar/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _zh_CN = require("./locale/zh_CN");

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment/locale/zh-cn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function format(v, f) {
    return v ? v.format && v.format(f) : '';
}

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

var RangePicker = function (_Component) {
    _inherits(RangePicker, _Component);

    function RangePicker(props, context) {
        _classCallCheck(this, RangePicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        _this.state = {
            hoverValue: [],
            value: props.value || props.defaultValue || []
        };
        return _this;
    }

    RangePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ("value" in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
        this.setState({
            renderIcon: nextProps.renderIcon
        });
    };

    RangePicker.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var showValue = props.showValue;
        var value = this.state.value;

        var formatStr = props.format || 'YYYY-MM-DD';

        var calendar = _react2["default"].createElement(_RangeCalendar2["default"], {
            hoverValue: this.state.hoverValue,
            onHoverChange: this.onHoverChange,
            showWeekNumber: false,
            format: formatStr,
            dateInputPlaceholder: props.dateInputPlaceholder || ['start', 'end'],
            locale: props.locale || _zh_CN2["default"],
            onChange: this.onChange,
            disabledDate: props.disabledDate,
            showClear: props.showClear || false,
            showOk: props.showOk || true,
            renderFooter: props.renderFooter,
            selectedValue: this.state.value
        });

        return _react2["default"].createElement(
            _Picker2["default"],
            {
                value: this.state.value,
                animation: 'animation' in props ? props.animation : "slide-up",
                calendar: calendar,
                disabled: props.disabled,
                onOpenChange: this.onOpenChange
            },
            function (_ref) {
                _objectDestructuringEmpty(_ref);

                return _react2["default"].createElement(
                    "div",
                    { className: (0, _classnames2["default"])('calendar-picker', 'u-input-group', 'simple', props.className),
                        onMouseEnter: _this2.onMouseEnter,
                        onMouseLeave: _this2.onMouseLeave
                    },
                    _react2["default"].createElement(_beeFormControl2["default"], {
                        placeholder: _this2.props.placeholder ? _this2.props.placeholder : 'start ~ end',
                        value: isValidRange(value) && format(value[0], formatStr) + " ~ " + format(value[1], formatStr) || '',
                        disabled: props.disabled
                    }),
                    _this2.state.value && _this2.state.showClose && !props.disabled ? _react2["default"].createElement(
                        _beeInputGroup2["default"].Button,
                        { shape: "border",
                            onClick: _this2.clear },
                        _react2["default"].createElement("i", { className: "uf uf-close-c" })
                    ) : _react2["default"].createElement(
                        _beeInputGroup2["default"].Button,
                        { shape: "border" },
                        props.renderIcon()
                    )
                );
            }
        );
    };

    return RangePicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onChange = function (value) {
        var props = _this3.props;
        var formatStr = props.format || 'YYYY-MM-DD';
        _this3.setState({
            value: value
        });

        //传入value和dateString
        if (props.onChange && isValidRange(value) || value.length == 0) {
            if (value.length > 0) {
                props.onChange(value, "[\"" + format(value[0], formatStr) + "\" , \"" + format(value[1], formatStr) + "\"]");
            } else {
                props.onChange(null);
            }
        }
    };

    this.onHoverChange = function (hoverValue) {
        _this3.setState({ hoverValue: hoverValue });
    };

    this.remove = function (e) {
        _this3.setState({ value: '' });
    };

    this.handleCalendarChange = function (value) {};

    this.onMouseLeave = function (e) {
        _this3.setState({
            showClose: false
        });
    };

    this.onMouseEnter = function (e) {
        _this3.setState({
            showClose: true
        });
    };

    this.clear = function (e) {
        e.stopPropagation();
        _this3.setState({
            value: [],
            hoverValue: []
        });
        _this3.props.onChange && _this3.props.onChange('', '');
    };

    this.inputFocus = function () {
        var input = document.querySelector('.rc-calendar-input');
        if (input) {
            if (input.value) {
                input.select();
            } else {
                input.focus();
            }
        }
    };

    this.onOpenChange = function (open) {
        if (open) {
            setTimeout(function () {
                _this3.inputFocus();
            }, 300);
        }
    };
};

RangePicker.defaultProps = {
    renderIcon: function renderIcon() {
        return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
    },
    locale: _zh_CN2["default"]
};

exports["default"] = RangePicker;
module.exports = exports["default"];