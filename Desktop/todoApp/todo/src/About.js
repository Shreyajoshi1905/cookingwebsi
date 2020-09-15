import React from 'react';
import { Badge } from 'react-bootstrap';
import cook2  from '../src/imgs/cook2.jpg'
const About = () =>
{
    return(
        <div className = "about"> 
        <h1>ABOUT US!</h1>
        <br/>
        <span className = "badge badge-pill badge-dark"> we are a team of chefs , who made a platform for all the people who like to cook food and are 
        intrested in knowing new recipes of diferent food items .
         </span>
         <span className = "badge badge-pill badge-dark"> if you want to know our recipes , and want to share your recipes too , 
          feel free to share it .we would love to see those.</span>
          <span className = "badge badge-pill badge-dark"> you can email us on <strong>
          shreyajoshi1905@gmail.com or babitUpadhyay@gmail.com 
          </strong>
         if u face any problem , u can share your feedback on our website only  
          </span>
          <br/>
          <br/>
          <br/>
          <img className = "cooks" src = {cook2} alt = "cook2"/>          <span className = "badge badge-pill badge-dark"></span>
          <span className = "badge badge-pill badge-dark"></span>
          <span className = "badge badge-pill badge-dark"></span>
        </div>
    )
}

export default About ;