/**
 *
 * @title 自定义展示日期面板，外层输入框可输入
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

moment.locale('zh-cn');

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
    // console.log(d);
}


class Demo11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false
        };
    }

    onChange = (d, dataString) => {
        this.setState({
            value:d
        })
        console.log('onChange',dataString)
    };
    renderIcon = d => {
        return (<Icon type="uf-search"></Icon>)
    }
    onOpenChange = open => {
        console.log(open)
    }
    open = d => {
        this.setState({
            open: !this.state.open
        })
    }
    onClick = (e,d,str) => {
        console.log(d);
        
    }
    outInputKeydown = ()=>{
        console.log('keydown')
    }
    render() {
        var self = this; 
        return (
            <div>
                <Row>
                    <Col md={8}>
                        <DatePicker
                            format={format}
                            onSelect={onSelect}
                            onChange={this.onChange}
                            locale={zhCN}
                            open={this.state.open}
                            defaultValue={moment('2018-01-01')}
                            value={this.state.value}
                            onOpenChange={this.onOpenChange.bind(this)}
                            placeholder={dateInputPlaceholder}
                            className={"demo11"}
                            onClick={this.onClick}
                            keyboardInput={true}
                            showDateInput={false}
                            // iconClick={this.open}
                            // outInputKeydown={this.outInputKeydown}
                        />
                    </Col>
                    <Col md={3}>
                        <button className="u-button" onClick={this.open}>展开面板</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo11;
