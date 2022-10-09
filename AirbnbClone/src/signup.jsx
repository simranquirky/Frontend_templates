import React from 'react'
import "./signup.css"
import sign from "./sign.svg"
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
      <div className='wrap'>
    <div className="containerlogin" id="container">
		<div className="form-container log-in-container">
			<form className='loginform' action="#">
				<h1 className='hr1'>SignUp</h1>
				<div className="social-container">
					<a href="#" className="social"><i className="fa fa-facebook fa-2x"></i></a>
					<a href="#" className="social"><i className="fab fa fa-twitter fa-2x"></i></a>
					<a href="#" className="social"><i className="fab fa fa-instagram fa-2x"></i></a>
					<a href="#" className="social"><i className="fab fa fa-google fa-2x"></i></a>
				</div>
				<span className='loginspan'>or Enter your Details</span>
				<input className='logininput' type="email" placeholder="Email" />
				<input className='logininput' type="text" placeholder="Enter your name" />
				<input className='logininput' type="tel" placeholder="Enter Your phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
				<input className='logininput' type="password" placeholder="Enter Your Password" />
				<input className='logininput' type="password" placeholder="Confirm Password" />
				<Link to='/'>
				<button className='loginbutton'>Sign Up</button>
				</Link>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					{/* <h1 className='hr1'>Don't have account?</h1>
					<p className='p1'>Please Sign In</p> yo*/}
					<img className='signinimg' src={sign} alt="logo" />
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
