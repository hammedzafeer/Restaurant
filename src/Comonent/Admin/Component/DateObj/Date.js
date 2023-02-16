import { useEffect } from "react";
import { useState } from "react";

function DateObj(props) {
    // console.log(props.Dates);
    const [Dates, setDates] = useState();
    useEffect(() => {
    let d = new Date(props.Dates);
    let newDate = d.toLocaleString();
    // console.log(d.toLocaleString());
    setDates(newDate)    
    }, [])
    
    return ( 
        <>
            <td>{Dates}</td>
        </>
     );
}

export default DateObj;