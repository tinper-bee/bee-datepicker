/**
 * Created by chief on 17/4/6.
 */
import React, { Component } from "react";
import RangeCalendar from "rc-calendar/lib/RangeCalendar";
import FormControl from "bee-form-control";
import DatePicker from "rc-calendar/lib/Picker";

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";

function format(v) {
    return v ? v.format(formatStr) : '';
}
const formatStr = 'YYYY-MM-DD';

const fullFormat = "YYYY-MM-DD";

const cn = location.search.indexOf("cn") !== -1;

const now = moment();


function onStandaloneChange(value) {
    console.log('onChange');
    console.log(value[0] && format(value[0]), value[1] && format(value[1]));
}

function onStandaloneSelect(value) {
    console.log('onSelect');
    console.log(format(value[0]), format(value[1]));
}
function isValidRange(v) {
    return v && v[0] && v[1];
}

if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

class Picker extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        hoverValue: [],
        value: [],
    };
  }

    onChange = (value) => {
        console.log('onChange', value);
        this.setState({ value });
    }

    onHoverChange = (hoverValue) => {
        this.setState({ hoverValue });
    }

  render() {
    const props = this.props;
    const { showValue } = props;
    const calendar = (
        <RangeCalendar
            {...props}
            hoverValue={this.state.hoverValue}
            onHoverChange={this.onHoverChange}
            showWeekNumber={false}
            format={formatStr}
            dateInputPlaceholder={['start', 'end']}
            defaultValue={[now, now.clone().add(1, 'months')]}
            locale={cn ? zhCN : enUS}
            onChange={props.onChange}
            disabledDate={props.disabledDate}
        />
    );

      return (
          <DatePicker
              value={this.state.value}
              onChange={this.onChange}
              animation="slide-up"
              calendar={calendar}
          >
              {
                  ({ value }) => {
                      return (
                    <div className={'calendar-picker'}>
                        <FormControl
                            placeholder={this.props.placeholder}
                            value={isValidRange(value) && `${format(value[0])} ~ ${format(value[1])}` || ''}
                        />
                    </div>
                );
                  }
              }
          </DatePicker>);
  }
}

export default Picker;
