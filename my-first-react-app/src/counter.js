import React from "react";
import { useState } from "react";

function Counter(props){
    const [Count, setCount]=useState(0);
    
    return(
        <div>
            <h1> Counter</h1>
            <h2> Count:{Count}</h2>


            <button onClick={() => setCount(Count+1)}>Increase</button>
        </div>
    )
}
export default Counter;