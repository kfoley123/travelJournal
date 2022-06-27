import React from "react";
import "./Card.css";

export default function Card(props) {
    return (
        <div class="card">
            <div>
                <img className="card--image" src={props.imageUrl}></img>
            </div>
            <div>
                <div className="card--locationmap">
                    <svg
                        width="9"
                        height="12"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.57866 5.25002C2.65533 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65533 1.90911 3.57866 1.90911C4.50168 1.90911 5.24928 2.65757 5.24928 3.57965C5.24928 4.50221 4.50168 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z"
                            fill="#F55A5A"
                        />
                    </svg>
                    <h3 className="card--location">{props.location}</h3>
                    <a
                        className="card--locationlink"
                        href={props.googleMapsURL}
                    >
                        View on Google Maps
                    </a>
                </div>

                <h1 className="card--title">{props.title}</h1>
                <h3>{props.startDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
