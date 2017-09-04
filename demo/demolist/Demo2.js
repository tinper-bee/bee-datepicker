/**
 *
 * @title 选择年月
 * @description 以「年月」为基本单位，基础的年月选择控件
 */


import React, { Component } from 'react';
import {Con, Row, Col } from 'bee-layout';
import DatePicker from '../../src';
const {MonthPicker} = DatePicker;

import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';


const format2 = 'YYYY-MM';


function onSelect(d) {
    console.log(d)
}


function onChange(d) {
    console.log(d)
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

                            placeholder={'选择年月'}

                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default  Demo2;