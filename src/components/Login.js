import {useState,useContext} from 'react';             // Import User context for (API Calling File)
import { Link } from 'react-router-dom';                // Import  Link for register.js page redirected
import {UserContext} from '../context/UserContext';     

 // login for Function Component (User  Functionality)
const Login = () => {
    const {loginUser, wait, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();
                                                                            
        // Error Message For Filling Required Fields 
        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();                                                 // Message For redirecting
            setRedirect('Redirecting...');
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    }
                                                                
    //login form creation
    return (
        <div className="container">
        <div className="loginform">
            <h2>Login</h2>
            <form onSubmit={submitForm} autoComplete='off'>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={onChangeInput} placeholder="Your email" id="email" value={formData.email} required /><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={onChangeInput} placeholder="password" id="password" value={formData.password} required />
                {errMsg && <div className="err-msg">{errMsg}</div>}<br></br>
                {redirect ? redirect : <button type="submit" disabled={wait}>Login</button>}
                <div className="bottom-link"><Link to="/signup">Sign Up</Link></div>
            </form>
        </div>
        </div>
    )
}

export default Login;