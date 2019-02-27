/**
 * Created by chief on 17/4/6.
 */

import MonthCalendar from "rc-calendar/lib/MonthCalendar";
import React, { Component } from "react";
import Picker from "rc-calendar/lib/Picker";
import FormControl from "bee-form-control";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';

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
          animation={'animation' in props ? props.animation: "slide-up"}
          calendar={monthCalendar}
          open={this.state.open}
          value={state.value}
          onChange={this.onChange}
        >
          {({ value }) => {
            return (
                <InputGroup simple className="datepicker-input-group">
                  <FormControl
                    placeholder={this.props.placeholder}
                    className={this.props.className}
                    value={(value && value.format(props.format)) || ""}
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


MonthPicker.defaultProps = {
    renderIcon: () => <Icon type="uf-calendar" />
}

export default MonthPicker;
