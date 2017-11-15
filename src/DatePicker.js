/**
 * Created by chief on 17/4/6.
 */

import Calendar from "rc-calendar";
import React, { Component } from "react";
import Picker from "rc-calendar/lib/Picker";
import FormControl from "bee-form-control";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import moment from "moment";

const timePickerElement = (
  <TimePickerPanel defaultValue={moment("00:00:00", "HH:mm:ss")} />
);

class DatePicker extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      type: "month",
      value: props.value || props.defaultValue,
      open: false
    };
  }

  onChange = value => {
    const props = this.props;
    // // if (!('value' in props)) {
    // //   this.setState({ value });
    // // }
    this.setState({
      value
    });
    props.onChange(value, (value && value.format(props.format)) || "");
  };

  onOpenChange = open => {
    this.setState({
      open
    });
  };
  componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }
  handleChange = value => {
    const props = this.props;
    if (!("value" in props)) {
      this.setState({ value });
    }
    props.onChange(value, (value && value.format(props.format)) || "");
  };

  render() {
    let state = this.state;
    let props = this.props;
    let value = state.value;

    let pickerChangeHandler = {};
    let calendarHandler = {};
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
        {...calendarHandler}
        timePicker={props.showTime ? timePickerElement : null}
        disabledDate={props.disabledDate}
        timePicker={props.timePicker}
        defaultValue={props.defaultPickerValue || moment()}
        dateInputPlaceholder={props.placeholder}
        prefixCls={props.prefixCls}
        className={props.calendarClassName}
        onOk={props.onOk}
        format={props.format}
        showToday={props.showToday}
        monthCellContentRender={props.monthCellContentRender}
      />
    );

    return (
      <div>
        <Picker
          {...props}
          {...pickerChangeHandler}
          onOpenChange={this.onOpenChange}
          animation="slide-up"
          calendar={calendar}
          open={this.state.open}
          defaultValue={state.value}
          onChange={this.onChange}
        >
          {() => {
            return (
              <FormControl
                disabled={props.disabled}
                readOnly
                placeholder={this.props.placeholder}
                className={this.props.className}
                value={(value && value.format(props.format)) || ""}
              />
            );
          }}
        </Picker>
      </div>
    );
  }
}

export default DatePicker;
