import React from 'react';
import {useState}from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

const Contact = () =>
{
const[ inputs , setInputs] = useState({});

const handleInputText = (event) =>
{ 
 
}
const handleSubmit = (event) =>
{ 
  event.preventDefault();

}

    return(
        <div className = "contact">
        <form onSubmit = {handleSubmit} className = 'form'>
        <label>FirstName</label>
        <br/>
        <input onChange = {handleInputText} placeholder = "enter here"></input>
        <br/>
        <label>LastName</label>
        <br/>
        <input onChange = {handleInputText}  placeholder = "enter here"></input>
        <br/>
        <label>MobileNumber</label>
        <br/>
        <input onChange = {handleInputText}  placeholder = "enter here"></input>
        <br/>
        <label>Gmail</label>
        <br/>
        <input onChange = {handleInputText}  placeholder = "enter here"></input>
        <br/>
        <br/>
        <button  type="submit" class="btn btn-warning">Submit</button>
        </form>
        </div>
    )
}

export default Contact;