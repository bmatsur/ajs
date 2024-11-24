import React, {useState, useEffect} from "react";

function WidthHeight(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener("resize", handleResize); //One Event listener added
        console.log('event listnere added')

        return() => {
            window.removeEventListener('resize', handleResize);
            console.log('event listener removed')
        };
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height]);

  

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return(
    <>
        <p>Window width: {width}px</p>
        <p>Window heigh: {height}px</p>
    </>);
};

export default WidthHeight;