// 1) შექმენით tours API - უნდა შეგეძლოთ tours - ების შეცვლა, დამატება, წაშლა და წამოღება patch, get, delete, post - მეთოდებით

const express = require("express");

const app = express();

let tours = [
    {
        id: 1,
        name: "The Forest Hiker",
        duration: 5,
        maxGroupSize: 25,
        price: 397,
        summary: "Breathtaking hike through the Canadian Banff National Park"
    },
    {
        id: 2,
        name: "The Sea Explorer",
        duration: 7,
        maxGroupSize: 15,
        price: 497,
        summary: "Exploring the jaw-dropping US east coast by foot and by boat"
    },
    {
        id: 3,
        name: "The Snow Adventurer",
        duration: 4,
        maxGroupSize: 10,
        price: 997,
        summary: "Exciting adventure in the snow with snowboarding and skiing"
    },
    {
        id: 4,
        name: "The City Wanderer",
        duration: 9,
        maxGroupSize: 20,
        price: 1197,
        summary: "Living the life of Wanderlust in the US' most beatiful cities"
    },
    {
        id: 5,
        name: "The Park Camper",
        duration: 10,
        maxGroupSize: 15,
        price: 1497,
        summary: "Breathing in Nature in America's most spectacular National Parks"
    },
    {
        id: 6,
        name: "The Sports Lover",
        duration: 14,
        maxGroupSize: 8,
        price: 2997,
        summary: "Surfing, skating, parajumping, rock climbing and more, all in one tour"
    },
    {
        id: 7,
        name: "The Wine Taster",
        duration: 5,
        maxGroupSize: 8,
        price: 1997,
        summary: "Exquisite wines, scenic views, exclusive barrel tastings,  and much more"
    },
    {
        id: 8,
        name: "The Star Gazer",
        duration: 9,
        maxGroupSize: 8,
        price: 2997,
        summary: "The most remote and stunningly beautiful places for seeing the night sky"
    },
    {
        id: 9,
        name: "The Northern Lights",
        duration: 3,
        maxGroupSize: 12,
        price: 1497,
        summary: "Enjoy the Northern Lights in one of the best places in the world"
    }
];

app.get("/tours", (req, res) => {
    res.send(tours);
})

app.get("/tours/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tours.find(obj => obj.id === id);

    if (!tour) {
        return res.status(404).send("Tour not found");
    }

    res.send(tour);
})

app.delete("/tours/:id", (req, res) => {
    const delId = parseInt(req.params.id);
    let deletedObj;
    tours = tours.filter(obj => {
        if (obj.id === delId) {
            deletedObj = obj;
            return false;
        }

        return true;
    })

    res.send({
        message: "Tour deleted successfully",
        tour: deletedObj
    });
})

app.post("/tours", express.json(), (req, res) => {
    const newtour = { ...req.body, id: tours.at(-1).id + 1 || 1 }
    tours.push(newtour);

    res.status(201).send({
        message: "Tour added successfully",
        tour: newtour
    })
})

app.patch("/tours/:id", express.json(), (req, res) => {
    const id = parseInt(req.params.id);
    const tourIndex = tours.findIndex(obj => obj.id === id);

    if(tourIndex === -1) {
        return res.status(404).send("Tour not found");
    }

    tours[tourIndex] = { ...tours[tourIndex], ...req.body };

    res.send({
        message: "Tour changed successfully",
        tour: tours[tourIndex]
    })
})

app.listen(3000, () => {
    console.log("Server listens...");
})