import React from "react";
import plane from "../../images/takeoff.svg";
import NavBarCSS from "./NavBar.css";

export default function NavBar() {
    return (
        <div className="nav">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white"></svg>

            <img
                src={plane}
                fill="white"
                className="nav--image"
                alt="plane taking off"
            />
            <h2>my travel journal.</h2>
        </div>
    );
}
