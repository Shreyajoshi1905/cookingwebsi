import React from 'react';
import image from '../src/imgs/cook2.jpg';
import Footer from './Footer';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap-theme.css';

const Home = () =>
{
    return(
        <div className = "home">
        <h1>Welcome to <strong>Shreya and Babita's kitchen!!!</strong> </h1>
        <br/>
       
        <br/>
        <NavLink className = "btnn" to = "/recipe" type="button" className="btn btn-dark">Our Recipes</NavLink>
        <br/>
        <br/>

        <NavLink className = "btnn" to = "/recipe" type="button" className="btn btn-dark">Share your recipes</NavLink>
        <br/>
        <br/>
        
        <NavLink className = "btnn" to = "/feedback" type="button" className="btn btn-dark" >Give us feedback</NavLink>
        <Footer></Footer>
        
        </div>
    )
}

export default Home;