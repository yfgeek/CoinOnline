import React, { Component, } from 'react'
import {
    Text,
} from 'react-native'

class Counter extends Component {
    static defaultProps = {
        commas: true,
        timeout: 500,
        steps: 10,
        decimal: 2,
    };

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            targetValue: props.value,
            originalValue: props.value,
            currentValue: props.value
        };
    }

    componentWillUnmount(){
        clearInterval(this._interval);
    }

    getValue(percent) {
        const diff = this.state.targetValue - this.state.originalValue;
        return (diff * percent) + parseFloat(this.state.originalValue);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentStep: 0,
            originalValue: this.state.currentValue || 0,
            targetValue: nextProps.value || 0
        });
        clearInterval(this._interval);
        this._interval = setInterval(()=>{
            if (this.state.currentStep >= this.props.steps) {
                clearInterval(this._interval);
            }
            this.setState({
                currentValue: this.getValue(this.state.currentStep / this.props.steps).toFixed(this.props.decimal),
                currentStep: this.state.currentStep + 1
            });
        }, this.props.timeout / this.props.steps);
    }

    static commas(num) {
        return (num || 0).toString().replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g, ',$1');
    }

    render() {
        let value =this.state.currentValue;
        if (this.props.commas) {
            value = Counter.commas(value);
        }
        return (
            <Text>
                {value}
            </Text>
        );
    }
}
export default Counter
