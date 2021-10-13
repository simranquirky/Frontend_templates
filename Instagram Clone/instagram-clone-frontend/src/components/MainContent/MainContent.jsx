import React from 'react';
import './MainContent.css';
import {Grid} from '@mui/material';

function MainContent(){

    return(
        <>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <div></div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    );
}

export default MainContent;