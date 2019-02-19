import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 选择日期","code":"/**\n *\n * @title 选择日期\n * @description 以「日期」为基本单位，基础的日期选择控件\n */\n\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Row, Col } from 'tinper-bee';\n\nconst format = \"YYYY-MM-DD dddd\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo1 extends Component {\n    onSelect = d => {\n        console.log(d);\n    }\n    onChange = (d, dataString) => {\n        console.log(dataString);\n    };\n    render() {\n        var self = this;\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n                            format={format}\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 以「日期」为基本单位，基础的日期选择控件"},{"example":<Demo4 />,"title":" 选择年，年月，周，日期范围","code":"/**\n *\n * @title 选择年，年月，周，日期范围\n * @description 选择年，年月，周，日期范围基本示例\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport {  Row, Col  } from 'tinper-bee';\nimport moment from \"moment\";\nimport zhCN from \"tinper-bee/lib/zh_CN\";;\nimport enUS from \"tinper-bee/lib/en_US\";;\nconst { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;\n\n\nclass Demo4 extends Component {\n    onChange = (d, dataString) => {\n        console.log(d);\n        console.log(dataString);\n    };\n    onSelect = d => {\n        console.log(d);\n    }\n    render() {\n        return (\n            <div>\n                <Row >\n                    <Col md={6}>\n                        <YearPicker\n                            format=\"YYYY\"\n                            onChange={this.onChange}\n                            onSelect={this.onSelect}\n                            locale={zhCN}\n                            placeholder=\"选择年\"\n                            defaultValue={moment()}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 选择年，年月，周，日期范围基本示例"}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {title, example, code, desc, scss_code} = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
            {example}
            <Button style={{"marginTop": "10px"}} shape="block" onClick={this.handleClick}>
        {caret}
        {text}
    </Button>
        </div>
    );
        return (
            <Col md={12}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Panel collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
        footerStyle={{padding: 0}}>
    <pre><code className="hljs javascript">{code}</code></pre>
        {!!scss_code ? <pre><code className="hljs css">{scss_code}</code></pre> : null}
    </Panel>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
            {DemoArray.map((child, index) => {

                return (
            <Demo example={child.example} title={child.title} code={child.code} scss_code={child.scss_code}
        desc={child.desc} key={index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));