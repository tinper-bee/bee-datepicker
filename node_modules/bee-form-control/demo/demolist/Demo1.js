/**
 * @title 不同size Input
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

	render () {
		return (
			<div className="wraper">
				<FormControl value={this.state.value} onChange={this.onChange} size="sm"/>	
				<FormControl value={this.state.value} onChange={this.onChange}/>
				<FormControl value={this.state.value} onChange={this.onChange} size="lg"/>	
			</div>
			
		)
	}
}