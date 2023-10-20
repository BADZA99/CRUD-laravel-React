import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {
  const nameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const {setUser,setToken}=useStateContext()
  const onsubmit=(e)=>{
    e.preventDefault()
    // console.log('form submitted')
    const payload={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation:passwordConfirmRef.current.value,
    }
    axiosClient.post('/signup',payload)
    .then(({data})=>{
      setUser(data.user)
      setToken(data.token)
    })
    .catch(err=>{
      const reponse=err.reponse;
      if (reponse && reponse.status===422) {
          //  reponse.data.errors;
           console.log(reponse.data.errors)
      }
  
    })
  }
  return (
        <form action="" onSubmit={onsubmit}>
          <h1>Sign up for free</h1>
          <input ref={nameRef} placeholder='Full Name' />
          <input ref={emailRef} placeholder='Email' />
          <input ref={passwordRef} placeholder='pasword'  />
          <input ref={passwordConfirmRef} placeholder='pasword confirmation'  />
          <button className='btn btn-block' type='submit'>Sign up</button>
          <p className='message'>
            Already  registered? <Link to="/login">sign in</Link>
          </p>
        </form>
  )
}
