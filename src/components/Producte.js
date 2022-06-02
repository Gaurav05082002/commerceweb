import React, {useState} from 'react';
// import React from 'react';
import './Product.css';
import Items from "./Items";
import { Itemse } from "./Itemse"; 

import { Itemsc } from "./Itemsc";


const Producte = () => {
    // const push = (curItems) => {
    //     Itemsc.push(...curItems);

    // }
    // var i;
    // const yes = () => {
    
    //     for (  i=0 ; i<Itemse.length ; i++)
    //         return <Items key={Itemse[i].id} {...Itemse } /> 
            
    // }
    const [item ,setItem] = useState(Itemse);
    return (
        <div className="product">
            <div className="producthandel">
                         {
                            item.map((curItems) => { 
                                return <Items key={curItems.id} {...curItems} />
                                
                             })
                        } 
                        
                        
            </div>
                       
        </div>
    )
}

export default Producte;
