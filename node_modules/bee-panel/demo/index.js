
import { Con, Row, Col } from 'bee-layout';
import { Panel, PanelGroup } from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 默认的展示板","code":"/**\n *\n * @title 默认的展示板\n * @description 默认的展示板由header,body和footer组成。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Con, Row, Col } from 'bee-layout';\nimport { Panel, PanelGroup } from 'bee-panel';\n\n\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <Row>\n                <Col md={8} mdOffset={2}>\n                    <Panel header=\"Panel header\" footer='Panel footer'>\n                      Panel content\n                    </Panel>\n                </Col>\n            </Row>\n\n        )\n    }\n}\n\n\n\n","desc":" 默认的展示板由header,body和footer组成。"},{"example":<Demo2 />,"title":" 手风琴效果的展示板组","code":"/**\n *\n * @title 手风琴效果的展示板组\n * @description 使用PanelGroup组件的accordion属性设置手风琴效果\n *\n */\n\nimport React, { Component } from 'react';\nimport { Row, Col } from 'bee-layout';\nimport { Panel, PanelGroup } from 'bee-panel';\n\n\nclass Demo2 extends Component {\n    constructor(...args) {\n      super(...args);\n      this.state = {\n        activeKey: '1'\n      };\n      this.handleSelect = this.handleSelect.bind(this);\n    }\n    handleSelect(activeKey) {\n      this.setState({ activeKey });\n    }\n\n    render () {\n        return (\n            <Row>\n                <Col md={8} mdOffset={2}>\n                    <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>\n                      <Panel header=\"Panel 1\" eventKey=\"1\">Panel 1 content</Panel>\n                      <Panel header=\"Panel 2\" eventKey=\"2\">Panel 2 content</Panel>\n                    </PanelGroup>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":" 使用PanelGroup组件的accordion属性设置手风琴效果"},{"example":<Demo3 />,"title":" 可折叠的展示板","code":"/**\n *\n * @title 可折叠的展示板\n * @description 设置展示板Panel的collapsible属性设置可折叠\n *\n */\n\nimport React, { Component } from 'react';\nimport { Row, Col } from 'bee-layout';\nimport { Panel, PanelGroup } from 'bee-panel';\nimport Button from 'bee-button';\n\n\nclass Demo3 extends Component {\n    constructor(...args) {\n      super(...args);\n      this.state = {\n        open: true\n      };\n    }\n    render () {\n        return (\n\n            <Row>\n                <Col md={4} mdOffset={2}>\n                    <Button colors=\"primary\" onClick={ ()=> this.setState({ open: !this.state.open })}>\n                      click\n                    </Button>\n                    <Panel collapsible expanded={this.state.open}>\n                        \"来玩躲猫猫啊~~\"\n                    </Panel>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":" 设置展示板Panel的collapsible属性设置可折叠"}]


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
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
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
