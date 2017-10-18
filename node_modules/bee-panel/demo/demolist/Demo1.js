/**
 *
 * @title 默认的展示板
 * @description 默认的展示板由header,body和footer组成。
 *
 */

import React, { Component } from 'react';
import { Con, Row, Col } from 'bee-layout';
import { Panel, PanelGroup } from '../../src';



class Demo1 extends Component {
    render () {
        return (
            <Row>
                <Col md={8} mdOffset={2}>
                    <Panel header="Panel header" footer='Panel footer'>
                      Panel content
                    </Panel>
                </Col>
            </Row>

        )
    }
}


export default Demo1;
