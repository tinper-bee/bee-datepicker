
import { Con, Row, Col } from '../src';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基础布局","code":"/**\n *\n * @title 基础布局\n * @description 使用<Row>组件和<Col>组件进行页面栅格切分\n *\n */\n\nimport React, { Component } from 'react';\nimport { Con, Row, Col } from 'bee-layout';\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <Row>\n                <Col md={12} xs={12} sm={12} ><div className='grayDeep'>12</div></Col>\n                <Col md={6} xs={6} sm={6} ><div className='gray'>6</div></Col>\n                <Col md={6}  xs={6} sm={6}><div className='grayLight'>6</div></Col>\n                <Col md={4}  xs={4} sm={4}><div className='grayDeep'>4</div></Col>\n                <Col md={4}  xs={4} sm={4}><div className='gray'>4</div></Col>\n                <Col md={4}  xs={4} sm={4}><div className='grayLight'>4</div></Col>\n                <Col md={3}  xs={3} sm={3}><div className='grayDeep'>3</div></Col>\n                <Col md={3}  xs={3} sm={3}><div className='gray'>3</div></Col>\n                <Col md={3}  xs={3} sm={3}><div className='grayLight'>3</div></Col>\n                <Col md={3}  xs={3} sm={3}><div className='grayDeep'>3</div></Col>\n                <Col md={2}  xs={2} sm={2}><div className='gray'>2</div></Col>\n                <Col md={2}  xs={2} sm={2}><div className='grayLight'>2</div></Col>\n                <Col md={2}  xs={2} sm={2}><div className='grayDeep'>2</div></Col>\n                <Col md={2}  xs={2} sm={2}><div className='gray'>2</div></Col>\n                <Col md={2}  xs={2} sm={2}><div className='grayLight'>2</div></Col>\n                <Col md={2}  xs={2} sm={2}><div className='grayDeep'>2</div></Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 使用<Row>组件和<Col>组件进行页面栅格切分"},{"example":<Demo2 />,"title":" 偏移的栅格","code":"/**\n *\n * @title 偏移的栅格\n * @description 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量\n *\n */\n\nimport React, { Component } from 'react';\nimport { Con, Row, Col } from 'bee-layout';\n\nclass Demo2 extends Component {\n    render () {\n        return (\n            <Row>\n                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='grayDeep'>3 offset-3</div></Col>\n                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='gray'>3 offset-3</div></Col>\n                <Col md={6} mdOffset={6} xs={6} xsOffset={6} sm={6} smOffset={6}><div className='grayLight'>6 offset-6</div></Col>\n                <Col md={4} mdOffset={2} xs={4} xsOffset={2} sm={4} smOffset={2}><div className='gray'>4 offset-2</div></Col>\n                <Col md={2} mdOffset={3} xs={2} xsOffset={3} sm={2} smOffset={3}><div className='grayLight'>2 offset-3</div></Col>\n                <Col md={6} mdOffset={3} xs={6} xsOffset={3} sm={6} smOffset={3}><div className='grayDeep'>6 offset-3</div></Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":" 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量"},{"example":<Demo3 />,"title":" 平移的栅格","code":"/**\n *\n * @title 平移的栅格\n * @description 通过设置mdPull, mdPush来控制平移的量\n *\n */\n\nimport React, { Component } from 'react';\nimport { Con, Row, Col } from 'bee-layout';\n\nclass Demo3 extends Component {\n    render () {\n        return (\n            <Row>\n            <Col md={8} mdPush={4} xs={8} xsPush={4} sm={8} smPush={4} >\n            <div className='grayDeep'>8 push-4</div>\n            </Col>\n            <Col md={4} mdPull={8} xs={4} xsPull={8} sm={4} smPull={8}  >\n            <div className='gray'>4 pull-8</div>\n            </Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":" 通过设置mdPull, mdPush来控制平移的量"}]


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
