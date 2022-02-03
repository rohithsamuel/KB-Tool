import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';



const Home = () => {
    const {user, logout} = useContext(UserContext);

    
    const {table, setTable} =useState([]);

    
// const getData =() =>{
//     axios.get('http://localhost/php-auth-api/display.php',
//     // {headers: {
//     //     'Content-Type': 'application/json',
//     //       }
//     //     }
//         )
    
//       .then(response=> {
         

//          console.log(response.data.faq);
//          setget(response.data.faq)
//         })
//     .catch(err=>{
//         console.log(err)
//     })   

// }



const getData = async () => {
    const result = await axios.get("http://localhost/php-auth-api/display.php");
    // setGet(result.data);
    console.log(result.data.faq);
}
useEffect(() =>{
    getData();
},[]);





    return (
        <div className="home">

            <div className="img">🧒🏻</div>

            <h1>{user.name}<br/><span>{user.email}</span></h1>
            <button onClick={logout} className="logout">Logout</button>

            <li className="bottom-link"><Link to="form">FAQ</Link></li>

          <button onClick={getData}>D</button>


          {/* <div>
{get ? 
      get.map((response) => {
          return(
             <div className="data" key={response.id}>
               <h3> {response.language}</h3>
             </div>
          )
      }) : <h3>No data yet</h3> }

</div> */}


        </div>
    )
}

export default Home;
