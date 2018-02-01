/**
 *
 * @title 自定义日期渲染父级容器
 * @description 以「日期」为基本单位，基础的日期选择控件
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import moment from "moment";
import Icon from 'bee-icon';

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
    // console.log(d);
}

function onChange(d) {
    this.setState({
        value: ''
    });
}

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    getCalendarContainer() {
        return this.d || document.getElementById('d');
    }
    onChange = d => {
        console.log(d)

        this.setState({
            value: ''
        });
    };
    render() {
        return (
            <div id="d" ref="d">
                <Row>
                    <Col md={12}>
                        <DatePicker
                            format={format}
                            onSelect={onSelect}
                            onChange={this.onChange}
                            locale={zhCN}
                            defaultValue={this.state.value}
                            placeholder={dateInputPlaceholder}
                            getCalendarContainer={this.getCalendarContainer}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo1;
