/**
 * Created by chief on 17/4/6.
 */
import React, { Component } from "react";
import RangeCalendar from "rc-calendar/lib/RangeCalendar";
import FormControl from "bee-form-control";
import DatePicker from "rc-calendar/lib/Picker";
import InputGroup from 'bee-input-group';
import Icon from "bee-icon";
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
        this.setState({
            renderIcon: nextProps.renderIcon
        });
    }

    onChange = (value) => {
        //console.log('onChange', value);
        const props = this.props;
        let formatStr = props.format || 'YYYY-MM-DD';
        this.setState({
            value:value
        });

        //传入value和dateString
        if(props.onChange&&isValidRange(value)||value.length==0){
            if(value.length>0){
                props.onChange(value,`["${format(value[0],formatStr)}" , "${format(value[1],formatStr)}"]`);
            }
            else {
                props.onChange(null)
            }

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
            renderFooter={props.renderFooter}
        />
    );

      return (
          <DatePicker
              value = {this.state.value}
              animation={'animation' in props ? props.animation: "slide-up"}
              calendar={calendar}
              disabled={props.disabled}
          >
              {
                  ({}) => {
                      return (
                    <div className={classNames('calendar-picker','u-input-group','simple',props.className)}>
                        <FormControl
                            disabled={props.disabled}
                            placeholder={this.props.placeholder?this.props.placeholder:'start ~ end'}
                            value={isValidRange(value) && `${format(value[0],formatStr)} ~ ${format(value[1],formatStr)}` || ''}
                        />
                        <InputGroup.Button shape="border">
                            { props.renderIcon() }
                        </InputGroup.Button>
                    </div>
                );
                  }
              }
          </DatePicker>);
  }
}

Picker.defaultProps = {
    renderIcon: () => <Icon type="uf-calendar" />
}

export default Picker;
