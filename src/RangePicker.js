/**
 * Created by chief on 17/4/6.
 */
import React, { Component } from "react";
import RangeCalendar from "rc-calendar/lib/RangeCalendar";
import FormControl from "bee-form-control";
import DatePicker from "rc-calendar/lib/Picker";
var classNames = require('classnames');

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";

import moment from "moment";
import "moment/locale/zh-cn";

function format(v,f) {
    return v ? v.format&&v.format(f) : '';
}

const fullFormat = "YYYY-MM-DD";

const cn = location.search.indexOf("cn") !== -1;

const now = moment();



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
        value: props.value || props.defaultValue || [],
    };
  }
    componentWillReceiveProps(nextProps){
        if ("value" in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    onChange = (value) => {
        //console.log('onChange', value);
        const props = this.props;
        let formatStr = props.format || 'YYYY-MM-DD';
        this.setState({
            value:value
        });
        //传入value和dateString
        if(props.onChange&&isValidRange(value)){
            props.onChange(value,`["${format(value[0],formatStr)}" , "${format(value[1],formatStr)}"]`);
        }
    }

    onHoverChange = (hoverValue) => {
        this.setState({ hoverValue });
    }

    remove = (e) => {
        console.log(e);
        this.setState({ value:''});
    }
    handleCalendarChange = (value) => {

    }

    render() {
    const props = this.props;
    const { showValue } = props;
    const {value} = this.state;
    let formatStr = props.format || 'YYYY-MM-DD';

    const calendar = (
        <RangeCalendar
            hoverValue={this.state.hoverValue}
            onHoverChange={this.onHoverChange}
            showWeekNumber={false}
            format={formatStr}
            dateInputPlaceholder={props.dateInputPlaceholder||['start', 'end']}
            locale={props.locale || zhCN }
            onChange={this.onChange}
            disabledDate={props.disabledDate}
            showClear={ props.showClear||false}
            showOk={props.showOk||true}
        />
    );

      return (
          <DatePicker
              value = {this.state.value}
              animation="slide-up"
              calendar={calendar}
          >
              {
                  ({}) => {
                      return (
                    <div className={classNames('calendar-picker','u-input-group','simple',props.className)}>
                        <FormControl
                            placeholder={this.props.placeholder?this.props.placeholder:'start ~ end'}
                            value={isValidRange(value) && `${format(value[0],formatStr)} ~ ${format(value[1],formatStr)}` || ''}
                        />
                    </div>
                );
                  }
              }
          </DatePicker>);
  }
}

export default Picker;
