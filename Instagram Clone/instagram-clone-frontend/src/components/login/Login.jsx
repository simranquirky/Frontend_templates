import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import './Login.css'
import InstaLoginGif from '../../img/InstaLoginPage.svg'
import InstaLogo from '../../img/instalogo.png'
import fb from '../../img/fb.png';
import appstore from '../../img/app.png';
import playstore from '../../img/play.png'
import SignIn from './SignIn';
import SignUp from './SignUp';


function Login (){


    const [isLogin, setisLogin] = useState(true);


    const changeLogin = () => isLogin ? setisLogin(false) : setisLogin(true);

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
                                    
                                    {
                                        isLogin ? <SignIn/> : <SignUp/>
                                    }

                                    {/* <SignIn/> */}
                                    {/* <SignUp/> */}

                                    <div className="Instalogin-ORdiv">
                                        <div className="Instalogin-divider"></div>
                                        <div className="Instalogin-OR">OR</div>
                                        <div className="Instalogin-divider"></div>
                                    </div>

                                    <div className="Instalogin-Fb">
                                            <img src={fb} alt="fb" width="15" style={{ "marginRight":"5px" }}/>Log in with Facebook
                                    </div>
                                    
                                    <div className="Instalogin-Forgot">Forgot password?</div>
                                </div>
                            </div>
                            <div className="Instalogin-SignUpSignInOpt">

                                    {
                                        isLogin ? 
                                        <div className="Instalogin-SignIn">
                                            Don't have an account? <a href="#"><span onClick={changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span></a>
                                        </div>
                                        :
                                        <div className="Instalogin-SignUp">
                                            Have an account? <a href="#"><span onClick={changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span></a>
                                        </div>
                                    }
                            </div>

                            <div className="Instalogin-Store">
                                    <div>
                                        Get the app.
                                    </div>
                                    <div className="Instalogin-storeimgContainer">
                                        <img className="Instalogin-storeimg" alt="appstore" src={appstore} width="136px" />
                                        <img className="Instalogin-storeimg" alt="playstore" src={playstore} width="136px" />
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