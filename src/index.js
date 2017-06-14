import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import DatePicker from  './DatePicker';
import MonthPicker from  './MonthPicker';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';


DatePicker.MonthPicker = MonthPicker;
DatePicker.RangePicker = RangePicker;
DatePicker.WeekPicker = WeekPicker;


export default DatePicker;

