import React, {useState} from 'react';
// import React from 'react';
import './Product.css';
import Items from "./Items";
import { Itemsh } from "./Itemsh"; 

const Producth = () => {
    const [item ,setItem] = useState(Itemsh);
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

export default Producth;
