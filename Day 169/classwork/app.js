// 1) შექმენით route რომლის მეთოდიც იქნება GET და ბილიკი /tours, გაითვალისწინეთ ის ფაქტი, 
// რომ ეს როუტე აბრუნებს მთლიან ტურების მასივს, მაგრამ შესაძლოა მიიღოთ  query სახელად sort, 
// რომელშიც გადმოგეცემათ ან price ან -price, თუ გადმოგეცათ price მაგ შემთვევაში დაალაგეთ ზრდადობით 
// ტურების მასივი და დაუბრუნეთ დალაგებული მასივი (შენიშნვნა არ შეცვლაოტ ორიგინალი მასივი), 
// მაგრამ თუ გადმოგეცათ -price მაგ შემთხვევაში დაალაგეთ ტურების მასივი კლებადობით ფასის მიხედვით, 
// თუ საერთოდ არ გადმოგეცათ sort query მაგ შემთხვევაში დააბრუნეთ ჩვეულებრივად ტურების მასივი

// 2) განიხილეთ limit საძიებელი სიტყვა, რომელსაც გადაეცემა რიცხვი, 
// მაგალითად ლინკი მოცემულია ამ სახით /tours?sort=price&limit=2 ეს ნიშნავს იმას, 
// რომ ჩვენ ვიღებთ პირველ ორ მნიშვნელობას მასივიდან და ვალაგებთ ზრდადობით

const express = require("express");

const tours = [
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

const app = express();

app.get("/tours", (req, res) => {
    const { sort, limit } = req.query;
    const sortedTorus = [...tours];

    if(limit) {
        sortedTorus.splice(limit, tours.length - limit);
    }

    if(sort === "price") {
        sortedTorus.sort((a, b) => a.price - b.price);
    } else if(sort === "-price") {
        sortedTorus.sort((a, b) => b.price - a.price);
    }

    res.json(sortedTorus);
})

app.listen(3000, () => {
    console.log("Server listens...");
})