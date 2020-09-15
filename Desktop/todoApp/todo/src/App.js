import React from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { Route,  Switch, Router} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Recipes from './Recipes';
import Feedback from './Feedback';

const App = () =>
{
 return(
   <div>
   
   <Navbar/>
   <Switch>

   <Route exact path= '/' component = {Home}/>
   <Route exact path = '/contact' component = {Contact}/>
   <Route exact path= '/about' component = {About}/>
   <Route exact path= '/recipe' component = {Recipes}/>
   <Route exact path= '/feedback' component = {Feedback}/>
    </Switch>
   
   

 


   </div>
 )
}
export default App;