export default function ClickCounter({count,increamentCount}){
        return (
            <div>
                <button type="button" onClick={increamentCount} >
                    Clicked {count} time
                    </button>
            </div>
        );
    }
