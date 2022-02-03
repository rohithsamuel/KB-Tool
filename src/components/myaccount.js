import React from "react";    
//import react from react
import { Link } from "react-router-dom";                 //import link for cancel and save use page redirected
                                                 
//myaccount.js  use Function Component 


function Myaccount() {
        return (
  //create myaccount details in kb tool            
            <form>
             <div className="nav">
             <a class="active" href="#home"><b>KB Tool</b></a>
             </div>
             <hr></hr><div className="topic">
        <h5><b>Home</b> <b>My Account</b></h5>
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
                <lable><b>Email Adresss</b> <br></br><input type="emailaddress"></input></lable><br></br>
                <lable><b>First Name</b> <br></br> <input type="text"></input></lable><br></br>
                <lable><b>Last Name</b> <br></br>  <input type="text"></input></lable><br></br>
                </div>
          </div>  
           <br></br>
           <br></br>
           <br></br>
           <div className="design">
           <p><b>Change Password</b></p>
           <div className="inside">
                     <lable><b>New Password</b>  <br></br>    <input type="password"></input></lable><br></br>
                     <lable><b>Confirm password</b> <br></br>    <input type="password"></input></lable><br></br>
                     </div>
                     <br></br>
                     <div className="path">
                     <Link type="button"to={"/Home"} >Cancel</Link>
                     
                     </div>
                     <br></br>
                     <br></br>
                     <div className="way">
                     <Link type="button" to={"/myaccount"} >Save</Link>
                     </div>
                    
                     </div>
          
           
           
          
           <hr></hr>
        
               </form>
   
   
   )

        }
export default Myaccount;
