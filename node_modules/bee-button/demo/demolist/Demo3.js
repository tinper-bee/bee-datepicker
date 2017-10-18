/**
 *
 * @title 不同颜色的按钮
 * @description 通过`colors`属性控制按钮颜色
 *
 */

import React, { Component } from 'react';
import Button from '../../src';

export default class Demo3 extends Component {

    render () {
        return (
            <div className="demoPadding">
                    <Button colors="success">success</Button>
                    <Button colors="info">info</Button>
                    <Button colors="warning">warning</Button>
                    <Button colors="danger">danger</Button>
                <div className="divider"></div>
                    <Button shape="border" colors="success">success</Button>
                    <Button shape="border" colors="warning">warning</Button>
                    <Button shape="border" colors="info">info</Button>
                    <Button shape="border" colors="danger">danger</Button>
            </div>
        )
    }
}
