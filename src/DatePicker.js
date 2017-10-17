/**
 * Created by chief on 17/4/6.
 */

import Calendar from 'rc-calendar';
import React,{Component} from 'react';
import Picker from 'rc-calendar/lib/Picker';
import FormControl from 'bee-form-control';
import ReactDOM from 'react-dom';



class DatePicker extends Component {

    constructor(props, context) {
        super(props, context);


        this.state =  {
            type:'month',
            value:props.value,
            open:false,
        }
    }

    onChange(value) {
        this.setState({
            value,
        });
    }

    onOpenChange(open) {
        this.setState({
            open,
        });
    }

    render() {

        var state = this.state;

        var props = this.props;


        const calendar = (
            <Calendar
                {...props}
            />
        );


        return (
            <div>
                <Picker

                    onOpenChange={this.onOpenChange.bind(this)}

                    animation="slide-up"

                    calendar={calendar}

                    open={this.state.open}

                    value={state.value}

                    onChange={this.onChange.bind(this)}

                >
                    {
                        ({value}) => {
                            return (

                                    <FormControl

                                        placeholder={this.props.placeholder}


                                        className={this.props.className}

                                        value={ value && value.format(props.format) || ''}
                                    />

                            );
                        }
                    }
                </Picker>
            </div>

        );
    }

}




export default  DatePicker;


