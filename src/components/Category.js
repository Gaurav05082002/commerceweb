import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
import './Category.css'

const Category = () => {
    return (
        <div className="catmain">
           
           <div className="categoryname">
           <NavLink  className="catnavlink" to='/PRODUCTE'>ELECTRONIC PRODUCTS</NavLink>               
           </div> 
           <div className="categoryname">
           <NavLink  className="catnavlink" to='/PRODUCTF'>FASHION PRODUCTS</NavLink>  
           </div>

           <div className="categoryname">
           <NavLink  className="catnavlink" to='/PRODUCTH'>NOVELS AND DOCUMENTS</NavLink>                  
           </div>   



        </div>
    )
}

export default Category;
