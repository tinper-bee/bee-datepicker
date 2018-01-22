/**
 *
 * @title 禁用日期
 * @description 禁用日期
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import moment from "moment";

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
  console.log(d);
}

function onChange(d) {
  console.log(d);
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
              defaultValue={moment()}
              placeholder={dateInputPlaceholder}
              disabled={true}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo7;
