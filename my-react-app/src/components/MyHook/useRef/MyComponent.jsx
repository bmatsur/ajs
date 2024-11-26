// userRef()    = "use Reference" doesn't cause re=renders when its value changes.
                // 1. Accessing/Interacting with DOM elements
                // 2. Handling Focus, Animations, and Transitions
                // 3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from 'react';

function MyComponent(){

    // let [number, setNumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3= useRef(null);

    useEffect(() => {
        console.log('component rendered')

    });

    function handleClick1(){
        // setNumber(n => n+1)
        // ref.current = ref.current + 1
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'yellow'
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }

    function handleClick2(){
        // setNumber(n => n+1)
        // ref.current = ref.current + 1
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = 'yellow'
        inputRef3.current.style.backgroundColor = ''
    }

    function handleClick3(){
        // setNumber(n => n+1)
        // ref.current = ref.current + 1
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = 'yellow'
    }

    return (
        <div>
            <button onClick={handleClick1}>Click Me1!</button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>Click Me2!</button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>Click Me3!</button>
            <   input ref={inputRef3} />
        </div>
    );
};

export default MyComponent