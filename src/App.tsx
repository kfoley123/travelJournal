import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { data, TripEntry } from "./data";
import React, { useState } from "react";
import TravelForm from "./components/TravelForm/TravelForm";

export default function App(): JSX.Element {
    const [travelInfo, setTravelInfo] = useState<TripEntry[]>(data);

    const cards = travelInfo.map((item, i) => {
        return <Card key={i} tripEntry={item} />;
    });

    return (
        <>
            <NavBar />
            {cards}
            <TravelForm setTravelInfo={setTravelInfo} />
        </>
    );
}
