import React, {useState} from 'react'

function ObjectStateUpdate(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Toyota", 
                                    model: "Land Cruiser Prado"});


    function handleYearChange(event){
        setCar(c => ({...car, year: event.target.value}));
    };

    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value})) //c = previous state of a car
    };

    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}))
    };


    return(
        <>
            <p>Your favorite car is {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/> <br />
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
            <input type="text" value={car.model} onChange={handleModelChange}/> <br />
        </>
    );
}


export default ObjectStateUpdate;