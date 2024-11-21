// click events on react

function Button2(){


    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // };



    const handleClick = (e) => e.target.textContent = 'Ouch!!!';

    return (
        <button onDoubleClick={(e) => handleClick(e)}>Clik me</button>
    );
}

export default Button2