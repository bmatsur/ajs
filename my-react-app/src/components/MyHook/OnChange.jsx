import React, {useState} from 'react';

// onChange = event handler used primarily with form elements
            //ex. input, textarea, select, radio etc.
            //Triggers a fn every time the value of the input changes
            
function OnChange() {
    
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shippig, setShipping] = useState('Delivery');


    function handleNameChange(event){
        setName(event.target.value);
    };

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    };

    function handleCommentChange(event){
        setComment(event.target.value);
    };

    function handlePaymentChange(event){
        setPayment(event.target.value)
    };

    function handleShippingChange(event){
        setShipping(event.target.value);
    };

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p>Quantity {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions' />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange} name="" id="">
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                        checked={shippig === "Pick Up"}
                        onChange={handleShippingChange} />
                Pick Up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery" 
                        checked={shippig === "Delivery"}
                        onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping {shippig}</p>
        </div>
    );
};


export default OnChange;