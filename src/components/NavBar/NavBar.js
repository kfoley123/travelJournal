import React from "react";
import plane from "../../images/takeoff.svg";

export default function NavBar() {
    return (
        <div className="nav">
            <object data={plane} />
            <h2>my travel journal.</h2>
        </div>
    );
}
