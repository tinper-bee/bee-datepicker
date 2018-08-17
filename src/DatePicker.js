/**
 * Created by chief on 17/4/6.
 */

import Calendar from "rc-calendar";
import React, { Component } from "react";
import Picker from "rc-calendar/lib/Picker";
import FormControl from "bee-form-control";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import moment from "moment";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';

const timePickerElement = (
  <TimePickerPanel defaultValue={moment("00:00:00", "HH:mm:ss")} />
);

class DatePicker extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      type: "month",
      value: props.value || props.defaultValue || moment.Moment,
      open: props.open||false,

    };
  }

  onChange = value => {
    const props = this.props;

    this.setState({ value:value });
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
    this.setState({
        renderIcon: nextProps.renderIcon,
        open: nextProps.open
    });

  }
  handleCalendarChange = (value) => {
      const props = this.props;
      this.setState({ value: value });
      props.onChange(value, (value && value.format(props.format)) || '');
  }
  handleChange = value => {
    const props = this.props;
    this.setState({ value });
    //props.onChange(value, (value && value.format(props.format)) || '');
  };

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


    return (
      <div className={props.className}>
        <Picker
          {...props}
          {...pickerChangeHandler}
          onOpenChange={this.onOpenChange}
          animation="slide-up"
          calendar={calendar}
          open={this.state.open}
          value={state.value}
        >
          {() => {
            return (
              <InputGroup simple className="datepicker-input-group">
              <FormControl
                disabled={props.disabled}
                readOnly
                placeholder={this.props.placeholder}
                value={(value && value.format(props.format)) || ""}
                {...autofocus}
              />
              <InputGroup.Button shape="border">
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
  renderIcon: () => <Icon type="uf-calendar" />
}

export default DatePicker;
