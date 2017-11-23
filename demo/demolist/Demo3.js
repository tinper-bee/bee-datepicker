/**
 *
 * @title 日期范围
 * @description 以「日期范围」为基本单位，基础的日期范围选择控件
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

const { RangePicker } = DatePicker;

const format3 = "YYYY-MM-DD";

function onSelect(d) {
  console.log(d);
}

function onChange(d) {
  console.log(d);
}

class Demo3 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <RangePicker
              format={format3}
              onSelect={onSelect}
              onChange={onChange}
              locale={zhCN}
              placeholder={"选择开始年月"}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo3;
