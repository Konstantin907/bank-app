import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

export const Login = () => {
  return (
    <div className=''>
    <div className='registerPage'>

      <div className="returnBtn">
            <Link to="/"><button className="return">
                <FaArrowLeft /> Return to Home Page
                </button>
            </Link>
        </div>
        <div className="background"></div>

       
        <form className="form">
          <h2 className="heading">Welcome back!</h2>
          <div className="inputDiv">
            
              <input type="text" placeholder="Email" id="email" />
              <input type="text" placeholder="Password" id="password"/>
              <button className="signInBtn" type="submit">Sign In</button>
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
          <p className="signUpLink">First time with us? <Link to="/register" className="signUp">Sign Up now.</Link> </p>
        </div>
        <div className="licenceDiv">
           <p className="licence">
          This page is protected by Google reCAPTCHA to <br />
          ensure you're not a bot. <Link className="licenseLink">Learn More.</Link>
        </p>
        </div>
       

        </form>


    </div>
    </div>
  )
}
