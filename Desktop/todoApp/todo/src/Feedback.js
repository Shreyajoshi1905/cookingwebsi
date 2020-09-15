import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './App.css';

const Feedback = () =>
{
    
    const[text , setText] = useState("");
    const[addText , setAddText] = useState("");
    
    const handleInput = (event) =>
    {
       setText(event.target.value);
    }

    const handleSubmit = (event) =>
    { event.preventDefault();
       setAddText(text);
    }
    return(
        <div className = "feedback">
        <h2> 
        Heyy!! drop your comments below</h2>
        <form className = "textarea">
       
        <textarea onChange = {handleInput} value = {text} placeholder = "enter your feedback here...."/>
        <br/>
        <button  onClick = {handleSubmit} className = "badge badge-pill badge-dark">submit</button>
       
        </form>
        <p >we got you! 
        <br/> {addText}</p>
        </div>
    )
}

export default Feedback;