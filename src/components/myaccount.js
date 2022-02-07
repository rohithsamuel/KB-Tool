import React from "react";                //import react from react
import { Link } from "react-router-dom"; 
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'                //import link for cancel and save use page redirected
import { Helmet } from 'react-helmet';                                                 
//myaccount.js  use Function Component 

const Myaccount = () => {
     const {user} = useContext(UserContext);
        return (
             <div>
          <Helmet>
          <title>My Account</title>
        </Helmet>
      
  {/* //create myaccount details in kb tool             */}
            <form>
             <div className="nav">
             <a class="active" href="#home"><b>KB Tool</b></a>
             <Link className="active"to="Home" >Home</Link> <br></br>
             </div>
             <hr></hr><div className="topic">
        
        </div>
        <div className="topics">
        <h3>My Account</h3>
         </div>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <div className="design">
          
               <p><b>Profile</b></p>
               <div className="inside">
               <h3>{user.name}<br/><br></br>
               <span>{user.email}</span></h3> 
                </div>
          </div>  
           <br></br>
           <br></br>
           <br></br>
           <hr></hr>
           
        
               </form>
               </div>
   
   )

        }
export default Myaccount;
