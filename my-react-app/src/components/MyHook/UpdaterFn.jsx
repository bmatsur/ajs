// updateer fn = A fn passed as an arg to setState() usually
                //example setYear(arrow fn)
                //Used with multiple state updates & async fns

import React, {useState} from 'react'


function UpdaterFn() {

    const [count, setCount] = useState(0);

    const increment = () => {

        //takes the PENDING state to calc NEXT state

        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(c => c - 1);   //same as: setCount(count => count - 1);  //
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    const reset = () => {
        setCount(0);
    };


    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    );

};

export default UpdaterFn;