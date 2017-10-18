
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 不同size Input","code":"/**\n * @title 不同size Input\n * @description \n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport FormControl from 'bee-form-control';\n\n\n\t\n\tconstructor(props) {\n      super(props);\n      this.state = {\n          value: \"test\"\n      }\n  \t}\n\tonChange = (e) => {\n\t\tthis.setState({value:e});\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"wraper\">\n\t\t\t\t<FormControl value={this.state.value} onChange={this.onChange} size=\"sm\"/>\t\n\t\t\t\t<FormControl value={this.state.value} onChange={this.onChange}/>\n\t\t\t\t<FormControl value={this.state.value} onChange={this.onChange} size=\"lg\"/>\t\n\t\t\t</div>\n\t\t\t\n\t\t)\n\t}\n}","desc":" "},{"example":<Demo2 />,"title":" 可控 Input","code":"/**\n * @title 可控 Input\n * @description \n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport FormControl from 'bee-form-control';\n\n\n\tconstructor(props) {\n      super(props);\n      this.state = {\n          value: \"test\"\n      }\n  \t}\n  \t\n\tonChange = (e) => {\n\t\tthis.setState({value:e});\n\t}\n \n\tonHander = () => {\n\t\tthis.setState({value:\"eee\"})\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Button onClick={this.onHander}>外界控制</Button>\n\t\t\t\t<FormControl value={this.state.value} onChange={this.onChange}/>\t\n\t\t\t</div>\n\t\t\t\n\t\t)\n\t}\n}","desc":" "},{"example":<Demo3 />,"title":" 获取Input对象句柄 ","code":"/**\n * @title 获取Input对象句柄 \n * @description 获取对象句柄，两种方式。\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport FormControl from 'bee-form-control';\n\nclass Demo3 extends Component {\n       \n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n        \n    }\n\n\tonHander = () => {\n        \n        this.textInput.input.focus();\n\t\t// this.refs.test.input.focus();\n\t}\n\n    render() {\n        return (\n            <div className=\"wraper\">\n            \t<Button onClick={this.onHander}>获取input对象句柄</Button>\n\t\t\t\t\n\t\t\t\t<FormControl value={this.state.value} ref={(input) => { this.textInput = input; }} />\t\n\t\t\t\t\n\t\t\t\t<FormControl value={this.state.value} ref=\"test\" />\t\n\t\t\t</div>\n\n        )\n    }\n}\n","desc":" 获取对象句柄，两种方式。"},{"example":<Demo4 />,"title":" 设置文本框焦点事件 autoFocus","code":"/**\n * @title 设置文本框焦点事件 autoFocus 属性\n * @description 设置文本框焦点事件 autoFocus 属性\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport FormControl from 'bee-form-control';\n\nclass Demo4 extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n        \n    }\n \n    render() {\n        return (\n            <div className=\"wraper\"> \n\t\t\t\t<FormControl autoFocus value={this.state.value}  />\t\n\t\t\t</div>\n\n        )\n    }\n}\n","desc":" 设置文本框焦点事件 autoFocus 属性"}]


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
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
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
