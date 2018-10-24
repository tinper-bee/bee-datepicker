/**
 * Created by chief on 17/4/6.
 */

import YearPanel from "rc-calendar/lib/year/YearPanel";
import React, { Component } from "react";
import Picker from "rc-calendar/lib/Picker";
import FormControl from "bee-form-control";
import InputGroup from 'bee-input-group';
import Icon from "bee-icon";

class YearPicker extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            type: "year",
            value: props.value || props.defaultValue,
            open: false
        };
    }



    onChange = value => {
        this.setState({
            value
        });
    };


    onOpenChange = open => {
        this.setState({
            open
        });
    };

    onTypeChange = type => {
        this.setState({
            type
        });
    };

    render() {
        let state = this.state;

        let props = this.props;

        const Calendar = <YearPanel prefixCls={'rc-calendar-picker'} rootPrefixCls={'rc-calendar'}  {...props} />;

        return (
            <div>
                <Picker
                    onOpenChange={this.onOpenChange}
                    animation="slide-up"
                    calendar={Calendar}
                    prefixCls={'rc-calendar'}
                    className={'rc-calendar-year'}
                >
                    {({ value }) => {
                        return (
                            <InputGroup simple className="datepicker-input-group">
                                <FormControl
                                    placeholder={this.props.placeholder}
                                    className={this.props.className}
                                    value={(value && value.format(props.format)) || ""}
                                />
                                <InputGroup.Button shape="border">
                                { props.renderIcon() }
                                </InputGroup.Button>
                            </InputGroup>
                        );
                    }}
                </Picker>
            </div>
        );
    }
}


YearPicker.defaultProps = {
    renderIcon: () => <Icon type="uf-calendar" />
}

export default YearPicker;
