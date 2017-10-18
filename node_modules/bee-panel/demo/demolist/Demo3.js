/**
 *
 * @title 可折叠的展示板
 * @description 设置展示板Panel的collapsible属性设置可折叠
 *
 */

import React, { Component } from 'react';
import { Row, Col } from 'bee-layout';
import { Panel, PanelGroup } from '../../src';
import Button from 'bee-button';


class Demo3 extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        open: true
      };
    }
    render () {
        return (

            <Row>
                <Col md={4} mdOffset={2}>
                    <Button colors="primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
                      click
                    </Button>
                    <Panel collapsible expanded={this.state.open}>
                        "来玩躲猫猫啊~~"
                    </Panel>
                </Col>
            </Row>
        )
    }
}

export default Demo3;
