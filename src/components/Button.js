import React from "react";
class Button extends React.Component{

    shouldComponentUpdate(nextProps,nextState){

        const {change:curentChange,locale:curentlocale}= this.props;
        const {change:nextChange,locale:nextlocale} = nextProps;

        if(curentChange === nextChange && nextlocale === curentlocale ){
            return false;
        }else{
            return true;
        }
    }

    render(){
        const {change,locale,children} = this.props;
        return (
            <button type="button" onClick={() => change(locale) }> {locale==='bn-BD' ? 'Change Clock' :'ঘডি পরিবর্তন করুন'} </button>
        );
    }
}
export default Button;