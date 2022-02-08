import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';
// import Table from 'react-bootstrap/Table';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
    border:"1px solid white"
      },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    border: "1px solid black"
 
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
}));


    const Home = () => {
    const {user, logout} = useContext(UserContext);
    const[faq, setFaq] = useState([]);
    const [search, setSearch]= useState("");
    const [status,setStatus]=useState(false);
    const [del, setDel] = useState([]);



     const getData = async () =>
 {
    const result = await axios.get("http://localhost/php-auth-api/display.php");
    //console.log(result.data.faq);
    setFaq(result.data.faq);

  }



//   const apiDelete = async(id, e) =>
//  {
//     e.preventDefault();
//     const del =  await axios.delete(`http://localhost/php-auth-api/delete.php/${id}`)
//     .then(()=>{
//       getData();

//     })
//     console.log(del);
//     // setFaq(del);

//   }



    useEffect(() =>{
      getData();
    },[]);

 return (
  <div className='style'>
  <Helmet>
    <title>Dashboard</title>
  </Helmet>

      <div >
  <nav className="navbar navbar-expand-sm bg-info">
      <div className='container-fluid pt-3 pb-3  nav-align '  >
        <ul className='navbar-nav nav-text-align  ' >
       <li className="navbar-brand " ><h2>KB Tool</h2></li>

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
       status?<div className="menu">
          <span>Welcome ! {user.name}</span><br/><br/>
          {/* <span>{user.email}</span><br/><br/> */}
       
        <span >
           <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg" alt='not loaded' className='rounded-pill divimage' />
          <Link className="active"to="myaccount " >Myaccount</Link> </span> <br/><br/>

           <span><img src="https://encrypted-tbn0.gstatic.com/images?  q=tbn:ANd9GcRoUVOY3XFxmVJ449PV3OSMBHp7A5FVrmBgKL4ptJkeTP2uNAFI0RcSsWvoHzeVxRPuDTA&usqp=CAU" alt='not loaded' />
           <button onClick={logout} className="logout btn btn-dark">Logout</button> </span>
        

        </div>: null
     } 
    </div>
  </div>


  
  <br></br>
  
   <h1 className='title'>Knowledge Based FAQ</h1><br/>
    <div className='tablesize '>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ border: 1 }}>
            <StyledTableCell >Language</StyledTableCell>
            <StyledTableCell align="center">Module</StyledTableCell>
            <StyledTableCell align="center"> Error</StyledTableCell>
            <StyledTableCell align="center">Fixes</StyledTableCell>
            <StyledTableCell align="center">Createdby</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
   }) 
     .reverse().map((details) =>(
            <StyledTableRow key={details.id}>
              <StyledTableCell component="th" scope="row" >
                {details.language}
              </StyledTableCell>
              <StyledTableCell align="center">{details.module}</StyledTableCell>
              <StyledTableCell align="center">{details.error}</StyledTableCell>
              <StyledTableCell align="center">{details.fixes}</StyledTableCell>
              
              <StyledTableCell align="center">{details.createdby}</StyledTableCell>
              <StyledTableCell align="center">{details.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



  </div>
  <br/>
</div>
</div>
 );
 }
export default Home;
