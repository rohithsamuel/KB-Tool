import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import FAQForm from './components/FAQForm';

function App() {

  const {user} = useContext(UserContext); 
 
  return (
    <div className="container">
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
            <Route path="/form" element={<FAQForm />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;