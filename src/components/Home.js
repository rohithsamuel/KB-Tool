import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';



const Home = () => {
    const {user, logout} = useContext(UserContext);
    const[faq, setFaq] = useState([]);

    const [status,setStatus]=useState(false)
    
  

  const getData = async () => {
    const result = await axios.get("http://localhost/php-auth-api/display.php");
    console.log(result.data.faq);
    setFaq(result.data.faq);
    
}



useEffect(() =>{
  getData();
},[]);



    return (
      <div className='style'>
      <nav>
  <div className="topnav">
       <p className="active" ><b>KB Tool</b></p>
       <button ><b>Home</b></button>

       <Link to="FAQForm" className='cap'>Technology FAQ</Link>
  </div>
  </nav>
  <div className="image">
  <div className="action">
  <div className="profile">
       <button onClick={()=>setStatus(!status)}>                      
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9jFggYUWLzCGSErOCnaobeA06ez9eVr9JFxyMR3XqEgkCWpJLCuVw9KFia536kRZ41A&usqp=CAU" alt="Not loaded"/>
       </button>
  </div>

   { 
  status?<p class="menu"><h3>
         <h3>{user.name}<br/><br></br>
         <span>{user.email}</span></h3> 
     <ul>
      <li><img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg" alt='not loaded' /><Link className="active"to="myaccount" >myaccount</Link></li> <br></br>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUVOY3XFxmVJ449PV3OSMBHp7A5FVrmBgKL4ptJkeTP2uNAFI0RcSsWvoHzeVxRPuDTA&usqp=CAU" alt='not loaded' /><button onClick={logout} className="logout">Logout</button> </li>
     </ul></h3>
     
</p>:null
}


</div> 
  
  
  
 {/* create table and use colspan */}



</div> 

 <br></br>  
 <br></br>                                                                      

<table className="table">
  <thead>
    <tr>
        <th colSpan="8"><b>FAQ TABLE</b>
          
         </th>
    </tr>
          <tr>
           <th>Language</th>
           <th>Module</th>
           <th>Error</th>
           <th>Fixes Errors</th>
           <th>Developer Name</th>
           <th>Date</th>
           <th >Edit</th>
         </tr>
   </thead>
  
  <tbody>
  </tbody>
</table>
        {faq.map((res) =>
 
  

  
<tr  key={res.id}>
<td>{res.language}</td>
<td>{res.module}</td>
<td>{res.error}</td>
<td>{res.fixes}</td>
<td>{res.createdby}</td>
<td>{res.date}</td>
<td>Update</td>
<td>cancel</td>

</tr>

 
 )}




</div> 

            
 );
 }      
// {/* {/*             
// // /*             
// //             {faq.map((res) =>{
// //               return(
// //                 <ul  key={res.id}>
// //                 <li>{res.language}</li>
// //                 <li>{res.module}</li> */
              
                
// //             //     </ul> */}
// //             //   )}
// //             // )}
// }
            
     
    


export default Home;
