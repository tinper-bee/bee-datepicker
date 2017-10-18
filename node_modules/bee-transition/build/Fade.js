'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = require('./Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  "in": _propTypes2["default"].bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: _propTypes2["default"].bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _propTypes2["default"].bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: _propTypes2["default"].number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: _propTypes2["default"].func,
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: _propTypes2["default"].func,
  /**
   * Callback fired after the has component faded in
   */
  onEntered: _propTypes2["default"].func,
  /**
   * Callback fired before the component fades out
   */
  onExit: _propTypes2["default"].func,
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: _propTypes2["default"].func,
  /**
   * Callback fired after the component has faded out
   */
  onExited: _propTypes2["default"].func
};

var defaultProps = {
  "in": false,
  timeout: 300,
  unmountOnExit: false,
  transitionAppear: false
};

var Fade = function (_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade() {
    _classCallCheck(this, Fade);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Fade.prototype.render = function render() {
    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
      className: (0, _classnames2["default"])(this.props.className, 'fade'),
      enteredClassName: 'in',
      enteringClassName: 'in'
    }));
  };

  return Fade;
}(_react2["default"].Component);

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

exports["default"] = Fade;
module.exports = exports['default'];