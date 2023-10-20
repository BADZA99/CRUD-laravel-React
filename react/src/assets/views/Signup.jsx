import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const onsubmit=(e)=>{
    e.preventDefault()
    // console.log('form submitted')
  }
  return (
        <form action="" onSubmit={onsubmit}>
          <h1>Sign up for free</h1>
          <input type="email" placeholder='Full Name' />
          <input type="email" placeholder='Email' />
          <input type="pasword" placeholder='pasword'  />
          <input type="pasword" placeholder='pasword confirmation'  />
          <button className='btn btn-block' type='submit'>Sign up</button>
          <p className='message'>
            Already  registered? <Link to="/login">sign in</Link>
          </p>
        </form>
  )
}
