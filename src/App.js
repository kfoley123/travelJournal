import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { data } from "./data";
import React, { useState } from "react";
import TravelForm from "./components/TravelForm/TravelForm";

function App() {
    const [travelInfo, setTravelInfo] = useState(data);
    const [travelObj, setTravelObj] = useState({
        title: "",
        location: "",
        googleMapsUrl: "",
        date: "",
        description: "",
        imageUrl: "",
    });

    function addNewTravelLog() {
        setTravelInfo((prevTravelInfo) => {
            return [...prevTravelInfo, travelObj];
        });
    }

    const cards = travelInfo.map((item, i) => {
        return (
            <Card
                key={i}
                imageUrl={item.imageUrl}
                location={item.location}
                title={item.title}
                googleMapsUrl={item.googleMapsUrl}
                date={item.date}
                description={item.description}
            />
        );
    });

    return (
        <>
            <NavBar />
            {cards}
            <TravelForm
                setTravelObj={setTravelObj}
                addNewTravelLog={addNewTravelLog}
            />
        </>
    );
}

export default App;
