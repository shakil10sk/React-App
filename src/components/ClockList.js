import Clock from "./Clock";

export default function ClockList({quantities = []}){
    return(
        <div>
            {quantities.map((val)=><Clock key={val}/>)}
        </div>
    );
}