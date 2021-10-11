import React from 'react'
import './SignUp.css'

function SignUp() {
    
    return(
        <>
            <input type="text" className="Instalogin-Text" placeholder="Mobile number or email"/>
            <input type="text" className="Instalogin-Text" placeholder="Fullname"/>
            <input type="text" className="Instalogin-Text" placeholder="Username"/>
            <input type="password" className="Instalogin-Text" placeholder="Password"/>
            <button className="Instalogin-SignInButton">Sign Up</button>
        </>
    );
}


export default SignUp;