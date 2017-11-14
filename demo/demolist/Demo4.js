/**
 *
 * @title 动态的改变时间
 * @description 以「日期时间」为基本单位，基础的日期时间选择控件
 */

import React, { Component } from "react";
import DatePicker from "../../src";
import moment from "moment";
import zhCN from "rc-calendar/lib/locale/zh_CN";

const format = "YYYY-MM-DD HH:mm:ss";
const dateInputPlaceholder = "选择日期";

function onSelect(d) {
  console.log(d);
}

function onChange(d) {
  console.log(d);
}
class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment()
    };
  }

  handleChange = value => {
    console.log(value);
  };

  handlerChangeDate = () => {
    this.setState({
      value: moment('2011-11-11 11:11:11')
    });
    console.log("click");
  };
  render() {
    return (
      <div>
        <button onClick={this.handlerChangeDate}>变</button>
        <DatePicker
          format={format}
          locale={zhCN}
          onSelect={onSelect}
          onChange={onChange}
          value={this.state.value}
          placeholder={dateInputPlaceholder}
        />
      </div>
    );
  }
}

export default Demo4;
