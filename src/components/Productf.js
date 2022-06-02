import React, {useState} from 'react';
// import React from 'react';
import './Product.css';
import Items from "./Items";
import { Itemsf } from "./Itemsf"; 

const Productf = () => {
    const [item ,setItem] = useState(Itemsf);
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

export default Productf;
