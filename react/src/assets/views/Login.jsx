import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  const onSubmit=(e)=>{
    e.preventDefault();
  }
  return (
   
        <form action="" onSubmit={onsubmit}>
          <h1>Login To your Account</h1>
          <input type="email" placeholder='Email' />
          <input type="pasword" placeholder='pasword'  />
          <button className='btn btn-block' type='submit'>Login</button>
          <p className='message'>
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>

    
  )
}
