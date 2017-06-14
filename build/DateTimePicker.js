'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TimeView = require('./TimeView'),
    DaysView = require('./DaysView'),
    MonthsView = require('./MonthsView'),
    YearsView = require('./YearsView');

//moment.locale('zh-cn');
var TYPES = _react2["default"].PropTypes;

var propTypes = {
    onFocus: TYPES.func,
    onBlur: TYPES.func,
    onChange: TYPES.func,
    locale: TYPES.string,
    utc: TYPES.bool,
    input: TYPES.bool,
    inputProps: TYPES.object,
    timeConstraints: TYPES.object,
    viewMode: TYPES.oneOf(['years', 'months', 'days', 'time']),
    isValidDate: TYPES.func,
    open: TYPES.bool,
    strictParsing: TYPES.bool,
    closeOnSelect: TYPES.bool,
    closeOnTab: TYPES.bool
};

var nof = function nof() {};
var defaultProps = {
    className: '',
    defaultValue: '',
    inputProps: {},
    input: true,
    onFocus: nof,
    onBlur: nof,
    onChange: nof,
    timeFormat: "hh:mm:ss",
    timeConstraints: {},
    dateFormat: true,
    strictParsing: true,
    closeOnSelect: false,
    closeOnTab: true,
    utc: false
};

var viewComponents = {
    days: DaysView,
    months: MonthsView,
    years: YearsView,
    time: TimeView
};

var allowedSetTime = ['hours', 'minutes', 'seconds', 'milliseconds'];

var componentProps = {
    fromProps: ['value', 'isValidDate', 'renderDay', 'renderMonth', 'renderYear', 'timeConstraints'],
    fromState: ['viewDate', 'selectedDate', 'updateOn'],
    fromThis: ['setDate', 'setTime', 'showView', 'addTime', 'subtractTime', 'updateSelectedDate', 'localMoment']
};

