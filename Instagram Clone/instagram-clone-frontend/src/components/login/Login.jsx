import React from 'react';
import Grid from '@mui/material/Grid';
import InstaLoginGif from '../../img/instalogin2.gif'

function Login (){

    return(
        <>
            <Grid container>
                <Grid item xs={3}>sdasd</Grid>
                <Grid item xs={6}>
                    <div>
                        {/*Image for login*/}
                        <div>
                            <img src={InstaLoginGif} alt="loginimg" width="420px"></img>
                        </div>
                        <div></div>
                    </div>
                </Grid>
                <Grid item xs={3}>dsadad</Grid>
            </Grid>
        </>
    );

}

export default Login;