
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 选择日期","code":"/**\n *\n * @title 选择日期\n * @description 以「日期」为基本单位，基础的日期选择控件\n */\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport DatePicker from 'bee-datepicker';\n\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\nimport enUS from 'rc-calendar/lib/locale/en_US';\nimport moment from 'moment';\n\n\nconst format = 'YYYY-MM-DD';\n\nconst dateInputPlaceholder = '选择日期';\n\n\nfunction onSelect(d) {\n    console.log(d)\n}\n\n\nfunction onChange(d) {\n    console.log(d)\n}\n\n\nclass Demo1 extends Component {\n    render() {\n\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n\n                            format={format}\n\n                            onSelect={onSelect}\n\n                            onChange={onChange}\n\n                            locale={zhCN}\n\n                            defaultValue={moment()}\n\n                            placeholder = {dateInputPlaceholder}\n\n                        />\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n","desc":" 以「日期」为基本单位，基础的日期选择控件"},{"example":<Demo2 />,"title":" 选择年月","code":"/**\n *\n * @title 选择年月\n * @description 以「年月」为基本单位，基础的年月选择控件\n */\n\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport DatePicker from 'bee-datepicker';\nimport moment from 'moment';\n\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\nimport enUS from 'rc-calendar/lib/locale/en_US';\n\nconst {MonthPicker} = DatePicker;\n\n\nconst format2 = 'YYYY-MM';\n\n\nfunction onSelect(d) {\n    console.log(d)\n}\n\n\nfunction onChange(d) {\n    console.log(d)\n}\n\n\nclass Demo2 extends Component {\n\n    render() {\n\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <MonthPicker\n\n                            format={format2}\n\n                            onSelect={onSelect}\n\n                            onChange={onChange}\n\n                            locale={zhCN}\n\n                            defaultValue={moment()}\n\n                            placeholder={'选择年月'}\n\n                        />\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n","desc":" 以「年月」为基本单位，基础的年月选择控件"},{"example":<Demo3 />,"title":" 日期范围","code":"/**\n *\n * @title 日期范围\n * @description 以「日期范围」为基本单位，基础的日期范围选择控件\n */\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport DatePicker from 'bee-datepicker';\n\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\nimport enUS from 'rc-calendar/lib/locale/en_US';\n\nconst {RangePicker} = DatePicker;\n\nconst format3 = 'YYYY-MM-DD';\n\nfunction onSelect(d) {\n    console.log(d)\n}\n\n\nfunction onChange(d) {\n    console.log(d)\n}\n\nclass Demo3 extends Component {\n\n    render() {\n\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <RangePicker\n\n                            format={format3}\n\n                            onSelect={onSelect}\n\n                            onChange={onChange}\n\n                            locale={zhCN}\n\n                            placeholder={'选择年月'}\n\n                        />\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n","desc":" 以「日期范围」为基本单位，基础的日期范围选择控件"},{"example":<Demo4 />,"title":" 选择日期时间","code":"/**\n *\n * @title 选择日期时间\n * @description 以「日期时间」为基本单位，基础的日期时间选择控件\n */\n\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport DatePicker from 'bee-datepicker';\n\n\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\nimport enUS from 'rc-calendar/lib/locale/en_US';\nimport moment from 'moment';\n\nfunction onSelect(d) {\n    console.log(d)\n}\n\n\nfunction onChange(d) {\n    console.log(d)\n}\n\n\nclass Demo4 extends Component {\n    render() {\n\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n\n                            format={\"YYYY-MM-DD HH:mm:ss\"}\n\n                            onSelect={onSelect}\n\n                            onChange={onChange}\n\n                            locale={zhCN}\n\n                            placeholder = {'选择日期时间'}\n\n                        />\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n","desc":" 以「日期时间」为基本单位，基础的日期时间选择控件"},{"example":<Demo5 />,"title":" 选择周","code":"/**\n *\n * @title 选择周\n * @description 以「周」为基本单位，基础的周选择控件\n */\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport DatePicker from 'bee-datepicker';\nconst {WeekPicker} = DatePicker;\nimport moment from 'moment';\n\nfunction onSelect(d) {\n    console.log(d)\n}\n\n\nfunction onChange(d) {\n    console.log(d)\n}\n\n\nclass Demo5 extends Component {\n    render() {\n\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <WeekPicker defaultValue={moment()} placeholder=\"选择周\"/>\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n","desc":" 以「周」为基本单位，基础的周选择控件"},{"example":<Demo6 />,"title":" 选择日期时间","code":"/**\n *\n * @title 选择日期时间\n * @description 以「日期时间」为基本单位，可以选择日期和时间\n */\n\nimport React, { Component } from 'react';\nimport {Row, Col } from 'bee-layout';\nimport DatePicker from 'bee-datepicker';\n\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\nimport enUS from 'rc-calendar/lib/locale/en_US';\nimport moment from 'moment';\n\n\nconst format = 'YYYY-MM-DD HH:mm:ss';\n\nconst dateInputPlaceholder = '选择日期';\n\n\nfunction onSelect(d) {\n    console.log(d)\n}\n\n\nfunction onChange(d) {\n    console.log(d)\n}\n\n\nclass Demo6 extends Component {\n    render() {\n\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n\n                            format={format}\n\n                            showTime={true}\n\n                            onSelect={onSelect}\n\n                            onChange={onChange}\n\n                            locale={zhCN}\n\n                            value={moment()}\n\n                            placeholder = {dateInputPlaceholder}\n\n                        />\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n","desc":" 以「日期时间」为基本单位，可以选择日期和时间"}]



class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
