import React from "react";
import './Home.css';
import Navbar from '../Navbar/Navbar.jsx';
import MainContent from '../MainContent/MainContent.jsx';

function Home(){

    return(
        <div className="home-container">
            <Navbar/>
            <MainContent/>
        </div>
    );
}


export default Home;
