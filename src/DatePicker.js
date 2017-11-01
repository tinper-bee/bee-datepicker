/**
 * Created by chief on 17/4/6.
 */

import Calendar from 'rc-calendar';
import React,{Component} from 'react';
import Picker from 'rc-calendar/lib/Picker';
import FormControl from 'bee-form-control';



class DatePicker extends Component {

    constructor(props, context) {
        super(props, context);


        this.state =  {
            type:'month',
            value:props.value,
            open:false,
        }
    }

    onChange = (value) => {
        this.setState({
            value,
        });
    }

    onOpenChange = (open) => {
        this.setState({
            open,
        });
    }

    render() {

        let state = this.state;

        let props = this.props;


        const calendar = (
            <Calendar
                {...props}
            />
        );


        return (
            <div>
                <Picker

                    onOpenChange={this.onOpenChange}

                    animation="slide-up"

                    calendar={calendar}

                    open={this.state.open}

                    value={state.value}

                    onChange={this.onChange}

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


