import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className='registerPage'>
        <div className="background"></div>

       
        <form className="form">
          <h2 className="heading">Welcome to our team!</h2>
          <div className="inputDiv">
            <input type="text" placeholder="Username" id="username" />
              <input type="text" placeholder="Email" id="email" />
              <input type="text" placeholder="Password" id="password"/>
              <button className="signInBtn" type="submit">Sign Up</button>
          </div>
          <div className="linkTab">
            <Link>
                <span className="remember">Remember Me?</span>
            </Link>
            <Link>
                <span className="help">Need help?</span>
            </Link>    
          </div>
        <div className="linkToRegisterPage">
          <p className="signUpLink">Already a member? <Link to="/login" className="signUp">Sign In now.</Link> </p>
        </div>
        <div className="licenceDiv">
           <p className="licence">
          This page is protected by Google reCAPTCHA to <br />
          ensure you're not a bot. <Link className="licenseLink">Learn More.</Link>
        </p>
        </div>
       

        </form>


    </div>
  )
}
