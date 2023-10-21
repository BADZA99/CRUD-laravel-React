import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../axios-client';
import { useStateContext } from '../contexts/ContextProvider';
import { useState } from 'react';

export default function Signup() {
  const nameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const [errors,setErrors]=useState(null);
  const {setUser,setToken}=useStateContext();
  const onsubmit=(e)=>{
    e.preventDefault()
    // console.log('form submitted')
    const payload={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation:passwordConfirmRef.current.value,
    }
    console.log(payload);

    axiosClient.post('/signup',payload)
    .then(({data})=>{
      setUser(data.user)
      setToken(data.token)
    })
    .catch(error=>{
      const response=error.response;
      // console.log(error)
      if (response && response.status===422) {
          //  reponse.data.errors;
           console.log(response.data.errors);
           setErrors(response.data.errors);  
      }
  
    })
  }
  return (
        <form action="" onSubmit={onsubmit}>
          <h1>Sign up for free</h1>
          {errors && (
            <div className="alert">
              
                {Object.keys(errors).map((key)=>(
                   <p key={key}>{errors[key][0]}</p>
                ))}
              
            </div>
          )}
          <input ref={nameRef} type='text' placeholder='Full Name' />
          <input ref={emailRef} type='email' placeholder='Email' />
          <input ref={passwordRef} type='password' placeholder='pasword'  />
          <input ref={passwordConfirmRef}  type='password' placeholder='pasword confirmation'  />
          <button className='btn btn-block' type='submit'>Sign up</button>
          <p className='message'>
            Already  registered? <Link to="/login">sign in</Link>
          </p>
        </form>
  )
}
