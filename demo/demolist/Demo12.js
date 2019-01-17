/**
 *
 * @title 自定义展示日期面板，外层输入框可输入，配合form使用
 * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";
import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import moment from "moment";
import Icon from 'bee-icon';
import 'moment/locale/zh-cn';
import Form from 'bee-form';

moment.locale('zh-cn');

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
    // console.log(d);
}


class Demo12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false
        };
    }
    clear = d => {
        this.props.form.setFieldsValue({
            date:''
        })
    }
    renderIcon = d => {
        return (<Icon type="uf-search"></Icon>)
    }
    onOpenChange = d => {
        console.log(d);
    }
    open = d => {
        this.setState({
            open: true
        })
    }
    onClick = (e,d,str) => {
        this.setState({
            open: false
        })
    }
    renderFooter = () => {
        return null
    }
    submit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values, moment(values.date).format('YYYY-MM-DD'));
            }
        });
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        var self = this; 
        return (
            <div>
                <Row>
                    <Col md={8}>
                        <DatePicker
                            format={format}
                            onSelect={onSelect}
                            locale={zhCN}
                            open={this.state.open}
                            onOpenChange={this.onOpenChange.bind(this)}
                            placeholder={dateInputPlaceholder}
                            className={"uuuu"}
                            onClick={this.onClick}
                            keyboardInput={true}
                            showDateInput={false}
                            {...getFieldProps('date', {
                                validateTrigger: 'onBlur',
                                initialValue:moment('2018-01-01'),
                                rules: [{
                                    required: true, message: '请输入日期',
                                }],
                            }) }
                        />
                    </Col>
                    <Col md={3}>
                        <button className="u-button" onClick={this.clear}>清空</button>
                        <button className="u-button" onClick={this.open}>设置为true</button>
                        <button className="u-button" onClick={this.submit}>获得值</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Form.createForm()(Demo12);
