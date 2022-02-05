import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'




const Home = () => {
    const {user, logout} = useContext(UserContext);
    const[faq, setFaq] = useState([]);
    const [search, setSearch]= useState("");
    const [status,setStatus]=useState(false)

 const getData = async () =>
 {
    const result = await axios.get("http://localhost/php-auth-api/display.php");
    console.log(result.data.faq);
    setFaq(result.data.faq);

  }



    useEffect(() =>{
      getData();
    },[]);




 return (
      <div className='styl'>
  <nav class="navbar navbar-expand-sm bg-info">
      <div className='container-fluid pt-3 pb-3  nav-align '  >
        <ul className='navbar-nav nav-text-align  ' >
       <li className="navbar-brand " ><a> <b>KB Tool</b></a></li>

      <li className="nav-item d-flex ">
       <input  className='form-control me-2' type="text" placeholder='Search here'
       onChange={e=>{
         setSearch(e.target.value);
       }}/></li>

        <li className="nav-item response ">
        <Link className='text-link btn btn-dark' to="FAQForm">Add New Response</Link>

        </li>

       <li className="nav-item profile-icon " >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4Hviqmchu_hUMBjF-CWJaFVpNVbS05hI5w&usqp=CAU " alt="Not loaded"  onClick={()=>setStatus(!status)}  className='rounded-pill' />
      
        </li>
        </ul>



      </div>

  </nav>



  <div className='profileicon'>

   <div className="action">
     {
       status?<div class="menu">
          <span>Welcome ! {user.name}</span><br/><br/>
          {/* <span>{user.email}</span><br/><br/> */}
       
        <span >
           <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg" alt='not loaded' className='rounded-pill divimage' />
          <Link className="active"to="myaccount " >Myaccount</Link> </span> <br/><br/>

           <span><img src="https://encrypted-tbn0.gstatic.com/images?  q=tbn:ANd9GcRoUVOY3XFxmVJ449PV3OSMBHp7A5FVrmBgKL4ptJkeTP2uNAFI0RcSsWvoHzeVxRPuDTA&usqp=CAU" alt='not loaded' />
           <button onClick={logout} className="logout btn btn-dark">Logout</button> </span>
        

        </div>:null
     } 
    </div>
  </div>


  
  <br></br>
  
   <h1 className='title'>FAQ</h1><br/>
    <div className='tablesize'>
  <Table  bordered hover >
  <thead >
      <tr>

        <th>Language</th>
        <th>Module</th>
        <th>Error</th>
        <th>Fixes</th>
        <th>Createdby</th>
        <th>Date</th>

       </tr>
  </thead>


  <tbody>
  {faq.filter(details=>{
    if (search ===""){
      return details;
    }
    else if (details.language.toLowerCase().includes(search.toLowerCase())){
    return details;
     }

     else if (details.module.toLowerCase().includes(search.toLowerCase())){
        return details;
      }
      
    else if (details.fixes.toLowerCase().includes(search.toLowerCase())){
      return details;
    }
    
    else if (details.error.toLowerCase().includes(search.toLowerCase())){
      return details;
    }

    else if (details.createdby.toLowerCase().includes(search.toLowerCase())){
      return details;
    }
     
    else{
      return null;
    }
   }).
   
  map((details) =>(

    <tr key={details.id}>
      <td>{details.language}</td>
      <td>{details.module}</td>
      <td>{details.error}</td>
      <td>{details.fixes}</td>
      <td>{details.createdby}</td>
      <td>{details.date}</td>
      

    </tr>
   
  )
   
  )}


  </tbody>
  </Table>

  </div>
  <br/>
</div>

 );
 }



export default Home;
