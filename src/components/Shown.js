import React, { useState } from 'react'
import { Itemsc } from "./Itemsc"
import './Cart.css';
import Items from "./Items";

const Shown = () => {
    const [amount , setAmount] = useState[0];
    const fun = () => {
       Itemsc.forEach(element => { setAmount(amount+element.price)
           
       });
    }
    return (
        <div>
            <button onClick={fun}>show bill</button>
            <h1>{amount}</h1>
        </div>
    )
}

export default Shown;
