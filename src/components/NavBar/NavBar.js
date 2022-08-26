import React from "react";
import plane from "../../images/takeoff.svg";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div className="nav">
            <img src={plane} className="nav--image" alt="plane taking off" />
            <h2>my travel journal.</h2>
        </div>
    );
}
