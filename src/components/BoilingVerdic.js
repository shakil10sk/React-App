export default function BoilingVerdic({celcius = 0}){

    if(celcius >= 100){
        return <p>The Water Would boil.</p>;
    }
    return <p>Water would not boil</p>;

}