/**
 *
 * @title 设置初始日期选择范围
 * @description 设置初始日期选择范围基本实例
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src";
import moment from "moment";

const { RangePicker } = DatePicker

const format = "YYYY-MM-DD dddd";

class Demo13 extends Component {
    state = {
        datePickerPanelValue: '2004-05-09',
        rangePickerPanelValues: ['3409-09-02', '7876-10-19'],
        dateValue: '2020-02-03',
        rangeValue: ['2098-09-02', '2099-08-06']
    }
    onSelect = d => {
        console.log(d);
    }
    onDateChange = (d) => {
        this.setState({
            // datePickerPanelValue: null,
            dateValue: d
        })
    };
    onRangeChange = (d) => {
        this.setState({
            rangeValue: d,
            // rangePickerPanelValues: null
        })
    };
    render() {
        var self = this;
        const { value } = this.state
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <DatePicker
                            format={format}
                            onSelect={this.onSelect}
                            onChange={this.onDateChange}
                            panelValue={this.state.datePickerPanelValue}
                            value={this.state.dateValue}
                        />
                    </Col>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <RangePicker
                            placeholder={'开始 ~ 结束'}
                            dateInputPlaceholder={['开始', '结束']}
                            showClear={true}
                            onChange={this.onRangeChange}
                            onPanelChange={(v)=>{console.log('onPanelChange',v)}}
                            showClose={true}
                            onStartInputBlur={this.onStartInputBlur}
                            onEndInputBlur={this.onEndInputBlur}
                            panelValues={this.state.rangePickerPanelValues}
                            value={this.state.rangeValue}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo13;
