import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var Demo10 = require("./demolist/Demo10");var Demo11 = require("./demolist/Demo11");var Demo12 = require("./demolist/Demo12");var Demo13 = require("./demolist/Demo13");var DemoArray = [{"example":<Demo1 />,"title":" 选择日期","code":"/**\r\n *\r\n * @title 选择日期\r\n * @description 以「日期」为基本单位，基础的日期选择控件\r\n */\r\n\r\nimport React, {Component} from \"react\";\nimport { Row, Col } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport moment from \"moment\";\r\nconst format = [\"YYYY.MM.DD\",\"DD.MM.YYYY\",\"YYYYMMDD\",\"DDMMYYYY\"];\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {value: '2019-09-09'}\r\n    }\r\n    onSelect = (d, dataString)  => {\r\n        console.log('select')\r\n        console.log(d, dataString);\r\n    }\r\n    onChange = (d, dataString) => {\r\n        console.log('change')\r\n        console.log(d, dataString)\r\n    };\r\n\r\n    render() {\r\n        let value = this.state.value;\r\n        let {format = ['YYYY-MM-DD', 'YYYYMMDD', 'YYYY.MM.DD', 'YYYY/MM/DD'], } = this.props;\r\n        var self = this;\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            animation=\"\"\r\n                            format={format}\r\n                            onChange={this.onChange}\r\n                            value={value ? moment(value) : null}\r\n                        />\r\n\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo1;\r\n","desc":" 以「日期」为基本单位，基础的日期选择控件"},{"example":<Demo2 />,"title":" 禁用日期","code":"/**\r\n *\r\n * @title 禁用日期\r\n * @description 设置 disabled\r\n */\r\n\r\nimport React, {Component} from \"react\";\nimport { Row, Col } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport moment from \"moment\";\r\n\r\nconst format = \"YYYY-MM-DD dddd\";\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\nclass Demo2 extends Component {\r\n    onSelect = d => {\r\n        console.log(d);\r\n    }\r\n    onChange = (d, dataString) => {\r\n        console.log(dataString);\r\n    };\r\n    render() {\r\n        var self = this;\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            format={format}\r\n                            onSelect={this.onSelect}\r\n                            onChange={this.onChange}\r\n                            disabled\r\n                            defaultValue={moment()}\r\n                        />\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo2;\r\n","desc":" 设置 disabled"},{"example":<Demo3 />,"title":" 不可选择日期和时间","code":"/**\r\n *\r\n * @title 不可选择日期和时间\r\n * @description 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。\r\n */\r\n\r\nimport React, { Component } from \"react\";\nimport {  Row, Col  } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport moment from \"moment\";\r\nimport YearPicker from \"bee-datepicker/build/YearPicker\";\r\n\r\nconst { MonthPicker, RangePicker } = DatePicker;\r\n\r\nfunction range(start, end) {\r\n  const result = [];\r\n  for (let i = start; i < end; i++) {\r\n    result.push(i);\r\n  }\r\n  return result;\r\n}\r\n\r\nfunction disabledDate(current) {\r\n  // Can not select days before today and today\r\n  return current && current < moment().endOf('day');\r\n}\r\n\r\nfunction disabledYear(current) {\r\n    // Can not select days before year and year\r\n    return current && current > moment().endOf('year');\r\n}\r\n\r\nfunction disabledDateTime() {\r\n  return {\r\n    disabledHours: () => range(0, 24).splice(4, 20),\r\n    disabledMinutes: () => range(30, 60),\r\n    disabledSeconds: () => [55, 56],\r\n  };\r\n}\r\n\r\nfunction disabledRangeTime(_, type) {\r\n  if (type === 'start') {\r\n    return {\r\n      disabledHours: () => range(0, 60).splice(4, 20),\r\n      disabledMinutes: () => range(30, 60),\r\n      disabledSeconds: () => [55, 56],\r\n    };\r\n  }\r\n  return {\r\n    disabledHours: () => range(0, 60).splice(20, 4),\r\n    disabledMinutes: () => range(0, 31),\r\n    disabledSeconds: () => [55, 56],\r\n  };\r\n}\r\n\r\nclass Demo3 extends Component {\r\n  render() {\r\n    return (\r\n      <div className='demo3'>\r\n        <Row className='demo3-item'>\r\n            <DatePicker\r\n              placeholder=\"选择日期\"\r\n              format=\"YYYY-MM-DD HH:mm:ss\"\r\n              disabledDate={disabledDate}\r\n              disabledTime={disabledDateTime}\r\n              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}\r\n            />\r\n        </Row>\r\n          <Row className='demo3-item'>\r\n              <YearPicker\r\n                  placeholder=\"选择年\"\r\n                  format=\"YYYY\"\r\n                  disabledYear={disabledYear}\r\n                  showTime={{ defaultValue: moment().format('YYYY') }}\r\n              />\r\n          </Row>\r\n        <Row className='demo3-item'>\r\n            <MonthPicker disabledDate={disabledDate} placeholder=\"选择月份\" />\r\n        </Row>\r\n        <Row className='demo3-item'>\r\n            <RangePicker\r\n              placeholder={'开始 ~ 结束'}\r\n              disabledDate={disabledDate}\r\n              disabledTime={disabledRangeTime}\r\n              showTime={{\r\n                hideDisabledOptions: true,\r\n                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],\r\n              }}\r\n              format=\"YYYY-MM-DD HH:mm:ss\"\r\n            />\r\n        </Row>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default Demo3;\r\n","desc":" 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。","scss_code":".demo3{\r\n    >.demo3-item{\r\n        margin: 0;\r\n        margin-bottom: 20px!important;\r\n    }\r\n}"},{"example":<Demo4 />,"title":" 选择年，年月，周，日期范围","code":"/**\r\n *\r\n * @title 选择年，年月，周，日期范围\r\n * @description 选择年，年月，周，日期范围基本示例\r\n */\r\n\r\nimport React, { Component } from \"react\";\nimport {  Row, Col  } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport moment from \"moment\";\r\nimport zhCN from \"bee-datepicker/build/locale/zh_CN\";\r\nconst { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;\r\n\r\n\r\nclass Demo4 extends Component {\r\n    onChange = (d, dataString) => {\r\n        console.log('change')\r\n        console.log(d);\r\n        console.log(dataString);\r\n    };\r\n    onSelect = d => {\r\n        console.log('select')\r\n        console.log(d);\r\n    }\r\n    onClear = () => {\r\n        console.log('clear')\r\n    }\r\n    /**\r\n     *@param e 事件对象\r\n     *@param startValue 开始时间\r\n     *@param array 包含开始时间和结束时间的数组\r\n     */\r\n    onStartInputBlur = (e,startValue,array) => {\r\n        console.log('RangePicker面板 左输入框的失焦事件',startValue,array)\r\n    }\r\n    /**\r\n     *@param e 事件对象\r\n     *@param endValue 结束时间\r\n     *@param array 包含开始时间和结束时间的数组\r\n     */\r\n    onEndInputBlur = (e,endValue,array) => {\r\n        console.log('RangePicker面板 右输入框的失焦事件',endValue,array)\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Row style={{'marginBottom':'10px'}}>\r\n                    <Col md={6}>\r\n                        <YearPicker\r\n                            format=\"YYYY\"\r\n                            onChange={this.onChange}\r\n                            onSelect={this.onSelect}\r\n                            locale={zhCN}\r\n                            placeholder=\"选择年\"\r\n                            defaultValue={moment()}\r\n                            showClose={false}\r\n                        />\r\n                    </Col>\r\n                    <Col md={6} style={{'marginBottom':'10px'}}>\r\n                        <MonthPicker\r\n                            format='YYYY-MM'\r\n                            onSelect={this.onSelect}\r\n                            onChange={this.onChange}\r\n                            locale={zhCN}\r\n                            defaultValue={moment()}\r\n                            placeholder=\"选择年月\"\r\n                            onClear={this.onClear} \r\n                            showClose={false}\r\n                        />\r\n                    </Col>\r\n                    <Col md={6} style={{'marginBottom':'10px'}}>\r\n                        <WeekPicker \r\n                        defaultValue={moment()}\r\n                        onSelect={this.onSelect}\r\n                        onChange={this.onChange}\r\n                        placeholder=\"选择周\" \r\n                        showClose={false}\r\n                        />\r\n                    </Col>\r\n                    <Col md={6} style={{'marginBottom':'10px'}}>\r\n                        <RangePicker\r\n                            placeholder={'开始 ~ 结束'}\r\n                            dateInputPlaceholder={['开始', '结束']}\r\n                            showClear={true}\r\n                            onChange={this.onChange}\r\n                            onPanelChange={(v)=>{console.log('onPanelChange',v)}}\r\n                            showClose={true}\r\n                            onStartInputBlur={this.onStartInputBlur}\r\n                            onEndInputBlur={this.onEndInputBlur}\r\n                        />\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo4;\r\n","desc":" 选择年，年月，周，日期范围基本示例"},{"example":<Demo5 />,"title":" 动态的改变时间","code":"/**\r\n *\r\n * @title 动态的改变时间\r\n * @description 以「日期时间」为基本单位，基础的日期时间选择控件\r\n */\r\n\r\nimport React, { Component } from \"react\";\nimport { Button,  Row, Col  } from 'tinper-bee';\r\nimport DatePicker from \"bee-datepicker\";\r\nimport moment from \"moment\";\r\nimport zhCN from \"bee-datepicker/build/locale/zh_CN\";\r\n\n\nconst format = \"YYYY-MM-DD HH:mm:ss\";\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\nclass Demo5 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      value: moment()\r\n    };\r\n  }\r\n\r\n  handleChange = value => {\r\n    this.setState({\r\n      value: value\r\n    });\r\n  };\r\n  onSelect = d => {\r\n    console.log(d);\r\n  };\r\n\r\n  handlerChangeDate = () => {\r\n    this.setState({\r\n      value: moment(\"2011-11-11 11:11:11\")\r\n    });\r\n    console.log(\"click\");\r\n  };\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Row>\r\n          <Col md={6}>\r\n            <DatePicker\r\n              format={format}\r\n              locale={zhCN}\r\n              onSelect={this.onSelect}\r\n              onChange={this.handleChange}\r\n              value={this.state.value}\r\n              placeholder={dateInputPlaceholder}\r\n            />\r\n          </Col>\r\n          <Col md={3}>\r\n            <Button onClick={this.handlerChangeDate}>变</Button>\r\n          </Col>\r\n        </Row>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default Demo5;\r\n","desc":" 以「日期时间」为基本单位，基础的日期时间选择控件"},{"example":<Demo6 />,"title":" 自定义日期渲染父级容器\t","code":"/**\r\n *\r\n * @title 自定义日期渲染父级容器\t\r\n * @description getCalendarContainer自定义浮层渲染的父容器。该属性常用来将组件渲染到滚动区域内。\r\n */\r\n\r\nimport React, { Component } from \"react\";\nimport { Table } from 'tinper-bee';\r\nimport DatePicker from \"bee-datepicker\";\r\n\n\r\nconst dataSource = [\r\n    { a: \"ASVAL_20190328\", b: \"小张\", c: \"\", key: \"1\" },\r\n    { a: \"ASVAL_20190320\", b: \"小明\", c: \"\", key: \"2\" },\r\n    { a: \"ASVAL_20190312\", b: \"小红\", c: \"\", key: \"3\" },\r\n    { a: \"ASVAL_20190328\", b: \"小张\", c: \"\", key: \"4\" },\r\n    { a: \"ASVAL_20190320\", b: \"小明\", c: \"\", key: \"5\" },\r\n    { a: \"ASVAL_20190312\", b: \"小红\", c: \"\", key: \"6\" },\r\n    { a: \"ASVAL_20190328\", b: \"小张\", c: \"\", key: \"7\" },\r\n    { a: \"ASVAL_20190320\", b: \"小明\", c: \"\", key: \"8\" },\r\n    { a: \"ASVAL_20190312\", b: \"小红\", c: \"\", key: \"9\" },\r\n    { a: \"ASVAL_20190328\", b: \"小张\", c: \"\", key: \"10\" },\r\n    { a: \"ASVAL_20190320\", b: \"小明\", c: \"\", key: \"11\" },\r\n    { a: \"ASVAL_20190312\", b: \"小红\", c: \"\", key: \"12\" }\r\n];\r\n\r\nclass Demo6 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n    columns = [\r\n        { title: \"员工编号\", dataIndex: \"a\", key: \"a\", width: 150 },\r\n        { title: \"员工姓名\", dataIndex: \"b\", key: \"b\", width:100},\r\n        { title: \"出生日期\", dataIndex: \"c\", key: \"c\", render: () => {\r\n            return (\r\n                <DatePicker \r\n                placeholder=\"选择日期\"\r\n                showToday={false}\r\n                getCalendarContainer={trigger => trigger.parentNode} \r\n                />\r\n            )\r\n        }},\r\n        { title: \"\", dataIndex: \"\", key: \"\"}\r\n    ];\r\n    render() {\r\n        return (\r\n            <Table data={dataSource} columns={this.columns} scroll={{ y: 300 }} height={40}/>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo6;\r\n","desc":" getCalendarContainer自定义浮层渲染的父容器。该属性常用来将组件渲染到滚动区域内。"},{"example":<Demo7 />,"title":" 自定义展示日期面板，外层输入框可输入","code":"/**\r\n *\r\n * @title 自定义展示日期面板，外层输入框可输入\r\n * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input\r\n */\r\n\r\nimport React, {Component} from \"react\";\nimport { Icon, Row, Col } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport zhCN from \"bee-datepicker/build/locale/zh_CN\";\r\nimport enUS from \"bee-datepicker/build/locale/en_US\";\r\nimport moment from \"moment\";\r\n\nimport 'moment/locale/zh-cn';\r\n\r\nmoment.locale('zh-cn');\r\n\r\nconst format = \"YYYY-MM-DD\";\r\n\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\nclass Demo7 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: '',\r\n            open: false\r\n        };\r\n    }\r\n    onSelect = d=> {\r\n        console.log(d);\r\n    }\r\n    onChange = (d, dataString) => {\r\n        console.log(d, dataString)\r\n    };\r\n    onOpenChange = open => {\r\n        console.log(open)\r\n    }\r\n    open = d => {\r\n        this.setState({\r\n            open: !this.state.open\r\n        })\r\n    }\r\n    onClick = (e,d,str) => {\r\n        console.log(d);\r\n    }\r\n    outInputKeydown = ()=>{\r\n        console.log('keydown')\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            format={format}\r\n                            onSelect={this.onSelect}\r\n                            onChange={this.onChange}\r\n                            locale={zhCN}\r\n                            open={this.state.open}\r\n                            defaultValue={moment('2018-01-01')}\r\n                            onOpenChange={this.onOpenChange}\r\n                            placeholder={dateInputPlaceholder}\r\n                            className={\"Demo7\"}\r\n                            onClick={this.onClick}\r\n                            keyboardInput={true}\r\n                            showDateInput={false}\r\n                        />\r\n                    </Col>\r\n                    <Col md={3}>\r\n                        <button className=\"u-button\" onClick={this.open}>展开面板</button>\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo7;\r\n","desc":" open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input"},{"example":<Demo8 />,"title":" 自定义展示日期面板，外层输入框可输入，配合form使用","code":"/**\r\n *\r\n * @title 自定义展示日期面板，外层输入框可输入，配合form使用\r\n * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input\r\n */\r\n\r\nimport React, {Component} from \"react\";\nimport { Form, Row, Col } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport zhCN from \"bee-datepicker/build/locale/zh_CN\";\r\nimport enUS from \"bee-datepicker/build/locale/en_US\";\r\nimport moment from \"moment\";\r\nimport 'moment/locale/zh-cn';\r\n\n\r\nmoment.locale('zh-cn');\r\n\r\nconst format = \"YYYY-MM-DD\";\r\n\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\n\r\nclass Demo8 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: '',\r\n            open: false\r\n        };\r\n    }\r\n    onOpenChange = open => {\r\n        console.log(open)\r\n    }\r\n    open = d => {\r\n        this.setState({\r\n            open: !this.state.open\r\n        })\r\n    }\r\n    onClick = (e,d,str) => {\r\n        console.log(d);\r\n    }\r\n    onSelect(d) {\r\n        console.log(\"select:\"+d);\r\n    }\r\n    outInputKeydown = ()=>{\r\n        console.log('keydown')\r\n    }\r\n    onChange = (d, dataString) => {\r\n        console.log(d, dataString)\r\n    };\r\n    submit = (e) => {\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log('校验失败', values);\r\n            } else {\r\n                console.log('提交成功', values, moment(values.date).format('YYYY-MM-DD'));\r\n            }\r\n        });\r\n    }\r\n    render() {\r\n        var self = this; \r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            format={format}\r\n                            onSelect={this.onSelect}\r\n                            onChange={this.onChange}\r\n                            locale={zhCN}\r\n                            open={this.state.open}\r\n                            onOpenChange={this.onOpenChange.bind(this)}\r\n                            placeholder={dateInputPlaceholder}\r\n                            className={\"demo11\"}\r\n                            onClick={this.onClick}\r\n                            keyboardInput={true}\r\n                            showDateInput={false}\r\n                            iconClick={this.open}\r\n                            outInputKeydown={this.outInputKeydown}\r\n                        />\r\n                    </Col>\r\n                    <Col md={3}>\r\n                        <button className=\"u-button\" onClick={this.open}>展开/收起面板</button>\r\n                        <button className=\"u-button\" onClick={this.submit}>获得值</button>\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Form.createForm()(Demo8);\r\n","desc":" open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input"},{"example":<Demo9 />,"title":" 额外的页脚","code":"/**\r\n *\r\n * @title 额外的页脚\r\n * @description 在浮层中加入额外的页脚，以满足某些定制信息的需求。\r\n */\r\n\r\nimport React, {Component} from \"react\";\nimport { Row, Col } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\n\r\nconst { RangePicker, MonthPicker } = DatePicker;\r\n\r\nclass Demo9 extends Component {\r\n    render() {\r\n        return (\r\n            <div className=\"demo9\">\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker renderFooter={() => '额外页脚'} placeholder=\"选择日期\"/>\r\n                    </Col>\r\n                    \r\n                    <Col md={6}>\r\n                        <DatePicker renderFooter={() => '额外页脚'} showTime placeholder=\"选择日期\"/>\r\n                    </Col>\r\n                    \r\n                    <Col md={6}>\r\n                        <RangePicker renderFooter={() => '额外页脚'} placeholder={'开始 ~ 结束'}/>\r\n                    </Col>\r\n                    \r\n                    <Col md={6}>\r\n                        <RangePicker renderFooter={() => '额外页脚'} showTime placeholder={'开始 ~ 结束'}/>\r\n                    </Col>\r\n                    \r\n                    <Col md={6}>\r\n                        <MonthPicker renderFooter={() => '额外页脚'} placeholder=\"选择月\" />\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo9;\r\n","desc":" 在浮层中加入额外的页脚，以满足某些定制信息的需求。","scss_code":".demo9 {\r\n    .u-row .u-col-md-6 {\r\n        margin-bottom: 10px;\r\n    }\r\n}"},{"example":<Demo10 />,"title":" 使用normal格式化","code":"/**\r\n *\r\n * @title 使用normal格式化\r\n * @description 配合form 使用normal格式化，已 MothPicker 为例\r\n */\r\n\r\nimport React, { Component } from \"react\";\nimport { Form,  Row, Col  } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\n\n\r\nconst { MonthPicker } = DatePicker;\r\n\r\n\r\nclass Demo4 extends Component {\r\n    submit = (e) => {\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log('校验失败', values);\r\n            } else {\r\n                console.log('提交成功', values);\r\n            }\r\n        });\r\n    }\r\n    render() {\r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        return (\r\n            <div>\r\n                <Row style={{'marginBottom':'10px'}}>\r\n                    <Col md={6} style={{'marginBottom':'10px'}}>\r\n                        <MonthPicker\r\n                            format=\"YYYY-MM\"\r\n                            {...getFieldProps('date', {\r\n                                validateTrigger: 'onBlur',\r\n                                initialValue:null,\r\n                                normalize:(value)=>{\r\n                                    if(value&&value.format){\r\n                                        return value.format('YYYY-MM')\r\n                                    }else{\r\n                                        return value\r\n                                    }\r\n                                },\r\n                                rules: [{\r\n                                    required: true, message: '请输入日期',\r\n                                }],\r\n                            }) }\r\n                        />\r\n                    </Col>\r\n                    <button className=\"u-button\" onClick={this.submit}>获得值</button>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Form.createForm()(Demo4);\r\n","desc":" 配合form 使用normal格式化，已 MothPicker 为例"},{"example":<Demo11 />,"title":" 配合form使用","code":"/**\r\n *\r\n * @title 配合form使用\r\n * @description 各类型组件配合form使用，注意事项\r\n */\r\n\r\nimport React, { Component } from \"react\";\nimport { Button, Form,  Row  } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\n\n\n\r\nconst { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;\r\n\r\nclass Demo11 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state={\r\n          initialValues:{\r\n            \r\n          }  \r\n        }\r\n    }\r\n\r\n    componentWillMount(){\r\n        //如果初始值需要接口返回，则需要在组件初始化之前，获得初始值。 这里模拟设置初始值\r\n        this.setState({\r\n            initialValues:{\r\n                date:'2019-02-03',\r\n                dateTime:'2009-10-11 12:13:14',\r\n                month:'2019-12',\r\n                year:'2019',\r\n                week:'2019-45',\r\n                range:['2019-11-12','2019-12-13']\r\n            }\r\n        })\r\n    }\r\n\r\n\r\n    submit = (e) => {\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log('校验失败', values);\r\n            } else {\r\n                console.log('提交成功', values);\r\n            }\r\n        });\r\n    }\r\n\r\n    change=()=>{\r\n        this.setState({\r\n            initialValues:{\r\n                date:'2020-10-10',\r\n                dateTime:'2020-10-10 10:10:10',\r\n                month:'2020-10',\r\n                year:'2020',\r\n                week:'2020-20',\r\n                range:['2020-10-10','2020-12-12']\r\n            }\r\n        })\r\n    }\r\n    reset=()=>{\r\n        //此方法将所有元素还原到初始值。即还原到 componentWillMount 设置的值。\r\n        // 注意：this.props.form.resetFields() 并不是清空值，而是还原到 initialValue 的值\r\n        this.props.form.resetFields()\r\n    }\r\n\r\n    render() {\r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        return (\r\n            <div className='demo11'>\r\n                <Row className='demo11-item'>\r\n                    <DatePicker\r\n                        format='YYYY-MM-DD'\r\n                        {\r\n                            ...getFieldProps('date',{\r\n                                initialValue:this.state.initialValues.date,\r\n                                normalize:(value)=>{\r\n                                    if(value&&value.format){\r\n                                        return value.format('YYYY-MM-DD')\r\n                                    }else{\r\n                                        return value\r\n                                    }\r\n                                },\r\n                            })\r\n                        }\r\n                    />\r\n                </Row>\r\n                <Row className='demo11-item'>\r\n                    <DatePicker\r\n                        format='YYYY-MM-DD hh:mm:ss'\r\n                        showTime={true}\r\n                        {\r\n                            ...getFieldProps('dateTime',{\r\n                                initialValue:this.state.initialValues.dateTime,\r\n                                normalize:(value)=>{\r\n                                    if(value&&value.format){\r\n                                        return value.format('YYYY-MM-DD hh:mm:ss')\r\n                                    }else{\r\n                                        return value\r\n                                    }\r\n                                },\r\n                            })\r\n                        }\r\n                    />\r\n                </Row>\r\n                <Row className='demo11-item'>\r\n                    <MonthPicker\r\n                        format='YYYY-MM'\r\n                        {\r\n                            ...getFieldProps('month',{\r\n                                initialValue:this.state.initialValues.month,\r\n                                normalize:(value)=>{\r\n                                    if(value&&value.format){\r\n                                        return value.format('YYYY-MM')\r\n                                    }else{\r\n                                        return value\r\n                                    }\r\n                                },\r\n                            })\r\n                        }\r\n                    />\r\n                </Row>\r\n                <Row className='demo11-item'>\r\n                    <YearPicker\r\n                        format='YYYY'\r\n                        {\r\n                            ...getFieldProps('year',{\r\n                                initialValue:this.state.initialValues.year,\r\n                                normalize:(value)=>{\r\n                                    if(value&&value.format){\r\n                                        return value.format('YYYY')\r\n                                    }else{\r\n                                        return value\r\n                                    }\r\n                                },\r\n                            })\r\n                        }\r\n                    />\r\n                </Row>\r\n                <Row className='demo11-item'>\r\n                    <WeekPicker\r\n                        format='YYYY-WW'\r\n                        {\r\n                            ...getFieldProps('week',{\r\n                                initialValue:this.state.initialValues.week,\r\n                                normalize:(value)=>{\r\n                                    if(value&&value.format){\r\n                                        return value.format('YYYY-WW')\r\n                                    }else{\r\n                                        return value\r\n                                    }\r\n                                },\r\n                            })\r\n                        }\r\n                    />\r\n                </Row>\r\n                <Row className='demo11-item'>\r\n                    <RangePicker\r\n                        format='YYYY-MM-DD'\r\n                        {\r\n                            ...getFieldProps('range',{\r\n                                initialValue:this.state.initialValues.range,\r\n                                normalize:(value)=>{\r\n                                    let values = [];\r\n                                    if(value[0]&&value[0].format){\r\n                                        values.push(value[0].format('YYYY-MM-DD')||'')\r\n                                    }else{\r\n                                        values.push(value[0]||'')\r\n                                    }\r\n                                    if(value[1]&&value[1].format){\r\n                                        values.push(value[1].format('YYYY-MM-DD')||'')\r\n                                    }else{\r\n                                        values.push(value[1]||'')\r\n                                    }\r\n                                    return values;\r\n                                },\r\n                            })\r\n                        }\r\n                    />\r\n                </Row>\r\n                <Row className='demo11-item'>\r\n                    <Button className='options-btns' colors='primary' onClick={this.change}>改变初始值</Button>\r\n                    <Button className='options-btns' colors='primary' onClick={this.submit}>获得所有值</Button>\r\n                    <Button className='options-btns' colors='primary' onClick={this.reset}>还原所有值</Button>\r\n                </Row>\r\n                \r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Form.createForm()(Demo11);\r\n","desc":" 各类型组件配合form使用，注意事项","scss_code":".demo11{\r\n   >.demo11-item{\r\n        margin: 0;\r\n        margin-bottom: 20px!important;\r\n        .u-button{\r\n            margin-right: 20px;\r\n        }\r\n   }\r\n}"},{"example":<Demo12 />,"title":" 多语示例","code":"/**\r\n *\r\n * @title 多语示例\r\n * @description 设置locale属性，并设置moment语言\r\n */\r\n\r\nimport React, {Component} from \"react\";\nimport { Row, Col } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport zhCN from \"bee-datepicker/build/locale/zh_CN\";//1、引入日期组件语言包\r\nimport enUS from \"bee-datepicker/build/locale/en_US\";\r\n\r\nimport moment from \"moment\";//2、引入 moment\r\n\r\nmoment.locale('zh-cn');//3、设置moment语言，更多语言参考 http://momentjs.cn/docs/#/i18n/\r\n\r\nconst format = \"YYYY-MM-DD dddd\";\r\n\r\nclass Demo12 extends Component {\r\n    \r\n    onChange = (d, dataString) => {\r\n        console.log('change')\r\n        console.log(d, dataString)\r\n    };\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            locale={zhCN}//4、将需要的语言包传入到日期组件locale属性\r\n                            format={format}\r\n                            onChange={this.onChange}\r\n                        />\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo12;\r\n","desc":" 设置locale属性，并设置moment语言"},{"example":<Demo13 />,"title":" 设置初始日期选择范围","code":"/**\r\n *\r\n * @title 设置初始日期选择范围\r\n * @description 设置初始日期选择范围基本实例\r\n */\r\n\r\nimport React, {Component} from \"react\";\nimport { Row, Col } from 'tinper-bee';\r\n\nimport DatePicker from \"bee-datepicker\";\r\nimport moment from \"moment\";\r\n\r\nconst { RangePicker } = DatePicker\r\n\r\nconst format = \"YYYY-MM-DD dddd\";\r\n\r\nclass Demo13 extends Component {\r\n    state = {\r\n        datePickerPanelValue: '2004-05-09',\r\n        rangePickerPanelValues: '2014-01-02',\r\n        dateValue: '2020-02-03',\r\n        // rangeValue: ['2098-09-02', '2099-08-06']\r\n    }\r\n    onSelect = d => {\r\n        console.log(d);\r\n    }\r\n    onDateChange = (d) => {\r\n        this.setState({\r\n            datePickerPanelValue: null,\r\n            dateValue: d\r\n        })\r\n    };\r\n    onRangeChange = (d) => {\r\n        this.setState({\r\n            rangeValue: d,\r\n            rangePickerPanelValues: null\r\n        })\r\n    };\r\n    render() {\r\n        var self = this;\r\n        const { value } = this.state\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            format={format}\r\n                            onSelect={this.onSelect}\r\n                            onChange={this.onDateChange}\r\n                            panelValue={this.state.datePickerPanelValue}\r\n                            value={this.state.dateValue}\r\n                        />\r\n                    </Col>\r\n                    <Col md={6} style={{'marginBottom':'10px'}}>\r\n                        <RangePicker\r\n                            placeholder={'开始 ~ 结束'}\r\n                            dateInputPlaceholder={['开始', '结束']}\r\n                            showClear={true}\r\n                            onChange={this.onRangeChange}\r\n                            onPanelChange={(v)=>{console.log('onPanelChange',v)}}\r\n                            showClose={true}\r\n                            onStartInputBlur={this.onStartInputBlur}\r\n                            onEndInputBlur={this.onEndInputBlur}\r\n                            panelValues={this.state.rangePickerPanelValues}\r\n                            value={this.state.rangeValue}\r\n                        />\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo13;\r\n","desc":" 设置初始日期选择范围基本实例"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
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
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
