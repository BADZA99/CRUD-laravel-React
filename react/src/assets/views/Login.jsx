import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { useRef } from 'react';
import axiosClient from '../../axios-client';

export default function Login() {
   const emailRef=useRef();
   const passwordRef=useRef();
   const [errors,setErrors]=useState(null);
   const {setUser,setToken}=useStateContext();
   const onsubmit=(e)=>{
    e.preventDefault()
    // console.log('form submitted')
    const payload={
      email:emailRef.current.value,
      password:passwordRef.current.value,
    }
    console.log(payload);
    setErrors(null)

    axiosClient.post('/login',payload)
    .then(({data})=>{
      setUser(data.user)
      setToken(data.token)
    })
    .catch(error=>{
      const response=error.response;
      // console.log(error)
      if (response && response.status===422) {
        if(response.data.errors){
          setErrors(response.data.errors)
        }else{
          setErrors(
            {
              email:[response.data.message]
            }
          )
        }
          //  reponse.data.errors;
          //  console.log(response.data.errors);
          //  setErrors(response.data.errors);  
      }
  
    })
  }
  return (
   
        <form action="" onSubmit={onsubmit}>
          <h1>Login To your Account</h1>
           {errors && (
            <div className="alert">
              
                {Object.keys(errors).map((key)=>(
                   <p key={key}>{errors[key][0]}</p>
                ))}
              
            </div>
          )}
          <input ref={emailRef} type='email' placeholder='Email' />
          <input ref={passwordRef} type='password' placeholder='pasword'  />
          <button className='btn btn-block' type='submit'>Login</button>
          <p className='message'>
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>

    
  )
}
