/**
 *
 * @title 选择年
 * @description 以「年」为基本单位，基础的年选择控件
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";
import moment from "moment";
import Icon from "bee-icon";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

const { YearPicker } = DatePicker;

const format2 = "YYYY";

function onSelect(d) {
    console.log(d);
}

function onChange(d) {
    console.log(d);
}

class Demo10 extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <YearPicker
                            format={format2}
                            onSelect={onSelect}
                            onChange={onChange}
                            locale={zhCN}
                            value={moment()}
                            placeholder={"选择年"}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo10;
