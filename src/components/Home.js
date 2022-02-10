import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';






const Home = () => {
    const {user, logout} = useContext(UserContext);
    const[faq, setFaq] = useState([]);
    const [status,setStatus]=useState(false);

 const getData = async () =>
 {
    const result = await axios.get("http://localhost/php-auth-api/display.php");
    console.log(result.data.faq);
    setFaq(result.data.faq);

 }
  useEffect(() =>{
      getData();
    },[]);

 const columns =[
   {dataField:'id' , text : 'ID'},
   {dataField:'language', text:'Language', sort: true , filter: textFilter()},
   {dataField:'module', text:'Module', filter:textFilter()},
   {dataField:'error', text:'Issues / Info', filter:textFilter()},
   {dataField:'fixes', text:'Fixes', filter:textFilter()}, 
   {dataField:'createdby', text:'Created By',filter:textFilter()},
   {dataField:'date', text:'Date'},  
 ]  

 const pagination = paginationFactory({
   page:1,
   sizePerPage: 10,
   lastPageText:'>>',
   firstPageText:'<<',
   nextPageText:'>',
   prePageText:'<',
   showTotal: true,
   alwaysShowAllBtns: true,
   onPageChange: function(page, sizePerPage){
     console.log('page', page);
     console.log('sizePerPage', sizePerPage)
   },
   onSizePerPageChange:function(page, sizePerPage){
    console.log('page', page);
    console.log('sizePerPage', sizePerPage)
   }
 });


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

      
        <li className='nav-item'><h1 className='title'>Knowledge Based FAQ</h1></li>
        <li className="nav-item response ">
        <Link className='text-link btn btn-dark' to="FAQForm">Add New Issues / Info</Link>

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
          <span >
           <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg" alt='not loaded' className='rounded-pill divimage' />
          <Link className="active"to="myaccount " >Myaccount</Link> 
          </span> <br/><br/>

           <span><img src="https://encrypted-tbn0.gstatic.com/images?  q=tbn:ANd9GcRoUVOY3XFxmVJ449PV3OSMBHp7A5FVrmBgKL4ptJkeTP2uNAFI0RcSsWvoHzeVxRPuDTA&usqp=CAU" alt='not loaded' />
           <button onClick={logout} className="logout btn btn-dark">Logout</button> 
           </span>
        

        </div>: null
     } 
    </div>
  </div>


  
  <br></br>
  
   
    <div className='tablesize'>
    
    <BootstrapTable bootstrap4
     keyField='id' 
     columns={columns}
      data={faq} 
      pagination={pagination}
      filter={filterFactory()}
      />


  </div>
  <br/>
  
</div>
<br/>
</div>

 );
 }



export default Home;
