import React from 'react'
import Add from '../img/add.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <h1 className="logo">XChat</h1>
            <span className="title">Login</span>
        <form>
            {/* <input type="text" placeholder='display name'/> */}
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>
        </form>
        <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login