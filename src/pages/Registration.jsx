import React from 'react'
import Add from '../img/add.png'

const Registration = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <h1 className="logo">XChat</h1>
            <span className="title">Registration</span>
        <form>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input type="file" className='f' id='f' />
            <label htmlFor="f">
                <img src={Add} /> Add an Avatar
            </label>
            <button>Register</button>
        </form>
        <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Registration