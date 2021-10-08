import React from 'react';
import Grid from '@mui/material/Grid';
import './Login.css'
import InstaLoginGif from '../../img/InstaLoginPage.svg'
import InstaLogo from '../../img/instalogo.png'

function Login (){

    return(
        <>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <div className="Instalogin-container">
                        {/*Image for login*/}
                        <div>
                            <img src={InstaLoginGif} alt="loginimg" width="454px"></img>
                        </div>
                        <div>
                            <div className="Instalogin-RCompo">
                                <img className="Instalogin-logo" src={InstaLogo} alt="InstaLogo"/>
                                <div className="Instalogin-SignIn">
                                    <input type="text" className="Instalogin-Text"/>
                                    <input type="password" className="Instalogin-Text"/>
                                    <button className="Instalogin-SignInButton">Log In</button>

                                    <div className="Instalogin-ORdiv">
                                        <div className="Instalogin-divider"></div>
                                        <div className="Instalogin-OR">OR</div>
                                        <div className="Instalogin-divider"></div>
                                    </div>

                                    <div className="Instalogin-Fb">Log in with Facebook</div>
                                    <div className="Instalogin-Forgot">Forgot password?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </>
    );

}

export default Login;