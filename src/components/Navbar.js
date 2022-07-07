import React from "react";
import "./Navbar.css";

const Navbar = (props) =>{
    return(

        <div>
        
            <div className="navbar">

                <p className="navbar-title">Bible Application</p>

                <p className="hamburger" onClick={props.listEvent}>
                    {
                        props.showList === true ? <i className="fa fa-bars"></i> : <i className="fa fa-times"></i>
                    }
                </p>

                <ul>
                    <li><a href="https://github.com/">Home</a></li>
                    <li><a href="https://github.com/">About</a></li>
                    <li><a href="https://github.com/">Find</a></li>
                </ul>

            </div>

            {props.showList === false &&
                <div className="navbar-list">
                    <ul>
                        <li><a href="https://github.com/">Home</a></li>
                        <li><a href="https://github.com/">About</a></li>
                        <li><a href="https://github.com/">Find</a></li>
                    </ul>
                </div>
            }

        </div>

    );
};

export default Navbar;