/**
 * Created by chief on 17/4/6.
 */

import Calendar from "rc-calendar";
import React, { Component } from "react";
import { KeyCode } from 'tinper-bee-core';
import Picker from "rc-calendar/lib/Picker";
import FormControl from "bee-form-control";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import moment from "moment";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';

const timePickerElement = (
  <TimePickerPanel defaultValue={moment(moment().format("HH:mm:ss"), "HH:mm:ss")} />
);

let timerDatePicker = true;

class DatePicker extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      type: "month",
      value: props.value || props.defaultValue || moment.Moment,
      open: props.open||false,
      inputValue:(props.value&&props.value.format(props.format)) || (props.defaultValue&&props.defaultValue.format(props.format)) || '',
    };
  }

  onChange = value => {
    const props = this.props;

    this.setState({ value:value });
  };

  inputFocus=()=>{
    let input = document.querySelector('.rc-calendar-input');
    if(input){
      if(input.value){
        input.select()
      }else{
        input.focus()
      }
      input.onkeydown=(e)=>{
        if(e.keyCode == KeyCode.DELETE){
          input.value = '';
          this.props.onChange('','');
        }else if(e.keyCode == KeyCode.ESC||e.keyCode == KeyCode.ENTER){
          this.setState({
            open:false
          });
          let v = this.state.value;
          this.props.onOpenChange(false,v, (v && v.format(this.props.format)) || '');
        }
      }
    }
  }

  onOpenChange = open => {
      const props = this.props;
      const self = this;
      this.setState({
        open
      }); 
      setTimeout(function () {
        const value = self.state.value;
        props.onOpenChange(open,value, (value && value.format(props.format)) || '');
        self.inputFocus()
      },200)
      
  };
  componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
    if ("open" in nextProps) {
      this.setState({
        open: nextProps.open 
      });
    }
    if ("renderIcon" in nextProps) {
      this.setState({
        renderIcon: nextProps.renderIcon
      });
    }
  }
  handleCalendarChange = (value) => {
      const props = this.props;
      this.setState({ value: value,inputValue:(value && value.format(props.format)) || '' });
      //props.onChange(value, (value && value.format(props.format)) || '');
  }
  handleChange = value => {
    const props = this.props;
    this.setState({ value,inputValue:(value && value.format(props.format)) || '' });
    // props.onChange(value, (value && value.format(props.format)) || '');
    if(timerDatePicker){
      clearTimeout(this.timerout);
      props.onChange(value, (value && value.format(props.format)) || '');
      timerDatePicker=false;
      this.timerout = window.setTimeout(()=>{
        timerDatePicker=true
      },300)
    }
  }
  onClick = (e) =>{
    const props = this.props;
    if(props.keyboardInput)e.stopPropagation();
    let value = this.state.value;
    if(props.keyboardInput){
      props.onClick&&props.onClick(e.nativeEvent,value||null,this.state.inputValue);
    }else{
      props.onClick&&props.onClick(e.nativeEvent,value||null,(value && value.format(props.format)) || '');
    }
  }
  inputChange = (value,e) => {
    if(this.props.keyboardInput)e.stopPropagation();
    this.setState({
      inputValue:value
    });
    if(moment(value,this.props.format).isValid()){
      this.setState({
        value:moment(value,this.props.format)
      });
      value = moment(value,this.props.format);
      this.props.onChange(value, (value && value.format(this.props.format)) || '');
    }else{
      this.props.onChange(null,value);
    }
  }
  outInputFocus = (e)=>{
    if(this.props.hasOwnProperty('open'))e.stopPropagation();
    this.props.outInputFocus&&this.props.outInputFocus(e);
  }
  iconClick=(e)=>{
    this.props.iconClick&&this.props.iconClick(e);
  }
  outInputKeydown=(e)=>{
    if(e.keyCode == KeyCode.DELETE){
      this.setState({
        inputValue:''
      });
      this.props.onChange('','');
    }else if(e.keyCode == KeyCode.ESC){
      this.setState({
        open:false
      });
      let value = this.state.inputValue;
      if(moment(value,this.props.format).isValid()){
        this.setState({
          value:moment(value,this.props.format)
        });
        value = moment(value,this.props.format);
        this.props.onChange(value, (value && value.format(this.props.format)) || '');
      }else{
        this.props.onChange(null,value);
      }
    }
    else if(e.keyCode == KeyCode.F2){
      this.setState({
        open:true
      });
      this.onOpenChange(true);
    }
    this.props.outInputKeydown&&this.props.outInputKeydown(e);
  }
  render() {
    let state = this.state;
    let props = this.props;
    let value = state.value;
    let pickerChangeHandler = {};
    let calendarHandler = {};
    const autofocus = this.props.autofocus?{autofocus:'autofocus'}:null;

    if (props.showTime) {
      calendarHandler = {
        // fix https://github.com/ant-design/ant-design/issues/1902
        onSelect: this.handleChange
      };
    } else {
      pickerChangeHandler = {
        onChange: this.handleChange
      };
    }

    const calendar = (
      <Calendar
        timePicker={props.showTime ? timePickerElement : null}
        {...props}
        onChange={this.handleCalendarChange}
        value={this.state.value}
      />
    );

    let keyboardInputProps = {};
    if(props.keyboardInput){
      keyboardInputProps.readOnly=false;
      keyboardInputProps.onChange=this.inputChange;
      keyboardInputProps.value=state.inputValue;
    }else{
      keyboardInputProps.readOnly=true;
      keyboardInputProps.value=(value && value.format(props.format)) || ""
    }

    return (
      <div className={props.className}>
        <Picker
          animation="slide-up"
          {...props}
          {...pickerChangeHandler}
          onOpenChange={this.onOpenChange}
          calendar={calendar}
          mode = {'year'}
          open={this.state.open}
          value={state.value}
        >
          {() => {
            return (
              <InputGroup simple className="datepicker-input-group">
                  <FormControl
                    disabled={props.disabled}
                    placeholder={this.props.placeholder}
                    onClick={ (event) => {this.onClick(event)}}
                    focusSelect={props.defaultSelected}
                    onFocus={(v,e)=>{this.outInputFocus(e)}}
                    onKeyDown={this.outInputKeydown}
                    {...keyboardInputProps}
                    {...autofocus}
                  />
                  <InputGroup.Button shape="border" onClick={(e)=>{props.keyboardInput?this.iconClick(e):''}}>
                  { props.renderIcon() }
                  </InputGroup.Button>
                </InputGroup>

            );
          }}
        </Picker>
      </div>
    );
  }
}

DatePicker.defaultProps = {
  renderIcon: () => <Icon type="uf-calendar" />,
  focusOnOpen:true,
  defultSelect:false,
  onOpenChange:()=>{}
}

export default DatePicker;
