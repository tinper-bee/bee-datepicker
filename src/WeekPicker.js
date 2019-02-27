/**
 * Created by chief on 17/4/6.
 */

import Calendar from "rc-calendar";
import React, { Component } from "react";
import Picker from "rc-calendar/lib/Picker";
import FormControl from "bee-form-control";
import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';

import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";
import YearPicker from "./YearPicker";

const cn = location.search.indexOf("cn") !== -1;

const now = moment();
if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

const format = "YYYY-Wo";

const style = `
.week-calendar {
  width: 386px;
}
.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-date {
  background: #ebfaff;
}

.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-selected-day .rc-calendar-date {
    background: #3fc7fa;
}

.week-calendar .week-calendar-sidebar {
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  width:100px;
  border-right: 1px solid #ccc;
}
.week-calendar .rc-calendar-panel {
  margin-left: 100px;
}
`;

class WeekPicker extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
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

  dateRender = current => {
    const selectedValue = this.state.value;
    if (
      selectedValue &&
      current.year() === selectedValue.year() &&
      current.week() === selectedValue.week()
    ) {
      return (
        <div className="rc-calendar-selected-day">
          <div className="rc-calendar-date">{current.date()}</div>
        </div>
      );
    }
    return <div className="rc-calendar-date">{current.date()}</div>;
  };

  lastWeek = () => {
    const value = this.props.value || now;
    value.add(-1, "weeks");
    this.setState({
      value,
      open: false
    });
  };
  nextWeek = () => {
      const value = this.props.value || now;
      value.add(+1, "weeks");
      this.setState({
          value,
          open: false
      });
  };

  renderSidebar = () => {
    return (
      <div className="week-calendar-sidebar" key="sidebar">
        <button
          className="week-calendar-sidebar-button"
          onClick={this.lastWeek.bind(this)}
          style={{ margin: 8 }}
        >
          上一周
        </button>
          <button
              className="week-calendar-sidebar-button"
              onClick={this.nextWeek.bind(this)}
              style={{ margin: 8 }}
          >
              下一周
          </button>
      </div>
    );
  };

  onTypeChange = type => {
    this.setState({
      type
    });
  };

  handleCalendarChange = (value) => {
      this.setState({ value: value });
  }

  render() {
    const state = this.state;
    const props = this.props;
    const value = state.value;
    const calendar = (
      <Calendar
        className="week-calendar"
        showWeekNumber
        renderSidebar={this.renderSidebar}
        dateRender={this.dateRender}
        locale={cn ? zhCN : enUS}
        format={format}
        dateInputPlaceholder={this.props.placeholder}
        defaultValue={now}
        showDateInput
        onChange={this.handleCalendarChange}
      />
    );
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: style }} />
        <Picker
          animation="slide-up"
          {...props}
          onOpenChange={this.onOpenChange}
          open={this.state.open}
          calendar={calendar}
          value={state.value}
        >
          {({ }) => {
            return (
                <InputGroup simple className="datepicker-input-group">
                  <FormControl
                    placeholder={this.props.placeholder}
                    disabled={state.disabled}
                    readOnly
                    tabIndex="-1"
                    className={this.props.className}
                    value={(value && value.format(format)) || ""}
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

WeekPicker.defaultProps = {
    renderIcon: () => <Icon type="uf-calendar" />
}

export default WeekPicker;
