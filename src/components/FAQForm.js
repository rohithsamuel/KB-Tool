import {useState,useContext} from 'react';
import {UserContext} from '../context/UserContext';
import { Helmet } from 'react-helmet';
function FAQForm(){


    const {technologyFaq, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        language:'',
        module:'',
        error:'',
        createdby:'',
        fixes:'',
        date:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setSuccessMsg(false);
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await technologyFaq(formData);
        if(data.success){
            e.target.reset();
            setSuccessMsg('Added successfully');
            setErrMsg(false);
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
        
    }

    return (
        <div>
  <Helmet>
    <title>FAQ Form</title>
  </Helmet>
        <div className='container'>
        <div className="loginform">
            <h2>Knowledge Based FAQ</h2>
            <form onSubmit={submitForm}>
                <label>Language</label>
                <input type="text" name="language" onChange={onChangeInput} placeholder="Language" id="language" value={formData.language} required />
              

                <label>Module</label>
                <input type="text" name="module" onChange={onChangeInput} placeholder="Module" id="module" value={formData.module} required />
               


                <label>Error</label>
                <input type="text" name="error" onChange={onChangeInput} placeholder="Error" id="error" value={formData.error} required />
                

                <label>Fixes</label>
                <input type="text" name="fixes" onChange={onChangeInput} placeholder="Enter fixes" id="fixes" value={formData.fixes} required />
                
                <label>Created by</label>
                <input type="text" name="createdby" onChange={onChangeInput} placeholder="Creator name" id="createdby" value={formData.createdby} required />
  
                <label>Date</label>
                <input type="date" name="date" onChange={onChangeInput} placeholder="Enter date" id="date" value={formData.date} required />
                




                
               

                
                {successMsg && <div className="success-msg">{successMsg}</div>}
                {errMsg && <div className="err-msg">{errMsg}</div>}
                <button type="submit" disabled={wait}>Submit</button>
               
            </form>
            </div>
        </div>
        </div>
    )
}



    



        

export default FAQForm;
            



