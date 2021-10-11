import React from 'react'
import './Login.css'

function SignIn() {
    
    return(
        <>
            <input type="text" className="Instalogin-Text" placeholder="Phone number, username, or email"/>
            <input type="password" className="Instalogin-Text" placeholder="Password"/>
            <button className="Instalogin-SignInButton">Log In</button>
        </>
    );
}


export default SignIn;