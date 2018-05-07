/**
 *
 * @title 选择日期
 * @description 以「日期」为基本单位，基础的日期选择控件
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import moment from "moment";
import Icon from 'bee-icon';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
  // console.log(d);
}



class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  onChange  = d => {
      console.log(d.format(format));
      this.setState({
          value:d
      })
  };
  clear = d => {
      this.setState({
          value:''
      })
  }
  render() {
    var self = this;
    return (
      <div>
        <Row>
          <Col md={8}>
            <DatePicker
              format={format}
              onSelect={onSelect}
              onChange={this.onChange}
              locale={zhCN}
              //defaultValue={this.state.value}
              value={this.state.value}
              placeholder={dateInputPlaceholder}
              autofocus={false}
            />
          </Col>
          <Col md={3}>
              <button className="u-button" onClick={this.clear}>清空</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo1;
