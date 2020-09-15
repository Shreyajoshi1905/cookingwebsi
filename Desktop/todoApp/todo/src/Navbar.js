import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom'
import './App.css'

const Navbar = () =>
{
    return(
        <div className = 'navlink'>
         <NavLink className = "nav1" to = "/">Home</NavLink>
         <NavLink className = "nav2" to = "/about">About</NavLink>
         <NavLink  className = "nav3" to = '/contact'>Contact</NavLink>
        </div>
    )
}

export default Navbar;