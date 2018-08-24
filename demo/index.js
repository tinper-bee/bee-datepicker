import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var DemoArray = [{"example":<Demo1 />,"title":" 选择日期","code":"/**\n *\n * @title 选择日期\n * @description 以「日期」为基本单位，基础的日期选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\nimport Icon from 'bee-icon';\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\nconst format = \"YYYY-MM-DD dddd\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  // console.log(d);\n}\n\nconsole.log(moment().format(format));\n\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n  }\n  onChange  = (d,dataString) => {\n \n      console.log(dataString);\n  };\n  clear = d => {\n      this.setState({\n          value:''\n      })\n  }\n    renderIcon= d => {\n        return (<Icon type=\"uf-search\"></Icon>)\n    }\n  render() {\n    var self = this;\n    return (\n      <div>\n        <Row>\n          <Col md={8}>\n            <DatePicker\n              format={format}\n              onSelect={onSelect}\n              onChange={this.onChange}\n              locale={zhCN}\n              //defaultValue={this.state.value}\n              value={this.state.value}\n\n              placeholder={dateInputPlaceholder}\n              className={\"uuuu\"}\n              renderIcon={()=>{\n                  return (<Icon type=\"uf-search\"></Icon>)\n              }}\n\n            />\n          </Col>\n          <Col md={3}>\n              <button className=\"u-button\" onClick={this.clear}>清空</button>\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\nexport default Demo1;\n","desc":" 以「日期」为基本单位，基础的日期选择控件"},{"example":<Demo2 />,"title":" 选择年月","code":"/**\n *\n * @title 选择年月\n * @description 以「年月」为基本单位，基础的年月选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\nimport moment from \"moment\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\n\nconst { MonthPicker } = DatePicker;\n\nconst format2 = \"YYYY-MM\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo2 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <MonthPicker\n              format={format2}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              defaultValue={moment()}\n              placeholder={\"选择年月\"}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\nexport default Demo2;\n","desc":" 以「年月」为基本单位，基础的年月选择控件"},{"example":<Demo3 />,"title":" 日期范围","code":"/**\n *\n * @title 日期范围\n * @description 以「日期范围」为基本单位，基础的日期范围选择控件\n */\n\nimport React, {Component} from \"react\";\nimport {Row, Col} from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport moment from \"moment/moment\";\nimport Form from 'bee-form';\nconst FormItem = Form.FormItem;\n\n\nconst now = moment();\n\nconst {RangePicker} = DatePicker;\n\nconst format3 = \"YYYY-MM-DD HH:mm:ss\";\n\nfunction formatValue(value, format) {\n    return (value && value.format(format)) || '';\n}\n\nfunction onSelect(d) {\n    //console.log(d);\n}\n\n\n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: '',\n            v:''\n        };\n    }\n\n    onStartChange = (value) => {\n        this.setState({\n            startValue: value[0],\n            startOpen: false,\n            endOpen: true,\n        });\n    }\n\n    remove() {\n        this.setState({value: ''})\n    }\n\n    onChange (d) {\n        console.log(d);\n    }\n\n    render() {\n        const props = this.props;\n        const self = this;\n        const { getFieldProps, getFieldError } = this.props.form;\n        console.log(this.state.value)\n        return (\n            <div>\n                <Row>\n                    <Col md={8}>\n                        <RangePicker\n                            placeholder={'开始 ~ 结束'}\n                            dateInputPlaceholder={['开始', '结束']}\n\n                            showClear={true}\n\n                            {\n                                ...getFieldProps('shipDate', {\n                                    initialValue:'',\n                                    onChange:  (v,dateString)=> {\n                                        self.setState({ shipDate: v });\n                                        self.props.form.setFieldsValue({\n                                            'shipDate':dateString\n                                        })\n                                    },\n                                })\n                            }\n                        />\n                    </Col>\n                    <Col md={3}>\n                        <button className=\"u-button\" onClick={this.remove.bind(this)}>清空</button>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\nexport default Form.createForm()(Demo3)\n","desc":" 以「日期范围」为基本单位，基础的日期范围选择控件"},{"example":<Demo4 />,"title":" 动态的改变时间","code":"/**\n *\n * @title 动态的改变时间\n * @description 以「日期时间」为基本单位，基础的日期时间选择控件\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"../../src/index\";\nimport moment from \"moment\";\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport { Row, Col } from \"bee-layout\";\nimport Button from \"bee-button\";\nconst format = \"YYYY-MM-DD HH:mm:ss\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: moment()\n    };\n  }\n\n  handleChange = value => {\n    this.setState({\n      value: value\n    });\n  };\n  onSelect = d => {\n    console.log(d);\n  };\n\n  handlerChangeDate = () => {\n    this.setState({\n      value: moment(\"2011-11-11 11:11:11\")\n    });\n    console.log(\"click\");\n  };\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={8}>\n            <DatePicker\n              format={format}\n              locale={zhCN}\n              onSelect={this.onSelect}\n              onChange={this.handleChange}\n              value={this.state.value}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n          <Col md={3}>\n            <Button onClick={this.handlerChangeDate}>变</Button>\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\nexport default Demo4;\n","desc":" 以「日期时间」为基本单位，基础的日期时间选择控件"},{"example":<Demo5 />,"title":" 选择周","code":"/**\n *\n * @title 选择周\n * @description 以「周」为基本单位，基础的周选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\nconst { WeekPicker } = DatePicker;\nimport moment from \"moment\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo5 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <WeekPicker defaultValue={''} onChange={onChange} placeholder=\"选择周\" />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\nexport default Demo5;\n","desc":" 以「周」为基本单位，基础的周选择控件"},{"example":<Demo6 />,"title":" 选择日期时间","code":"/**\n *\n * @title 选择日期时间\n * @description 以「日期时间」为基本单位，可以选择日期和时间\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD HH:mm:ss\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo6 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              showTime={true}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\nexport default Demo6;\n","desc":" 以「日期时间」为基本单位，可以选择日期和时间"},{"example":<Demo7 />,"title":" 禁用日期","code":"/**\n *\n * @title 禁用日期\n * @description 禁用日期\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nclass Demo7 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n              disabled={true}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\nexport default Demo7;\n","desc":" 禁用日期"},{"example":<Demo8 />,"title":" 不可选择日期和时间","code":"/**\n *\n * @title 不可选择日期和时间\n * @description 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n  console.log(d);\n}\n\nfunction onChange(d) {\n  console.log(d);\n}\n\nfunction disabledDate(current) {\n  return current && current.valueOf() < Date.now();\n}\n\nclass Demo7 extends Component {\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              onSelect={onSelect}\n              onChange={onChange}\n              locale={zhCN}\n              disabledDate={disabledDate}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\nexport default Demo7;\n","desc":" 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。"},{"example":<Demo9 />,"title":" 自定义日期渲染父级容器","code":"/**\n *\n * @title 自定义日期渲染父级容器\n * @description 以「日期」为基本单位，基础的日期选择控件\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport DatePicker from \"../../src/index\";\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\nimport Icon from 'bee-icon';\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n    // console.log(d);\n}\n\nfunction onChange(d) {\n    this.setState({\n        value: ''\n    });\n}\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: ''\n        };\n    }\n    getCalendarContainer() {\n        return this.d || document.getElementById('d');\n    }\n    onChange = d => {\n        console.log(d)\n\n        this.setState({\n            value: ''\n        });\n    };\n    render() {\n        return (\n            <div id=\"d\" ref=\"d\">\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n                            format={format}\n                            onSelect={onSelect}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            defaultValue={this.state.value}\n                            placeholder={dateInputPlaceholder}\n                            getCalendarContainer={this.getCalendarContainer}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\nexport default Demo1;\n","desc":" 以「日期」为基本单位，基础的日期选择控件"}]


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