import { useState, useEffect } from "react";
import { Logo_81,FormRow_81 } from "../components/";
import Wrapper from "../assets/wrappers/Register_81";

import {useAppContext} from '../context/appContext_81';
import Alert_81 from '../components/Alert_81';

const initialState={
    name:"",
    email: '',
    password:'',
    isMember:true,
    showAlert:false
}

const Register_81 = () => {
    const [values,setValues]=useState(initialState);
    
    const {showAlert, displayAlert}= useAppContext();


    const handleChange=(e)=>{
        console.log('e.target',e.target);
        setValues({...values,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        //console.log('e.target',e.target);
        const{email,password}=values;
        if(!email||!password){
          displayAlert();
          return
        }
    }
  return (

    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
    <Logo_81/>
    <h3>Register</h3>
    {showAlert&& <Alert_81/>}
    <FormRow_81
     type="text"
     name='name'
     value={values.name}
     handleChange={handleChange}
     className='form-input'
    />
     <FormRow_81
     type="email"
     name='email'
     value={values.email}
     handleChange={handleChange}
     className='form-input'
    />
      <FormRow_81
     type="password"
     name='password'
     value={values.password}
     handleChange={handleChange}
     className='form-input'
    />

   <button className='btn btn-block' type="submit">
       submit
   </button>
   
      </form>
    </Wrapper>
  )
}

export default Register_81

//P4 displayAlert in Register_xx.js, show state in AppProvider_xx
