/**
 *
 * @title 日期范围
 * @description 以「日期范围」为基本单位，基础的日期范围选择控件
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";
import Icon from "bee-icon";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import moment from "moment/moment";
import Form from 'bee-form';
const FormItem = Form.FormItem;


const now = moment();

const {RangePicker} = DatePicker;

const format3 = "YYYY-MM-DD HH:mm:ss";

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
            value: '',
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

    onChange (d,str) {
        console.log(d);
    }

    render() {
        const props = this.props;
        const self = this;
        const { getFieldProps, getFieldError } = this.props.form;

        return (
            <div>
                <Row>
                    <Col md={8}>
                        <RangePicker
                            placeholder={'开始 ~ 结束'}
                            dateInputPlaceholder={['开始', '结束']}
                            showClear={true}
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                            renderFooter={()=>{
                            return (
                                <div></div>
                            )
                        }}
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

export default Form.createForm()(Demo3)
