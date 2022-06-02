import React from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        
        <div className="home">
            <div className="links">
            {/* <div className="homenav">
            <NavLink className="homelink" to='/SIGNUP'>SIGN UP</NavLink>
            </div> */}
            <div className="homenav">
            <NavLink className="homelink" to='/CATEGORY'>VISIT STORE -</NavLink>
            </div>
            </div>
            
        </div>
    )
}

export default Home;
