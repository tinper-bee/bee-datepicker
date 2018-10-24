/**
 *
 * @title 选择年月
 * @description 以「年月」为基本单位，基础的年月选择控件
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";
import moment from "moment";


import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

const { MonthPicker } = DatePicker;

const format2 = "YYYY";

function onSelect(d) {
  console.log(d);
}

function onChange(d) {
  console.log(d);
}

class Demo2 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <MonthPicker
              format={format2}
              onSelect={onSelect}
              onChange={onChange}
              locale={zhCN}


              defaultValue={moment()}
              placeholder={"选择年月"}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo2;
