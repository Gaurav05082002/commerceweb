import React, { useState } from 'react'
import './Product.css'
import { Itemse } from './Itemse';
import { Itemsc } from './Itemsc';
import { Itemsf } from './Itemsf';
import { Itemsh } from './Itemsh';
import { Bill   } from  './Bill';

const Items = ({id , description, title , img , price , quantity}) => {
   
    const [num ,setNum] = useState(0);
    const [text,setText] = useState("ADD");


    const incNum = () => {
        setNum(num+1)
        
    };
    const decNum = () => {
        if (num>0){
        setNum(num-1);}
        else { 
            setNum(0)
        }
     };

     const push = () => {
        alert(`your ${title} costs ${price} ruppes is added to the cart
Click on cart for payment`)
         setText("ADD ONE MORE")
         if (quantity===1) 
        {Itemsc.push(Itemse[id])
        Bill.push(Itemse[id].price)}
        else if (quantity===2) 
        {Itemsc.push(Itemsf[id])
        Bill.push(Itemsf[id].price)}
        else if (quantity===3) 
        {Itemsc.push(Itemsh[id])
        Bill.push(Itemsh[id].price)}
    }
    
    
    
    //  const add = (id) => {
    //     Itemsc.map((curItemse) => { 
    //                 return <Itemse key={curItemse.id} {...curItemse} />})
    //           console.log("yes");
    //  };
    //  const add = () => { Itemsc.map(()=>{return <h1>"hey"</h1>})}
    //  const add = ({description, title , img , price , num}) => {
    // //   Itemsc.map((curItemse) => { 
    // //         return <Itemse key={curItemse.id} {...curItemse} />})
    // Itemsc.map((Items)=>{ return <Items/>})
    //  }

    
    
   
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="image" />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="counter">
                    {/* <i className="fas fa-minus minus"></i>
                    <input type="number" placeholder="2" />
                    <i className="fas fa-plus add"></i> */}
                    {/* <button onClick={decNum}>-</button> */}
                    {/* <h3 className="count">{num}</h3> */}
                    {/* <button onClick={incNum}>+</button> */}
                  <button onClick={push}  className="add">{text}</button> 
                    
                    
                    
                </div>
                <div className="price">
                    <h3>{price}</h3>
                </div>
                <div className="remove-item">
                    <i className="fas fa-trash-alt reove"></i>
                </div>
            </div>

        </>
    )
}
 export default Items;
