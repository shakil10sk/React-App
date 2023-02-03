
import React from "react";

const scleName = {
    c: 'Celcius',
    f: 'Fahrenheit',
};
export default function TempareatureInput ({temperature,scale,onTemperatureChnge}){

    // state = {
    //     temperature : ''
    // }

    // onTemperatureChnge = (e)=>{
    //     this.setState({
    //         temperature: e.target.value
    //     });
    // }

    // render(){
        // const {temperature} = this.state;
        // const {temperature,scale,onTemperatureChnge} = this.props;
        return (
            <fieldset>
                <legend>Enter Temperature in {scleName[scale]}</legend>
                <input type="text" value={temperature} onChange={(e)=>onTemperatureChnge(e,scale)} />
            </fieldset>
        );
    // }
}