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

function format(v) {
    return v ? v.format(formatStr) : '';
}
const formatStr = 'YYYY-MM-DD';

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
        value: props.defaultValue  || [],
    };
  }
    componentWillReceiveProps(nextProps){
        this.setState({
            value:nextProps.defaultValue || []
        })
    }

    onChange = (value) => {
        //console.log('onChange', value);
        this.setState({ value });
    }

    onHoverChange = (hoverValue) => {
        this.setState({ hoverValue });
    }

    remove = (e) => {
        console.log(e);
        this.setState({ value:''});
    }


    render() {
    const props = this.props;
    const { showValue,value } = props;
    const calendar = (
        <RangeCalendar
            {...props}
            hoverValue={this.state.hoverValue}
            onHoverChange={this.onHoverChange}
            showWeekNumber={false}
            format={formatStr}
            dateInputPlaceholder={['start', 'end']}
            defaultValue={[now, now.clone().add(1, 'months')]}
            locale={props.locale || zhCN }
            onChange={props.onChange}
            disabledDate={props.disabledDate}
        />
    );

      return (
          <DatePicker
              {...props}
              value={this.state.value}
              onChange={this.onChange}
              animation="slide-up"
              calendar={calendar}
          >
              {
                  ({value}) => {
                      return (
                    <div className={classNames('calendar-picker','u-input-group','simple',props.className)}>
                        <FormControl
                            placeholder={this.props.placeholder?this.props.placeholder:'start ~ end'}
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
