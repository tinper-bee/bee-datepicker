/**
 *
 * @title 选择年，年月，周，日期范围
 * @description 选择年，年月，周，日期范围基本示例
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";
import moment from "moment";
import zhCN from "../../src/locale/zh_CN";
import enUS from "../../src/locale/en_US";
const { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;


class Demo4 extends Component {
    onChange = (d, dataString) => {
        console.log(d);
        console.log(dataString);
    };
    onSelect = d => {
        console.log(d);
    }
    render() {
        return (
            <div>
                <Row >
                    <Col md={6}>
                        <YearPicker
                            format="YYYY"
                            onChange={this.onChange}
                            onSelect={this.onSelect}
                            locale={zhCN}
                            placeholder="选择年"
                            defaultValue={moment()}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo4;
