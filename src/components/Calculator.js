
import React from "react";
import { convert, toCelcius, toFahrenheit } from "../lib/Converter";
import BoilingVerdic from "./BoilingVerdic";
import TempareatureInput from "./TempareatureInput";
export default class Calculator extends React.Component{

    state = {
        temperature: '',
        scale: '',
    }
    handleChange = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        })
    }
    render(){
        const {temperature,scale} = this.state;
        const celcius = scale === 'f' ? convert(temperature,toCelcius) : temperature;
        const farenhit = scale === 'c' ? convert(temperature,toFahrenheit) : temperature;
        return (
            <div>
                <TempareatureInput scale="c" temperature={celcius} onTemperatureChnge={this.handleChange}/>
                <TempareatureInput scale="f" temperature={farenhit} onTemperatureChnge={this.handleChange} />
                <BoilingVerdic celcius={parseFloat(temperature)} />
            </div>
        );
    }
}