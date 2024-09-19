import { useState } from "react";

export default function ComponentUseState() {
    const [text, setText] = useState([10,20,30,50]);

    const handleIncrease = () => {
        setText([11,22,33]);
    };
    return (
        <>
            <h1>Counter: {text}</h1>
            <button onClick={handleIncrease}>+</button>
        </>
    );
}