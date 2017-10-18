'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
  type: _propTypes2["default"].string,
  size: _propTypes2["default"].oneOf(['sm', 'md', 'lg']),
  id: _propTypes2["default"].string
};

var defaultProps = {
  componentClass: 'input',
  clsPrefix: 'u-form-control',
  type: 'text',
  size: 'md'
};

var FormControl = function (_React$Component) {
  _inherits(FormControl, _React$Component);

  function FormControl(props) {
    _classCallCheck(this, FormControl);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onChange = function (e) {
      var value = e.target.value;
      var onChange = _this.props.onChange;

      _this.setState(_defineProperty({ value: value, showSearch: false }, 'showSearch', value == ""));
      if (onChange) {
        onChange(value);
      }
    };

    _this.clearValue = function () {
      _this.setState({ showSearch: true });
    };

    _this.state = {
      showSearch: true,
      value: props.value || ""
    };
    _this.input = {};
    return _this;
  }

  FormControl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProp) {
    if (nextProp.value !== this.state.value) {
      this.setState({ value: nextProp.value });
    }
  };

  FormControl.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        Component = _props.componentClass,
        type = _props.type,
        id = _props.id,
        className = _props.className,
        size = _props.size,
        clsPrefix = _props.clsPrefix,
        others = _objectWithoutProperties(_props, ['componentClass', 'type', 'id', 'className', 'size', 'clsPrefix']);
    // input[type="file"] 不应该有类名 .form-control.


    var classes = {};
    if (size) {
      classes['' + size] = true;
    }
    if (type == "search") {
      classes['u-input-search'] = true;
    }

    var classNames = void 0;
    if (type !== 'file') {
      classNames = (0, _classnames2["default"])(clsPrefix, classes);
    }

    if (type == "search") {

      return _react2["default"].createElement(
        'span',
        { className: 'u-input-search u-input-affix-wrapper' },
        _react2["default"].createElement(Component, _extends({}, others, {
          type: type,
          onChange: this.onChange,
          value: this.state.value,
          id: id,
          className: (0, _classnames2["default"])(className, classNames)
        })),
        _react2["default"].createElement(
          'span',
          { className: 'u-input-suffix' },
          this.state.showSearch && _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search' }),
          !this.state.showSearch && _react2["default"].createElement(_beeIcon2["default"], { onClick: this.clearValue, type: 'uf-close-c' })
        )
      );
    }

    return _react2["default"].createElement(Component, _extends({}, others, {
      type: type,
      id: id,
      ref: function ref(el) {
        return _this2.input = el;
      },
      value: this.state.value,
      onChange: this.onChange,
      className: (0, _classnames2["default"])(className, classNames)
    }));
  };

  return FormControl;
}(_react2["default"].Component);

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

exports["default"] = FormControl;
module.exports = exports['default'];