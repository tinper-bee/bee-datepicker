
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\n *\n * @title 默认按钮\n * @description 基础按钮\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\n\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button>Default</Button>\n                <Button disabled>disabled</Button>\n                <Button shape=\"border\">border</Button>\n                <Button shape=\"round\">round</Button>\n            </div>\n        )\n    }\n}\n","desc":" 基础按钮"},{"example":<Demo2 />,"title":" 事件按钮","code":"/**\n *\n * @title 事件按钮\n * @description 点击按钮触发事件\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\n\n\n    constructor(props) {\n        super(props);\n    }\n\n    handleClick() {\n        alert(\"谢谢你点我\")\n    }\n\n    render() {\n        return (\n            <Button colors=\"primary\" onClick={ this.handleClick }>事件按钮</Button>\n        )\n    }\n}\n","desc":" 点击按钮触发事件"},{"example":<Demo3 />,"title":" 不同颜色的按钮","code":"/**\n *\n * @title 不同颜色的按钮\n * @description 通过`colors`属性控制按钮颜色\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\n\n\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                    <Button colors=\"success\">success</Button>\n                    <Button colors=\"info\">info</Button>\n                    <Button colors=\"warning\">warning</Button>\n                    <Button colors=\"danger\">danger</Button>\n                <div className=\"divider\"></div>\n                    <Button shape=\"border\" colors=\"success\">success</Button>\n                    <Button shape=\"border\" colors=\"warning\">warning</Button>\n                    <Button shape=\"border\" colors=\"info\">info</Button>\n                    <Button shape=\"border\" colors=\"danger\">danger</Button>\n            </div>\n        )\n    }\n}\n","desc":" 通过`colors`属性控制按钮颜色"},{"example":<Demo4 />,"title":" 不同大小的按钮","code":"/**\n *\n * @title 不同大小的按钮\n * @description 通过`size`属性控制按钮大小\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\n\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button size=\"sm\" colors=\"primary\">小按钮</Button>\n                <Button colors=\"primary\">默认</Button>\n                <Button size=\"lg\" colors=\"primary\">大按钮</Button>\n                <Button size=\"xg\" colors=\"primary\">巨大按钮</Button>\n            </div>\n        )\n    }\n}\n","desc":" 通过`size`属性控制按钮大小"}]


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
