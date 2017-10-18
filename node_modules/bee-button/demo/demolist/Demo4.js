/**
 *
 * @title 不同大小的按钮
 * @description 通过`size`属性控制按钮大小
 *
 */

import React, { Component } from 'react';
import Button from '../../src';

export default class Demo4 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
            </div>
        )
    }
}
