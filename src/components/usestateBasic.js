import React, { useState } from "react";

function UseState() {

    const [count, setCount] = useState(0);

    // count is the default value

    // setCount is a function used to change the default value

    const increment = () => {
        setCount(count + 1);

        // setCount((prevcount) => {
        //     return prevcount + 1;
        // })
        // setCount((prevcount) => {
        //     return prevcount + 1;
        // })
    }
    const decrement = () => {
        setCount(count - 1);

        // setCount((prevcount) => {
        //     return prevcount - 1;
        // })
        // setCount((prevcount) => {
        //     return prevcount - 1;
        // })
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )

}

export default UseState;