import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import data from "./data";

function App() {
    const cards = data.map((item, i) => {
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
        </>
    );
}

export default App;

{
}
