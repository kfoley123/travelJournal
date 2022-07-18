import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { data } from "./data";
import React, { useState } from "react";
import TravelForm from "./components/TravelForm/TravelForm";

function App() {
    const [travelInfo, setTravelInfo] = useState(data);
    const [travelObj, setTravelObj] = useState({});

    const cards = travelInfo.map((item, i) => {
        return (
            <Card
                key={i}
                imageUrl={item.imageUrl}
                location={item.location}
                title={item.title}
                googleMapsURL={item.googleMapsUrl}
                startDate={item.startDate}
                description={item.description}
            />
        );
    });

    return (
        <>
            <NavBar />
            {cards}
            <TravelForm />
        </>
    );
}

export default App;

{
}
