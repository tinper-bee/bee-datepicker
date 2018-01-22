/**
 *
 * @title 选择日期时间
 * @description 以「日期时间」为基本单位，可以选择日期和时间
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import moment from "moment";

const format = "YYYY-MM-DD HH:mm:ss";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
  console.log(d);
}

function onChange(d) {
  console.log(d);
}

class Demo6 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <DatePicker
              format={format}
              showTime={true}
              onSelect={onSelect}
              onChange={onChange}
              locale={zhCN}
              defaultValue={moment()}
              placeholder={dateInputPlaceholder}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo6;
