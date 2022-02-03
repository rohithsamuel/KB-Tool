import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';



const Home = () => {
    const {user, logout} = useContext(UserContext);
    const[faq, setfaq] = useState([]);
    
  

    



const getData = async () => {
    const result = await axios.get("http://localhost/php-auth-api/display.php");
    console.log(result.data.faq);
    setProduct(result.data.faq);
    
}



useEffect(() =>{
  getData();
},[]);



// {data && data.map(row => {
    return (
        <div className="home">
            <div className="img">🧒🏻</div>
            <h1>{user.name}<br/><span>{user.email}</span></h1>
            <button onClick={logout} className="logout">Logout</button>
            <li className="bottom-link"><Link to="form">FAQ</Link></li>
            <button onClick={getData}>D</button>
           

            {product.map((res) =>
       
                <p>{res.language}</p>
                
                )}
        
     </div>
    );
    
}
export default Home;
