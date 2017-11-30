
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 选择日期","code":"/**\n *\n * @title 选择日期\n * @description 以「日期」为基本单位，基础的日期选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  // console.log(d);\n}\n\nfunction onChange(d) {\n  this.setState({\n    value: d\n  });\n}\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: moment()\n    };\n  }\n  onChange = d => {\n    console.log(d)\n    \n    this.setState({\n      value: d\n    });\n  };\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              onSelect={onSelect}\n              onChange={this.onChange}\n              locale={zhCN}\n              defaultValue={this.state.value}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「日期」为基本单位，基础的日期选择控件"},{"example":<Demo2 />,"title":" 选择年月","code":"/**\n *\n * @title 选择年月\n * @description 以「年月」为基本单位，基础的年月选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src\";\nimport moment from \"moment\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\n\nconst { MonthPicker } = DatePicker;\n\nconst format2 = \"YYYY-MM\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo2 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <MonthPicker\n              format={format2}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              defaultValue={moment()}\n              placeholder={\"选择年月\"}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「年月」为基本单位，基础的年月选择控件"},{"example":<Demo3 />,"title":" 日期范围","code":"/**\n *\n * @title 日期范围\n * @description 以「日期范围」为基本单位，基础的日期范围选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\n\nconst { RangePicker } = DatePicker;\n\nconst format3 = \"YYYY-MM-DD\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo3 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <RangePicker\n              format={format3}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「日期范围」为基本单位，基础的日期范围选择控件"},{"example":<Demo4 />,"title":" 动态的改变时间","code":"/**\n *\n * @title 动态的改变时间\n * @description 以「日期时间」为基本单位，基础的日期时间选择控件\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"../../src\";\nimport moment from \"moment\";\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport { Row, Col } from \"bee-layout\";\nimport Button from \"bee-button\";\nconst format = \"YYYY-MM-DD HH:mm:ss\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: moment()\n    };\n  }\n\n  handleChange = value => {\n    this.setState({\n      value: value\n    });\n  };\n  onSelect = d => {\n    console.log(d);\n  };\n\n  handlerChangeDate = () => {\n    this.setState({\n      value: moment(\"2011-11-11 11:11:11\")\n    });\n    console.log(\"click\");\n  };\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={8}>\n            <DatePicker\n              format={format}\n              locale={zhCN}\n              onSelect={this.onSelect}\n              onChange={this.handleChange}\n              value={this.state.value}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n          <Col md={3}>\n            <Button onClick={this.handlerChangeDate}>变</Button>\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「日期时间」为基本单位，基础的日期时间选择控件"},{"example":<Demo5 />,"title":" 选择周","code":"/**\n *\n * @title 选择周\n * @description 以「周」为基本单位，基础的周选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src\";\nconst { WeekPicker } = DatePicker;\nimport moment from \"moment\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo5 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <WeekPicker defaultValue={moment()} placeholder=\"选择周\" />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「周」为基本单位，基础的周选择控件"},{"example":<Demo6 />,"title":" 选择日期时间","code":"/**\n *\n * @title 选择日期时间\n * @description 以「日期时间」为基本单位，可以选择日期和时间\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD HH:mm:ss\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo6 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              showTime={true}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「日期时间」为基本单位，可以选择日期和时间"},{"example":<Demo7 />,"title":" 禁用日期","code":"/**\n *\n * @title 禁用日期\n * @description 禁用日期\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo7 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n              disabled={true}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 禁用日期"},{"example":<Demo8 />,"title":" 不可选择日期和时间","code":"/**\n *\n * @title 不可选择日期和时间\n * @description 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nfunction disabledDate(current) {\n  return current && current.valueOf() < Date.now();\n}\n\nclass Demo7 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              disabledDate={disabledDate}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。"}]



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
