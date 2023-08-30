import React from 'react'
import Head from '../../container/Head'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <>
    <Head name={'Login'}/> 
    <div className='login-cont'>
    <div id="login-form-wrap">
  <h2>ADMIN LOGIN</h2>
  <form id="login-form">
    <p>
    <input type="text" id="username" name="username" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
    </p>
    <p>
    <input type="email" id="email" name="email" placeholder="Password" required/><i class="validation"><span></span><span></span></i>
    </p>
    <p>
    <input type="submit" id="login" value="Login"/>
    </p>
  </form>
  </div>
  </div>
    </>
  )
}

export default LoginPage
