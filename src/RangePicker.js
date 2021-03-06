/**
 * Created by chief on 17/4/6.
 */
import React, { Component } from "react";
import RangeCalendar from "./rc-calendar/RangeCalendar";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import FormControl from "bee-form-control";
import Picker from "./rc-calendar/Picker";
import InputGroup from 'bee-input-group';
import Icon from "bee-icon";
import classNames from 'classnames';
import { KeyCode } from 'tinper-bee-core';
import { formatDate } from './rc-calendar/util';
import zhCN from "./locale/zh_CN";
import omit from 'omit.js';

import moment from "moment";
import "moment/locale/zh-cn";

// function formatDate(value,format) {
//     if (!value) {
//         return '';
//       }

//       if (Array.isArray(format)) {
//         format = format[0];
//       }

//       return value.formatDate(format);
// }

const fullFormat = "YYYY-MM-DD";

const cn = typeof window !== 'undefined' ? location.search.indexOf("cn") !== -1 : true;

const now = moment();



function isValidRange(v) {
    return v && v[0] && v[1];
}

if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

/**
 * @desc 阻止事件冒泡传播兼容ie
 */
function stopBubble(event) {
//如果提供了事件对象，则这是一个非IE浏览器
    if (event && event.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        event.stopPropagation();
        event.preventDefault();// 取消事件的默认行为
    } else {
        //否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
        window.event.returnValue = false;//阻止事件的默认行为
    }
}


class RangePicker extends Component {
    constructor(props, context) {
        super(props, context);
        const initialValue = props.value || props.defaultValue
        this.state = {
            hoverValue: [],
            value: this.initValue(props),
            open: props.open||false,
            panelValues: (initialValue && initialValue.length) ? null : this.modifyPanelValues(props.panelValues)
        };
    }
    modifyPanelValues = values => {
        if (!values) return null
        if (typeof values === 'string' && moment(values).isValid()) {
            const nextMonthDate = moment(values).clone().add(1, 'months').format('YYYY-MM-DD')
            return [values, nextMonthDate]
        } else if (values && values.length && values.length === 2) {
            return values.map(value => {
                if (moment(value).isValid()) {
                    return value
                } else {
                    return ''
                }
            })
        }
        return null
    }
    initValue=(props)=>{
        let valueProp = props.value || props.defaultValue||[];
        let values = [];
        for(let i = 0;i<2;i++){
            let value = valueProp[i]||'';
            if(value){
                if(typeof value == 'string'){
                    if(moment(value).isValid()){
                        values.push(moment(value));
                    }else{
                        console.error('value is not in the correct format');
                        values.push('');
                    }
                  }else if(value.format&&value.isValid()){
                    values.push(value);
                  }else{
                    console.error('value is not in the correct format');
                    values = []
                  }
            }else{
                values.push('')
            }
        }
        return values;
    }
    componentWillReceiveProps(nextProps){
        let value = null
        if ("value" in nextProps) {
            value = this.initValue(nextProps)
            this.setState({
                value
            });
        }
        if ("panelValues" in nextProps) {
            const isValueEmpty = !(value || []).some(item => item)
            this.setState({
                panelValues: !isValueEmpty ? null : this.modifyPanelValues(nextProps.panelValues)
            });
        }
        if ("open" in nextProps) {
            this.setState({
              open: nextProps.open
            });
        }
        this.setState({
            renderIcon: nextProps.renderIcon
        });
    }

    clearHoverValue = () => this.setState({ hoverValue: [] });

    onChange = (value) => {
        const props = this.props;
        let formatStr = props.format || 'YYYY-MM-DD';
        if(value.length < 2){ return }
        this.setState({
            value:value
        });

        //传入value和dateString
        if(props.onChange&&isValidRange(value)||value.length==0){
            if(value.length>0){
                props.onChange(value,`["${formatDate(value[0],formatStr)}" , "${formatDate(value[1],formatStr)}"]`, [`${formatDate(value[0],formatStr)}` , `${formatDate(value[1],formatStr)}`]);
            }
            else {
                props.onChange(null)
            }

        }else{
            props.onPanelChange&&props.onPanelChange(value);
        }
    }

    onHoverChange = (hoverValue) => {
        this.setState({ hoverValue });
        this.props.onHoverChange&&this.props.onHoverChange(hoverValue)
    }

    remove = (e) => {
        this.setState({ value:''});
    }
    handleCalendarChange = (value) => {

    }
    onMouseLeave = (e) => {
        this.setState({
            showClose: false
        })
    }
    onMouseEnter = (e) => {
        if(!this.valueIsEmpty(this.state.value)){
            this.setState({
                showClose: true
            })
        }
    }
    //判断value是否为空
    valueIsEmpty=(value)=>{
        if(value){
            if(value.length==0){
                return true;
            }else{//value.length>0
                let flag = true;
                if(value[0]||value[1])flag=false;
                return flag;
            }
        }else{
            return true
        }

    }
    clear = (e) => {
        stopBubble(e);
        this.setState({
            value: []
        })
        this.props.onChange && this.props.onChange([], []);
        this.props.onFormControlClear&&this.props.onFormControlClear();
    }
    onOpenChange = open => {
        const props = this.props;
        const self = this;
        // let {value} = this.state;
        // if(!isValidRange(value)){
        //     debugger
        // }
        if (open === false) {
            this.clearHoverValue();
        }

        this.setState({
          open
        },function(){
          if(open){
            setTimeout(() => {
              self.inputFocus()
            }, 0);
          }
        });
        props.onOpenChange && props.onOpenChange(open);
        if(open){
            setTimeout(()=>{
              self.inputFocus()
            },200);
        }
    };

