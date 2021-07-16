import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Image from "./2.png"



const Navbar1 = () =>
{
    return(
        <div>
            <nav class="navbar ">
            <a class="navbar-brand" href="#">
    <img src={Image} width="50" height="40" class="d-inline-block align-top" alt=""/>
    
  </a>
  <div class="container-fluid">
 
  <Link to="/" style={{textDecorationLine:"none"}}> <h1 style={{color:"blue"}} class="navbar-brand" > Employee Mangement Portal </h1></Link>
   
    
      <div>
      <Link to="/dashboard" style={{textDecorationLine:"none"}}>  <h4 style={{color:"blue"}}> Dashboard </h4></Link>
         
          </div>
    
    
  </div>
  </nav>
  </div>



    )
}



export default Navbar1;