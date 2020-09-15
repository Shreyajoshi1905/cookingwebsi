import React from 'react';

import './App.css';
import {Bootstrap, Grid, Row, Col, Card} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import Cards from './Cards';
import RecpData from './RecpData';
const Recipes = (props) =>
{
    return(
        <div className = "recipes">
        <span className = "recipe" className="badge badge-pill badge-dark">Try our recipes and don't forget to give us feedback</span>
        <br/>
        <br/>
{
    RecpData.map((val , index)=>
    {
        return(
            <Cards 
            imgsrc = {val.imgsrc}
            title = {val.title}
             />
        )
    })

}
    
        
        </div>
    )
}
export default Recipes;