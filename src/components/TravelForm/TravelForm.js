import React from "react";
import "./TravelForm.css";

export default function TravelForm() {
    return (
        <>
            <form className="formContainer">
                <h1>New Entry: </h1>

                <label for="photoURL">Photo URL: </label>
                <input
                    type="text"
                    id="photoURL "
                    name="photoURL"
                    class="input"
                />
                <label for="location">Location (City, Country): </label>
                <input
                    type="text"
                    id="location "
                    name="location"
                    class="input"
                />
                <label for="googleMapsURL">Google Maps URL: </label>
                <input
                    type="text"
                    id="googleMapsURL"
                    name="googleMapsURL"
                    class="input"
                />
                <label for="date">Date Visited: </label>
                <input
                    type="date"
                    id="start"
                    value=""
                    name="date"
                    class="input"
                />
                <label for="description">Description: </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    class="input"
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
