/**
 * Created by chief on 17/4/6.
 */

import MonthCalendar from "rc-calendar/lib/MonthCalendar";
import React, { Component } from "react";
import Picker from "rc-calendar/lib/Picker";
import FormControl from "bee-form-control";

class MonthPicker extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      type: "month",
      value: props.value || props.defaultValue,
      open: false
    };
  }

  onChange = value => {
    this.setState({
      value
    });
  };

  onOpenChange = open => {
    this.setState({
      open
    });
  };

  onTypeChange = type => {
    this.setState({
      type
    });
  };

  render() {
    let state = this.state;

    let props = this.props;

    const monthCalendar = <MonthCalendar {...props} />;

    return (
      <div>
        <Picker
          onOpenChange={this.onOpenChange}
          animation="slide-up"
          calendar={monthCalendar}
          open={this.state.open}
          value={state.value}
          onChange={this.onChange}
        >
          {({ value }) => {
            return (
              <FormControl
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
export default MonthPicker;
