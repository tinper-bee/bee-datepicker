/**
 * @title 可控 Input
 * @description 
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

export default class Demo2 extends Component {
	constructor(props) {
      super(props);
      this.state = {
          value: "test"
      }
  	}
  	
	onChange = (e) => {
		this.setState({value:e});
	}
 
	onHander = () => {
		this.setState({value:"eee"})
	}

	render () {
		return (
			<div>
				<Button onClick={this.onHander}>外界控制</Button>
				<FormControl value={this.state.value} onChange={this.onChange}/>	
			</div>
			
		)
	}
}