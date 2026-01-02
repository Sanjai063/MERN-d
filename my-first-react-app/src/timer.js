
import React, { useState,useEffect } from "react";

function Timer(){
    const[Seconds,setSeconds]=useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(pervSeconds => pervSeconds+1);
        },1000);

        return () => clearInterval(interval);
    },[]);
    return(
        <div>
            <h1>Timer Component</h1>
            <h2>Timer:{Seconds} seconds</h2>
        </div>
    );
}
export default Timer;