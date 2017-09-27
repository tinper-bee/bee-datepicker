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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DatePicker = function (_Component) {
    _inherits(DatePicker, _Component);

    function DatePicker(props, context) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.state = {
            type: 'month',
            value: undefined,
            open: false
        };
        return _this;
    }

    DatePicker.prototype.onChange = function onChange(value) {
        this.setState({
            value: value
        });
    };

    DatePicker.prototype.onOpenChange = function onOpenChange(open) {
        this.setState({
            open: open
        });
    };

    DatePicker.prototype.render = function render() {
        var _this2 = this;

        var state = this.state;

        var props = this.props;

        var calendar = _react2["default"].createElement(_rcCalendar2["default"], props);

        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
                _Picker2["default"],
                {

                    onOpenChange: this.onOpenChange.bind(this),

                    animation: 'slide-up',

                    calendar: calendar,

                    open: this.state.open,

                    value: props.value,

                    onChange: this.onChange.bind(this)

                },
                function (_ref) {
                    var value = _ref.value;

                    return _react2["default"].createElement(_beeFormControl2["default"], {

                        placeholder: _this2.props.placeholder,

                        className: _this2.props.className,

                        value: value && value.format(props.format) || ''
                    });
                }
            )
        );
    };

    return DatePicker;
}(_react.Component);

exports["default"] = DatePicker;
module.exports = exports['default'];