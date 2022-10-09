import React from 'react'
import "./login.css"
import login from "./login.svg"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
      <div className='wrap'>
    <div className="containerlogin" id="container">
		<div className="form-container log-in-container">
			<form className='loginform' action="#">
				<h1 className='hr1'>Login</h1>
				<div className="social-container">
					<a href="#" className="social"><i className=" fa fa-facebook fa-2x"></i></a>
					<a href="#" className="social"><i className="fab fa fa-twitter fa-2x"></i></a>
					<a href="#" className="social"><i className=" fab fa fa-instagram fa-2x"></i></a>
					<a href="#" className="social"><i className=" fab fa fa-google fa-2x"></i></a>
				</div>
				<span className='loginspan'>or use your account</span>
				<input className='logininput' type="email" placeholder="Email" />
				<input className='logininput' type="password" placeholder="Password" />
				<a href="#" className='fr'  style={{textDecoration:'none'}}>Forgot your password?</a>
				<Link to='/home' style={{textDecoration:'none'}}>
				<button className='loginbutton' >Log In</button>
				</Link>
				<h5 className='hr1'> Don't have account? </h5>
				<Link to='/Signup' >
					<button className='p1'>Please Sign In</button> 
				</Link>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<img className='signinimg' src={login} alt="logo" />
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
