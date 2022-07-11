import React from "react";
import "./Home.css";

const Home = () =>{
    return(

        <div className="home">
            <p className="home-welcome">Welcome!</p>
            <p className="home-nice">Nice to have you here!</p>
            <p className="home-application">This is a bible application</p>

            <div className="inline-home">
                <a href="https://www.bible.com/" target="_blank" rel="noreferrer">Start Reading Now</a>
                <a href="https://github.com/">Explore More</a>
            </div>

        </div>

    );
};

export default Home;