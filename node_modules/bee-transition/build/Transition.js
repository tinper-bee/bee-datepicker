'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _properties = require('dom-helpers/transition/properties');

var _properties2 = _interopRequireDefault(_properties);

var _on = require('dom-helpers/events/on');

var _on2 = _interopRequireDefault(_on);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var transitionEndEvent = _properties2["default"].end;

//设置状态码
var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

var propTypes = {
  /**
   * 是否触发动画
   */
  "in": _propTypes2["default"].bool,

  /**
   * 不显示的时候是否移除组件
   */
  unmountOnExit: _propTypes2["default"].bool,

  /**
   * 如果设置为默认显示，挂载时显示动画
   */
  transitionAppear: _propTypes2["default"].bool,

  /**
   * 设置超时时间，防止出现问题，可设置为>=动画时间
   */
  timeout: _propTypes2["default"].number,

  /**
   * 退出组件时添加的class
   */
  exitedClassName: _propTypes2["default"].string,
  /**
   * 退出组件中添加的class
   */
  exitingClassName: _propTypes2["default"].string,
  /**
   * 进入动画后添加的class
   */
  enteredClassName: _propTypes2["default"].string,
  /**
   * 进入动画时添加的class
   */
  enteringClassName: _propTypes2["default"].string,

  /**
   * 进入动画开始时的钩子函数
   */
  onEnter: _propTypes2["default"].func,
  /**
   * 进入动画中的钩子函数
   */
  onEntering: _propTypes2["default"].func,
  /**
   * 进入动画后的钩子函数
   */
  onEntered: _propTypes2["default"].func,
  /**
   * 退出动画开始时的钩子函数
   */
  onExit: _propTypes2["default"].func,
  /**
   * 退出动画中的钩子函数
   */
  onExiting: _propTypes2["default"].func,
  /**
   * 退出动画后的钩子函数
   */
  onExited: _propTypes2["default"].func
};

function noop() {}

var defaultProps = {
  "in": false,
  unmountOnExit: false,
  transitionAppear: false,
  timeout: 5000,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};

/**
 * 动画组件
 */

var Transition = function (_Component) {
  _inherits(Transition, _Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    var initialStatus = void 0;
    if (props["in"]) {
      // 在componentdidmount时开始执行动画
      initialStatus = props.transitionAppear ? EXITED : ENTERED;
    } else {
      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
    }
    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.componentDidMount = function componentDidMount() {
    if (this.props.transitionAppear && this.props["in"]) {
      this.performEnter(this.props);
    }
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps["in"] && this.props.unmountOnExit) {
      if (this.state.status === UNMOUNTED) {
        // 在componentDidUpdate执行动画.
        this.setState({ status: EXITED });
      }
    } else {
      this._needsUpdate = true;
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    var status = this.state.status;

    if (this.props.unmountOnExit && status === EXITED) {
      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
      if (this.props["in"]) {
        this.performEnter(this.props);
      } else {
        this.setState({ status: UNMOUNTED });
      }

      return;
    }

    // 确保只响应prop变化
    if (this._needsUpdate) {
      this._needsUpdate = false;

      if (this.props["in"]) {
        if (status === EXITING) {
          this.performEnter(this.props);
        } else if (status === EXITED) {
          this.performEnter(this.props);
        }
        // 其他，当我们已经输入或输出
      } else {
        if (status === ENTERING || status === ENTERED) {
          this.performExit(this.props);
        }
        // 我们已经输入或输出完成
      }
    }
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.performEnter = function performEnter(props) {
    var _this2 = this;

    this.cancelNextCallback();
    var node = _reactDom2["default"].findDOMNode(this);

    // 这里接收新props
    props.onEnter(node);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node);

      _this2.onTransitionEnd(node, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(props) {
    var _this3 = this;

    this.cancelNextCallback();
    var node = _reactDom2["default"].findDOMNode(this);

    props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    // 确保在组件销毁后挂起的setState被消除
    this.setState(nextState, this.setNextCallback(callback));
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (transitionEndEvent == undefined) {
        this.nextCallback();
      } else {
        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
      }
      setTimeout(this.nextCallback, this.props.timeout);
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        childProps = _objectWithoutProperties(_props, ['children', 'className']);

    Object.keys(Transition.propTypes).forEach(function (key) {
      return delete childProps[key];
    });

    var transitionClassName = void 0;
    if (status === EXITED) {
      transitionClassName = this.props.exitedClassName;
    } else if (status === ENTERING) {
      transitionClassName = this.props.enteringClassName;
    } else if (status === ENTERED) {
      transitionClassName = this.props.enteredClassName;
    } else if (status === EXITING) {
      transitionClassName = this.props.exitingClassName;
    }

    var child = _react2["default"].Children.only(children);
    return _react2["default"].cloneElement(child, _extends({}, childProps, {
      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
    }));
  };

  return Transition;
}(_react.Component);

Transition.propTypes = propTypes;

Transition.defaultProps = defaultProps;

exports["default"] = Transition;