/**
 *
 * @title 默认按钮
 * @description 基础按钮
 *
 */

import React, { Component } from 'react';
import Button from '../../src';

export default class Demo1 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button>Default</Button>
                <Button disabled>disabled</Button>
                <Button shape="border">border</Button>
                <Button shape="round">round</Button>
            </div>
        )
    }
}
