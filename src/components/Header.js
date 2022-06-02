import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <NavLink  className="navlink" to='/'>HOME</NavLink>
        <NavLink className="navlink" to='/CATEGORY'>CATEGORY</NavLink>
        <NavLink className="navlink" to='/CART'>CART</NavLink>
        <NavLink className="navlink" to='/SIGNUP'>SIGNUP</NavLink>
        </div>
    )
}

export default Header;
