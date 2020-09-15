import React from 'react';
import "./App.css"
const Footer = () =>
{
    const year = new Date().getFullYear();
    return(
        <div className = "footer">
        <small> copyright @ {year} || shreya's kitchen || all rights reserved</small>
        </div>
    )
}


export default Footer;