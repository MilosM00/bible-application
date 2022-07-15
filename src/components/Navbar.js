import React from "react";
import "./Navbar.css";

const Navbar = (props) =>{
    return(

        <div>
        
            <div className="navbar">

                <p className="navbar-title" onClick={props.scrollUp}>Bible Application</p>

                <p className="hamburger" onClick={props.listEvent}>
                    {
                        props.showList === true ? <i className="fa fa-bars"></i> : <i className="fa fa-times"></i>
                    }
                </p>

                <ul>
                    <li><p onClick={props.scrollUp}>Home</p></li>
                    <li><a href="#id-about">About</a></li>
                    <li><a href="#id-verse">Verse</a></li>
                </ul>

            </div>

            {props.showList === false &&
                <div className="navbar-list">
                    <ul>
                        <li><p onClick={props.homeEvent}>Home</p></li>
                        <li><a href="#id-about" onClick={props.listEvent}>About</a></li>
                        <li><a href="#id-verse" onClick={props.listEvent}>Verse</a></li>
                    </ul>
                </div>
            }

        </div>

    );
};

export default Navbar;