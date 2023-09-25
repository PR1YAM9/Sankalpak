import React from 'react'
import './LoginA.css'
import { Link } from 'react-router-dom'

const LoginA = () => {
  return (
    <div>
        <div className='l-h'>
            <p>Log In</p>
        </div>
        <div className='l-c'>
            <button className=''><Link to="/login">Login</Link></button>
            <p>or</p>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default LoginA