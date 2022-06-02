/*import React, {useState} from 'react';
// import React from 'react';
import './Product.css';
import Items from "./Items";
import { Itemsh } from "./Itemsh"; 

const Cart = () => {
    
    const Check = () => {
        if ( Items.quantity > 0)
        {               
            item.map((curItems) => {
                return <Items key={curItems.id} {...curItems} />
             })
        }
         }

    const [item ,setItem] = useState(Itemsh);
    return (
        <div className="product">
            <div className="producthandel">
                {
                    <button onClick={Check}>show</button>   
                }
             </div>
        </div>
    )
}

export default Cart;
*/





// import React, {useState} from 'react';
// // import React from 'react';
// import './Product.css';
// import Items from "./Items";
// import { Itemsc } from "./Itemsc"; 

// const Cart = () => {
//     const [item ,setItem] = useState(Itemsc);
//     return (
//         <div className="product">
//             <div className="producthandel">
//                           {
//                             Items.map((curItems) => {
//                                 return <Items key={curItems.id} {...curItems} />
//                              })
//                         }
//             </div>

//         </div>
//     )
// }import React, {useState} from 'react';
// import React from 'react';

import React, { useState } from 'react';
// import React from 'react'; 

// import './Product.css';
import './Cart.css';
import Items from "./Items";
import { Itemse } from "./Itemse";
import { Itemsc } from "./Itemsc"
import { NavLink } from 'react-router-dom'
import { Bill } from './Bill'


const Producte = ({ id, description, title, img, price, quantity }) => {
    // const push = (curItems) => {
    //     Itemsc.push(...curItems);


    // }
    // var i;
    // const yes = () => {

    //     for (  i=0 ; i<Itemse.length ; i++)
    //         return <Items key={Itemse[i].id} {...Itemse } /> 

    // }
    const [run, setRun] = useState(0);
    const [item, setItem] = useState(Itemsc);

    const shown = () => {
        {
            //  Itemsc.map((id) => { setRun(run+Itemsc[id].price)})
            // alert(run)
            // console.log(Itemsc)
            // setRun(run+Itemsc[0].price)
            // setRun(run+Itemsc[1].price)
            // setRun(run+Itemsc[2].price)
            // setRun(run+Itemsc[3].price)
            if (Bill.length > 1) {
                // alert(Bill.reduce((curr, next) => curr + next))
                // Bill.reduce((curr, next) => curr + next);
                console.log(Bill.reduce((curr, next) => curr + next))
            }
            else {
                alert("your CART is empty .")
            }


            {
                document.getElementById("billhandel").style.zIndex = "5";
            }
        }
    
    }
    const back = () => {
        document.getElementById("billhandel").style.zIndex = "1";
    }
    return (<>
        <div className="thanks">
            THANKS FOR VISITING US; YOUR PRODUCTS ARE LISTED BELOW <hr />
            <button className="bill" onClick={shown}  >SHOW BILL</button>
            <button className="clear" onClick={() => { window.location.reload() }} title="this will delete all the items from the cart"> CLEAR CART</button>
            <span>if you use cart page for adding products    <NavLink className="refresh" to='/CART'>Click me</NavLink>   for refreshing cart</span>
        </div>
        <div className="product">
            <div className="producthandel">
                {
                    item.map((curItems) => {
                        return <Items key={curItems.id} {...curItems} />

                    })
                }

            </div>


        </div>
        <div className="billhandel" id="billhandel">
            <h1>THE FIVE STAR MARKET</h1>
            <hr />
            <h3>thank, for giving us chance for your service </h3>
            <hr />

            <h2>you have to pay {Bill.reduce((curr, next) => curr + next)} ruppes only  </h2>
            <button className="clear">PAY</button>
            <button className="bill" id="backcart" onClick={back}>BACK TO THE CART</button>

        </div>
    </>)
}

export default Producte;


// export default Cart;






