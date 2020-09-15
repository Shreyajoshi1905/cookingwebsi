import {Card} from 'react-bootstrap';
import img2 from '../src/imgs/img2.jpg'
import React from  'react';
import {Bootstrap, Grid, Row, Col , Button} from 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
const Cards = (props) =>
{
    return(
      <Card  className = "cards">
      <Card.Title className = "cardtitle">
      {props.title}
      </Card.Title>
      <Card.Body className = "cardbody">
       <Card.Img className = "cardimg" src = {props.imgsrc} alt = "hellou"/>
       <Card.Text>
       ENJOY!!
       </Card.Text>
    
      </Card.Body>
      
      </Card>
      

    )
}
export default Cards;