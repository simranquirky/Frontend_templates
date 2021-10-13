import React from 'react';
import './MainContent.css';
import {Grid} from '@mui/material';
import StoryBar from '../StoryBar/StoryBar.jsx';
import MainPage from '../MainPage/MainPage.jsx';

function MainContent(){

    return(
        <>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <div>
                        <StoryBar />
                        <MainPage />
                    </div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    );
}

export default MainContent;