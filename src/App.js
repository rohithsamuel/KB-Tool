import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Myaccount from "./components/myaccount";
import FAQForm from './components/FAQForm';

function App() {

  const {user} = useContext(UserContext); 
 
  return (
   
        <BrowserRouter>
          <Routes>
            { user && <Route path="/" element={<Home/>} /> }
            {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              
              </>
            )}
            <Route path="*" element={<Navigate to={user ? '/':'/login'} />} />
            <Route path="/FAQForm" element={<FAQForm />}/>
            <Route path="/myaccount" element={<Myaccount />} />
          </Routes>
        </BrowserRouter>
  
  );
}

export default App;