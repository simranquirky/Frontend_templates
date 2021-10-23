import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';

function SignIn() {


    const history = useHistory();
    
    return(
        <>
            <input type="text" className="Instalogin-Text" placeholder="Phone number, username, or email"/>
            <input type="password" className="Instalogin-Text" placeholder="Password"/>
            <button className="Instalogin-SignInButton" onClick={() => history.push('/home')}> Log In </button>
        </>
    );
}


export default SignIn;