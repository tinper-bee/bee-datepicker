/**
 * Created by chief on 17/4/6.
 */

import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import React,{Component} from 'react';
import Picker from 'rc-calendar/lib/Picker';
import FormControl from 'bee-form-control';

class MonthPicker extends Component {

    constructor(props, context) {
        super(props, context);

        this.state =  {
            type:'month',
            value:props.value,
            open:false
        }
    }

    onChange(value) {
        //console.log('DatePicker change: ', (value && value.format(this.props.format)));
        this.setState({
            value,
        });
    }

    onOpenChange(open) {
        this.setState({
            open,
        });
    }

    onTypeChange(type) {
        this.setState({
            type,
        });
    }

    render() {

        var state = this.state;

        var props = this.props;


        const monthCalendar = (
            <MonthCalendar
                {...props}
            />
        );

        return (
            <div>
                <Picker

                    onOpenChange={this.onOpenChange.bind(this)}

                    animation="slide-up"

                    calendar={monthCalendar}

                    open={this.state.open}

                    value={state.value}

                    onChange={this.onChange.bind(this)}

                >
                    {
                        ({ value }) => {
                            return (

                                <FormControl
                                    placeholder={this.props.placeholder}

                                    className={this.props.className}

                                    value={value && value.format(props.format) || ''}
                                />

                            );
                        }
                    }
                </Picker>
            </div>

        );
    }

}
export default  MonthPicker;