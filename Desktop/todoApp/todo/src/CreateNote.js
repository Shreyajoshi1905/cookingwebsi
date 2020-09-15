import React, { useState } from 'react';
import './App.css';

const CreateNote = () =>
{

    const[note , setNote] = useState({
        title: "",
        content: "",
    });
 const InputEvent = (event) =>
 {   const value = setNote(event.target.value);
    const name = setNote(event.target.value);
     setNote((prevData) =>
     {
         return{
             ...prevData,
             [name]: value,
         }
     })
 }
  const addEvent = () =>
  {
    props.addNote(note)
  }
    return(
        <div className = "classnote">
        <form className = "form ">
        <input type = "text" name = "title" value = {note.title} onChange = {InputEvent} placeholder = "title"/>
        <br/>
        <textarea rows = "" name  = "content" column = "" value = {note.content} onChange = {InputEvent} placeholder = "enter text"></textarea><br/>
        <button onClick = {addEvent}>submit</button>
        </form>
        </div>
    )
}
export  default CreateNote; 