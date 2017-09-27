/**
 * Created by chief on 17/4/6.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import FormControl from 'bee-form-control';
import DatePicker from 'rc-calendar/lib/Picker';

import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD';

const fullFormat = 'YYYY-MM-DD';

const cn = navigator.browserLanguage?navigator.browserLanguage:navigator.language.indexOf('zh') > -1

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

const Picker = React.createClass({
    getInitialState() {
        return {
            hoverValue: [],
        };
    },
    onHoverChange(hoverValue) {
        console.log(hoverValue);
        this.setState({ hoverValue });
    },
    render() {
        const props = this.props;
        const { showValue } = props;
        const calendar = (
            <RangeCalendar
                hoverValue={this.state.hoverValue}
                onHoverChange={this.onHoverChange}
                type={this.props.type}
                locale={cn ? zhCN : enUS}
                defaultValue={now}
                format={format}
                onChange={props.onChange}
                disabledDate={props.disabledDate}
            />);
        return (
            <DatePicker
                open={this.props.open}
                onOpenChange={this.props.onOpenChange}
                calendar={calendar}
                value={props.value}
            >
                {
                    () => {
                        return (
                            <span>
                <FormControl
                    placeholder={this.props.placeholder}

                    value={showValue && showValue.format(fullFormat) || ''}
                />
                </span>
                        );
                    }
                }
            </DatePicker>);
    },
});

const RangePicker = React.createClass({
    getInitialState() {
        return {
            startValue: null,
            endValue: null,
            startOpen: false,
            endOpen: false,
        };
    },

    onStartOpenChange(startOpen) {
        this.setState({
            startOpen,
        });
    },

    onEndOpenChange(endOpen) {
        this.setState({
            endOpen,
        });
    },

    onStartChange(value) {
        this.setState({
            startValue: value[0],
            startOpen: false,
            endOpen: true,
        });
    },

    onEndChange(value) {
        this.setState({
            endValue: value[1],
        });
    },

    disabledStartDate(endValue) {
        if (!endValue) {
            return false;
        }
        const startValue = this.state.startValue;
        if (!startValue) {
            return false;
        }
        return endValue.diff(startValue, 'days') < 0;
    },

    render() {
        const state = this.state;
        return (
            <div>
                    开始时间：
                    <Picker
                        onOpenChange={this.onStartOpenChange}
                        type="start"
                        showValue={state.startValue}
                        open={this.state.startOpen}
                        value={[state.startValue, state.endValue]}
                        onChange={this.onStartChange}
                        placeholder={this.props.placeholder}
                    />
                    结束时间：
                    <Picker
                        onOpenChange={this.onEndOpenChange}
                        open={this.state.endOpen}
                        type="end"
                        showValue={state.endValue}
                        disabledDate={this.disabledStartDate}
                        value={[state.startValue, state.endValue]}
                        onChange={this.onEndChange}
                        placeholder={this.props.placeholder}
                    />
            </div>);
    },
});




export default  RangePicker;