    outInputFocus = (e)=>{
        if(this.props.hasOwnProperty('open'))this.isOpenStopPropagation(e);
        this.props.outInputFocus&&this.props.outInputFocus(e);
    }

    inputFocus=()=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        if(!inputs){ return }
        if(inputs[0].value){
            inputs[0].select()
        }else{
            inputs[0].focus()
        }
        inputs[0].onkeydown=this.keydownLeft;
        inputs[1].onkeydown=this.keydownRight;
    }

    keydownLeft=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        if(e.keyCode == KeyCode.ESC){
            this.setState({
                open:false
            });
            this.props.onOpenChange(false,v, (v && this.getValue(v)) || '');
        }
        if(e.keyCode == KeyCode.RIGHT||e.keyCode == KeyCode.LEFT){
            inputs[1].focus()
        }
    }
    keydownRight=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        if(e.keyCode == KeyCode.ESC){
            this.setState({
                open:false
            });
            this.props.onOpenChange(false,v, (v && this.getValue(v)) || '');
        }
        if(e.keyCode == KeyCode.LEFT||e.keyCode == KeyCode.RIGHT){
            inputs[0].focus()
        }
    }
    //日期面板中输入框的失焦事件
    onStartInputBlur=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        let startValue,endValue;
        if(inputs) {
            startValue = inputs[0].value ? inputs[0].value : '';
            endValue = inputs[1].value ? inputs[1].value : '';
        }
        this.props.onStartInputBlur && this.props.onStartInputBlur(e, startValue, `["${startValue}" , "${endValue}"]`);
    }
    onEndInputBlur=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        let startValue,endValue;
        if(inputs) {
            startValue = inputs[0].value ? inputs[0].value : '';
            endValue = inputs[1].value ? inputs[1].value : '';
        }
        this.props.onEndInputBlur && this.props.onEndInputBlur(e, endValue, `["${startValue}" , "${endValue}"]`);
    }
    //阻止组件内部事件冒泡到组件外部容器
    isOpenStopPropagation = (e) => {
        if(this.state.open) stopBubble(e);//只有日期面板被打开的时候才阻止冒泡，否则会影响外侧的tooltips触发
    }
    onOk = (value) => {
        this.props.onOk && this.props.onOk(value);
    }
    render() {
    const props = this.props;
    const { showClose ,onChange, showHour,showMinute,showSecond,tabIndex,...others } = props;
    const {value,open} = this.state;
    let formatStr = props.format || 'YYYY-MM-DD';
    const timePickerElement = (
        <TimePickerPanel
        showHour={showHour} showMinute={showMinute} showSecond={showSecond}
        defaultValue={moment(moment().format("HH:mm:ss"), "HH:mm:ss")} />
      );
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
            showClear={ props.showClear }
            showOk={props.showOk}
            showToday={props.showToday}
            renderFooter={props.renderFooter}
            timePicker={props.showTime ? timePickerElement : null}
            renderError={props.renderError}
            onStartInputBlur={this.onStartInputBlur}
            onEndInputBlur={this.onEndInputBlur}
            onClear={this.clear}
            onOk={this.onOk}
            validatorFunc={props.validatorFunc}
            panelValues={this.state.panelValues || null}
            style={props.dropdownStyle}
        />
    );
      return (
          <div
              onClick={this.isOpenStopPropagation} onMouseOver={this.isOpenStopPropagation}
          {...omit(others, [
            'closeIcon',
            'renderIcon',
            'showClear',
            'showToday',
            'locale',
            'placeholder',
            'showOk',
            'dateInputPlaceholder',
            'onPanelChange',
            'onStartInputBlur',
            'onEndInputBlur',
            'renderFooter',
            'showTime',
            'disabledDate',
            'disabledTime'
          ])}
          >
          <Picker
              {...props}
              value = {value}
              animation={'animation' in props ? props.animation : "slide-up"}
              calendar={calendar}
              disabled={props.disabled}
              dropdownClassName={props.dropdownClassName}
              onOpenChange={this.onOpenChange}
              open={open}
          >
              {
                  ({}) => {
                      return (
                    <div className={classNames('calendar-picker','u-input-group','simple',props.className)}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <FormControl
                            placeholder={this.props.placeholder?this.props.placeholder:'start ~ end'}
                            value={isValidRange(value) && (this.props.inputShowValue&&this.props.inputShowValue[0]&&this.props.inputShowValue[1]?`${this.props.inputShowValue[0]} ~ ${this.props.inputShowValue[1]}`:`${formatDate(value[0],formatStr)} ~ ${formatDate(value[1],formatStr)}`) || ''}
                            disabled={props.disabled}
                            onFocus={(v,e)=>{this.outInputFocus(e)}}
                            tabIndex={tabIndex}
                        />
                        {
                            showClose&&(!this.valueIsEmpty(value))&&this.state.showClose&&(!props.disabled)?(
                            <InputGroup.Button shape="border"
                                onClick={this.clear}>
                                { props.closeIcon() }
                            </InputGroup.Button>
                            ):<InputGroup.Button shape="border">
                                { props.renderIcon() }
                            </InputGroup.Button>
                        }
                    </div>
                );
                  }
              }
          </Picker>
        </div>);
  }
}

RangePicker.defaultProps = {
    closeIcon:()=><Icon type="uf-close-c"/>,
    renderIcon: () => <Icon type="uf-calendar" />,
    locale:zhCN,
    showClear:true,
    showToday:true,
    showOk:true,
    showClose:true,
    showSecond:true,
    showHour:true,
    showMinute:true,
    validatorFunc:()=>{
        return true;
    }
}

export default RangePicker;
