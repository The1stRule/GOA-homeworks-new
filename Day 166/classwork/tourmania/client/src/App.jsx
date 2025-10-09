import { useEffect } from "react";
import { useState } from "react";

const App = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/tours");
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.log("Something went wrong:", error);
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            {
                !tours.length ? <h1>Loading...</h1> :
                tours.map((tour, index) => {
                    return (
                        <div key={index}>
                            <h2>{tour.name}</h2>
                            <p>Max group size: {tour.maxGroupSize}</p>
                            <p>{tour.summary}</p>
                            <p><b>Price:</b> ${tour.price}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default App;