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
      
  {/* //User account details in kb tool             */}

          <div>
  <nav className="navbar navbar-expand-sm bg-info">
      <div className='container-fluid pt-3 pb-3  nav-align '  >
             <ul className='navbar-nav nav-text-align  '>
             <li className="nav-item "><h2>KB Tool  -</h2></li>
             <li  className="nav-item " >    <Link className="text-link" to="Home" ><h2> Home </h2></Link></li>
             </ul>
             </div>
            
             </nav>

             <hr></hr><div className="topic">
        
        </div>
        <div className="topics">
        <h3>My Account</h3>
         </div>
          
          <div className="design">
          
               <p><h2>Profile</h2></p>
               <div className="inside">
               <p>Name </p>   <p>{user.name}<br/><br/>

             <p>Email</p>  <span>{user.email}</span></p> 
                </div>
          </div>  
           <br></br>
           <br></br>
           <br></br>
           <hr></hr>
           
        
           </div>
               </div>
   
   )

        }
export default Myaccount;
