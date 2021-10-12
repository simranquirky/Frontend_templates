import React from 'react';
import './Navbar.css';
import { Grid } from '@mui/material';
import InstaLogo from '../../img/instalogo.png';
import home from '../../img/home.svg';
import message from '../../img/message.svg';
import find from '../../img/find.svg';
import heart from '../../img/love.svg';
import Avatar from '@mui/material/Avatar';
import PP from '../../img/pp1.png';

function Navbar(){

    return(
        
        <div className="navbar">
            <div className="navbar-contentbar">
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <img className="navbar-instalogo" src={InstaLogo} alt="Instagram" width="105px"/>
                    </Grid>
                    <Grid item xs={3}>
                        <input type="text" className="navbar-search" placeholder="Search"/>
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="navbar-icon" src={home} alt="" width="25px"/>
                        <img className="navbar-icon" src={message} alt="" width="25px"/>
                        <img className="navbar-icon" src={find} alt="" width="25px"/>
                        <img className="navbar-icon" src={heart} alt="" width="25px"/>
                        <Avatar className="navbar-avatar" src={PP}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Navbar;