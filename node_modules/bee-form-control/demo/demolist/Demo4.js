/**
 * @title 设置文本框焦点事件 autoFocus 属性
 * @description 设置文本框焦点事件 autoFocus 属性
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

class Demo4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
        
    }
 
    render() {
        return (
            <div className="wraper"> 
				<FormControl autoFocus value={this.state.value}  />	
			</div>

        )
    }
}
export default Demo4;