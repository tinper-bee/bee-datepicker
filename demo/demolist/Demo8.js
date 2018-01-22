/**
 *
 * @title 不可选择日期和时间
 * @description 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import moment from "moment";

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
  console.log(d);
}

function onChange(d) {
  console.log(d);
}

function disabledDate(current) {
  return current && current.valueOf() < Date.now();
}

class Demo7 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <DatePicker
              format={format}
              onSelect={onSelect}
              onChange={onChange}
              locale={zhCN}
              disabledDate={disabledDate}
              defaultValue={moment()}
              placeholder={dateInputPlaceholder}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo7;