var DateTime = function (_Component) {
    _inherits(DateTime, _Component);

    function DateTime(props, context) {
        _classCallCheck(this, DateTime);

        //this.handleEntering = this.handleEntering.bind(this);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        var state = _this.getStateFromProps(_this.props);

        if (state.open === undefined) state.open = !_this.props.input;

        state.currentView = _this.props.dateFormat ? _this.props.viewMode || state.updateOn || 'days' : 'time';

        _this.showView = _this.showView.bind(_this);
        _this.subtractTime = _this.subtractTime.bind(_this);
        _this.addTime = _this.addTime.bind(_this);
        _this.updateSelectedDate = _this.updateSelectedDate.bind(_this);
        _this.setDate = _this.setDate.bind(_this);
        _this.setTime = _this.setTime.bind(_this);
        _this.openCalendar = _this.openCalendar.bind(_this);
        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.state = state;
        return _this;
    }

    DateTime.prototype.getStateFromProps = function getStateFromProps(props) {
        var formats = this.getFormats(props),
            date = props.value || props.defaultValue,
            selectedDate,
            viewDate,
            updateOn,
            inputValue;

        if (date && typeof date === 'string') selectedDate = this.localMoment(date, formats.datetime);else if (date) selectedDate = this.localMoment(date);

        if (selectedDate && !selectedDate.isValid()) selectedDate = null;

        viewDate = selectedDate ? selectedDate.clone().startOf('month') : this.localMoment().startOf('month');

        updateOn = this.getUpdateOn(formats);

        if (selectedDate) inputValue = selectedDate.format(formats.datetime);else if (date.isValid && !date.isValid()) inputValue = '';else inputValue = date || '';

        return {
            updateOn: updateOn,
            inputFormat: formats.datetime,
            viewDate: viewDate,
            selectedDate: selectedDate,
            inputValue: inputValue,
            open: props.open
        };
    };

    DateTime.prototype.getUpdateOn = function getUpdateOn(formats) {
        if (formats.date.match(/[lLD]/)) {
            return 'days';
        } else if (formats.date.indexOf('M') !== -1) {
            return 'months';
        } else if (formats.date.indexOf('Y') !== -1) {
            return 'years';
        }

        return 'days';
    };

    DateTime.prototype.getFormats = function getFormats(props) {
        var formats = {
            date: props.dateFormat || '',
            time: props.timeFormat || ''
        },
            locale = this.localMoment(props.date).localeData();

        if (formats.date === true) {
            formats.date = locale.longDateFormat('L');
        } else if (this.getUpdateOn(formats) !== 'days') {
            formats.time = '';
        }

        if (formats.time === true) {
            formats.time = locale.longDateFormat('LT');
        }

        formats.datetime = formats.date && formats.time ? formats.date + ' ' + formats.time : formats.date || formats.time;

        return formats;
    };

    DateTime.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var formats = this.getFormats(nextProps),
            update = {};

        if (nextProps.value !== this.props.value || formats.datetime !== this.getFormats(this.props).datetime) {
            update = this.getStateFromProps(nextProps);
        }

        if (update.open === undefined) {
            if (this.props.closeOnSelect && this.state.currentView !== 'time') {
                update.open = false;
            } else {
                update.open = this.state.open;
            }
        }

        this.setState(update);
    };

    DateTime.prototype.onInputChange = function onInputChange(e) {
        var value = e.target === null ? e : e.target.value,
            localMoment = this.localMoment(value, this.state.inputFormat),
            update = { inputValue: value };

        if (localMoment.isValid() && !this.props.value) {
            update.selectedDate = localMoment;
            update.viewDate = localMoment.clone().startOf('month');
        } else {
            update.selectedDate = null;
        }

        return this.setState(update, function () {
            return this.props.onChange(localMoment.isValid() ? localMoment : this.state.inputValue);
        });
    };

    DateTime.prototype.onInputKey = function onInputKey(e) {
        if (e.which === 9 && this.props.closeOnTab) {
            this.closeCalendar();
        }
    };

    DateTime.prototype.showView = function showView(view) {
        var me = this;
        return function () {
            me.setState({ currentView: view });
        };
    };

    DateTime.prototype.setDate = function setDate(type) {
        var me = this,
            nextViews = {
            month: 'days',
            year: 'months'
        };
        return function (e) {
            var dataValue = e.target.getAttribute('data-value') || e.target.parentNode.getAttribute('data-value');
            me.setState({
                viewDate: me.state.viewDate.clone()[type](parseInt(dataValue, 10)).startOf(type),
                currentView: nextViews[type]
            });
        };
    };

    DateTime.prototype.updateTime = function updateTime(op, amount, type, toSelected) {
        var me = this;

        return function () {
            var update = {},
                date = toSelected ? 'selectedDate' : 'viewDate';

            update[date] = me.state[date].clone()[op](amount, type);

            me.setState(update);
        };
    };

    DateTime.prototype.addTime = function addTime(amount, type, toSelected) {

        return this.updateTime('add', amount, type, toSelected);
    };

    DateTime.prototype.subtractTime = function subtractTime(amount, type, toSelected) {
        //console.log(this)
        return this.updateTime('subtract', amount, type, toSelected);
    };

    DateTime.prototype.setTime = function setTime(type, value) {
        var index = allowedSetTime.indexOf(type) + 1,
            state = this.state,
            date = (state.selectedDate || state.viewDate).clone(),
            nextType;

        // It is needed to set all the time properties
        // to not to reset the time
        date[type](value);
        for (; index < allowedSetTime.length; index++) {
            nextType = allowedSetTime[index];
            date[nextType](date[nextType]());
        }

        if (!this.props.value) {
            this.setState({
                selectedDate: date,
                inputValue: date.format(state.inputFormat)
            });
        }
        this.props.onChange(date);
    };

    DateTime.prototype.updateSelectedDate = function updateSelectedDate(e, close) {
        var target = e.target,
            modifier = 0,
            viewDate = this.state.viewDate,
            currentDate = this.state.selectedDate || viewDate,
            date;

        target = target.className.indexOf('cell') !== -1 ? target.parentNode : target;

        if (target.className.indexOf('rdtDay') !== -1) {
            if (target.className.indexOf('rdtNew') !== -1) modifier = 1;else if (target.className.indexOf('rdtOld') !== -1) modifier = -1;

            date = viewDate.clone().month(viewDate.month() + modifier).date(parseInt(target.getAttribute('data-value'), 10));
        } else if (target.className.indexOf('rdtMonth') !== -1) {
            date = viewDate.clone().month(parseInt(target.getAttribute('data-value'), 10)).date(currentDate.date());
        } else if (target.className.indexOf('rdtYear') !== -1) {
            date = viewDate.clone().month(currentDate.month()).date(currentDate.date()).year(parseInt(target.getAttribute('data-value'), 10));
        }

        date.hours(currentDate.hours()).minutes(currentDate.minutes()).seconds(currentDate.seconds()).milliseconds(currentDate.milliseconds());

        if (!this.props.value) {
            this.setState({
                selectedDate: date,
                viewDate: date.clone().startOf('month'),
                inputValue: date.format(this.state.inputFormat),
                open: !(this.props.closeOnSelect && close)
            });
        } else {
            if (this.props.closeOnSelect && close) {
                this.closeCalendar();
            }
        }

        this.props.onChange(date);
    };

    DateTime.prototype.openCalendar = function openCalendar() {
        if (!this.state.open) {
            this.setState({ open: true }, function () {
                this.props.onFocus();
            });
        }
    };

    DateTime.prototype.closeCalendar = function closeCalendar() {
        this.setState({ open: false }, function () {
            this.props.onBlur(this.state.selectedDate || this.state.inputValue);
        });
    };

    DateTime.prototype.handleClickOutside = function handleClickOutside() {
        if (this.props.input && this.state.open && !this.props.open) {
            this.setState({ open: false }, function () {
                this.props.onBlur(this.state.selectedDate || this.state.inputValue);
            });
        }
    };

    DateTime.prototype.localMoment = function localMoment(date, format) {
        var momentFn = this.props.utc ? _moment2["default"].utc : _moment2["default"];
        var m = momentFn(date, format, this.props.strictParsing);
        if (this.props.locale) m.locale(this.props.locale);
        return m;
    };

    DateTime.prototype.getComponentProps = function getComponentProps() {
        var me = this,
            formats = this.getFormats(this.props),
            props = { dateFormat: formats.date, timeFormat: formats.time };

        componentProps.fromProps.forEach(function (name) {
            props[name] = me.props[name];
        });
        componentProps.fromState.forEach(function (name) {
            props[name] = me.state[name];
        });
        componentProps.fromThis.forEach(function (name) {
            props[name] = me[name];
        });

        return props;
    };

    DateTime.prototype.render = function render() {

        var Component = viewComponents[this.state.currentView],
            DOM = _react2["default"].DOM,
            className = 'date-time-picker' + (this.props.className ? Array.isArray(this.props.className) ? ' ' + this.props.className.join(' ') : ' ' + this.props.className : ''),
            children = [];

        if (this.props.input) {
            children = [DOM.input((0, _objectAssign2["default"])({
                key: 'i',
                type: 'text',
                className: 'u-form-control',
                onFocus: this.openCalendar,
                onChange: this.onInputChange,
                onKeyDown: this.onInputKey,
                value: this.state.inputValue
            }, this.props.inputProps))];
        } else {
            className += ' rdtStatic';
        }

        if (this.state.open) className += ' rdtOpen';

        return DOM.div({ className: className }, children.concat(DOM.div({ key: 'dt', className: 'rdtPicker' }, _react2["default"].createElement(Component, this.getComponentProps()))));
    };

    return DateTime;
}(_react.Component);

var DateTimePicker = (0, _reactOnclickoutside2["default"])(DateTime);

// Make moment accessible through the Datetime class
DateTimePicker.moment = _moment2["default"];

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

exports["default"] = DateTimePicker;
module.exports = exports['default'];