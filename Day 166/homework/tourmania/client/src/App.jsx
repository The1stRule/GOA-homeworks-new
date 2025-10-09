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

    const addTour = (e) => {
        e.preventDefault();
        const newTourObj = {};

        for(const [key, value] of new FormData(e.target).entries()) {
            newTourObj[key] = value;
        }

        newTourObj.id = tours.at(-1).id + 1 || 1;

        console.log(newTourObj);

        setTours(prev => [...prev, newTourObj]);
        fetch("http://localhost:3000/tours", {
            method: "POST",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify(newTourObj)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    const deleteTour = (delId) => {
        const newTours = tours.filter(el => el.id !== delId);

        setTours(newTours);
        fetch(`http://localhost:3000/tours?id=${delId}`, {
            method: "DELETE"
        });
    }

    const changeTour = (e) => {
        e.preventDefault();

        const newPrice = parseInt(e.target.price.value);

        setTours(prev => {
            return prev.map(el => {
                if(el.name === e.target.name.value) {
                    console.log(el.id);
                    fetch(`http://localhost:3000/tours?id=${el.id}`, {
                        method: "PATCH",
                        headers: { "content-type" : "application/json" },
                        body: JSON.stringify({ price: newPrice })
                    });
                    return { ...el, price: newPrice };
                }

                return el;
            })
        })
    }

    return (
        <main>
            <form onSubmit={addTour}>
                <h3>Add new tour</h3>
                <input type="text" name="name" placeholder="Enter tour name" required />
                <br /><br />
                <input type="text" name="maxGroupSize" placeholder="Enter tour max group size" required />
                <br /><br />
                <input type="text" name="summary" placeholder="Enter the summary" required />
                <br /><br />
                <input type="text" name="price" placeholder="Enter tour price" required />
                <br /><br />
                <button>Add tour</button>
            </form>
            <form onSubmit={changeTour}>
                <h3>Change tour price by name</h3>
                <input type="text" name="name" placeholder="Enter tour name" required />
                <br /><br />
                <input type="text" name="price" placeholder="Enter new tour price" required />
                <br /><br />
                <button>Change</button>
            </form>
            <div>
                {
                    !tours.length ? <h1>Loading...</h1> :
                        tours.map((tour, index) => {
                            return (
                                <div key={index} style={{ border: "1px solid black" }}>
                                    <h2>{tour.name}</h2>
                                    <p>Max group size: {tour.maxGroupSize}</p>
                                    <p>{tour.summary}</p>
                                    <p><b>Price:</b> ${tour.price}</p>
                                    <button onClick={() => deleteTour(tour.id)}>Delete Tour</button>
                                </div>
                            );
                        })
                }
            </div>
        </main>
    );
}

export default App;