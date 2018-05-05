/**
 *
 * @title 日期范围
 * @description 以「日期范围」为基本单位，基础的日期范围选择控件
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import moment from "moment/moment";

const now = moment();

const {RangePicker} = DatePicker;

const format3 = "YYYY-MM-DD";

function formatValue(value, format) {
    return (value && value.format(format)) || '';
}

function onSelect(d) {
    //console.log(d);
}



class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [moment('2017-01-11'), moment('2017-01-19')],
            v:''
        };
    }

    onStartChange = (value) => {
        this.setState({
            startValue: value[0],
            startOpen: false,
            endOpen: true,
        });
    }

    remove() {
        this.setState({value: ''})
    }

    onChange (d) {
        this.setState({
            value:d,
        })
    }

    render() {
        const props = this.props;
        console.log(this.state.v);
        return (
            <div>
                <Row>
                    <Col md={8}>
                        <RangePicker
                            format={format3}
                            onSelect={onSelect}
                            onChange={this.onChange.bind(this)}
                            locale={zhCN}
                            showClear={true}
                            showOk={true}
                            className={'range-fixed'}
                            defaultValue={this.state.value}
                        />
                    </Col>
                    <Col md={3}>
                        <button className="u-button" onClick={this.remove.bind(this)}>清空</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo3;
