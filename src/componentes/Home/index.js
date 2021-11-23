import React from "react";
import "./Home.css";
import Homeimg from './Homeimg.png'

function Home() {
    return(
        <div className="Home">
            <img src={Homeimg} alt="HomeImg" />
        </div>
    );
}

export default Home;