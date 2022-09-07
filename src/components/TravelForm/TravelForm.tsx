import React, { useState, Dispatch, SetStateAction } from "react";
import { TripEntry } from "../../data";
import "./TravelForm.css";

export interface TravelFormProps {
    setTravelInfo: Dispatch<SetStateAction<TripEntry[]>>;
}

export default function TravelForm(props: TravelFormProps) {
    const [travelObj, setTravelObj] = useState<TripEntry>({
        title: "",
        location: "",
        googleMapsUrl: "",
        date: "",
        description: "",
        imageUrl: "",
    });

    function addNewTravelLog(): void {
        props.setTravelInfo((prevTravelInfo) => {
            return [...prevTravelInfo, travelObj];
        });
    }

    function formatDate(date: string): string {
        const monthArray = [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        let newDate = date.split("-").reverse();
        let newArray = newDate.map((item, index) => {
            if (index === 1) {
                return monthArray[parseInt(item) - 1] + ",";
            }
            return item;
        });
        return newArray.join(" ");
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let { name, value } = event.target;
        setTravelObj((prevFormData: TripEntry) => {
            if (name === "date") {
                value = formatDate(value);
            }
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    return (
        <>
            <form
                className="formContainer"
                onSubmit={(event) => {
                    event.preventDefault();
                    addNewTravelLog();
                }}
            >
                <h1>New Entry: </h1>

                <label htmlFor="imageUrl">Photo URL: </label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className="input"
                    onChange={handleChange}
                />
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="input"
                    onChange={handleChange}
                />
                <label htmlFor="location">Location (City, Country): </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    className="input"
                    onChange={handleChange}
                />
                <label htmlFor="googleMapsUrl">Google Maps URL: </label>
                <input
                    type="text"
                    id="googleMapsUrl"
                    name="googleMapsUrl"
                    className="input"
                    onChange={handleChange}
                />
                <label htmlFor="date">Date Visited: </label>
                <input
                    type="date"
                    id="start"
                    name="date"
                    className="input"
                    onChange={handleChange}
                />
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    className="input"
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
