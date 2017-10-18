/**
 *
 * @title 手风琴效果的展示板组
 * @description 使用PanelGroup组件的accordion属性设置手风琴效果
 *
 */

import React, { Component } from 'react';
import { Row, Col } from 'bee-layout';
import { Panel, PanelGroup } from '../../src';


class Demo2 extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        activeKey: '1'
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(activeKey) {
      this.setState({ activeKey });
    }

    render () {
        return (
            <Row>
                <Col md={8} mdOffset={2}>
                    <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                      <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
                      <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
                    </PanelGroup>
                </Col>
            </Row>
        )
    }
}

export default Demo2;
