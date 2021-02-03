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
        rangePickerPanelValues: ['2007-09-03', '2008-08-03'],
        value: ''
    }
    onSelect = d => {
        console.log(d);
    }
    onDateChange = (d, dataString) => {
        this.setState({
            datePickerPanelValue: null // 当DatePicker或RangePicker的值发生变化时，panelValue要清空
        })
        console.log(dataString);
    };
    onRangeChange = (d, dataString) => {
        this.setState({
            value: d,
            rangePickerPanelValues: null
        })
        console.log(dataString);
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
                            panelValue={this.state.datePickerPanelValue} // 不可以传初始值或者默认值
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
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo13;
