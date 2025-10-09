// 1) express - ის გამოყენებით შექმენით server - ი, რომელიც მიიღებს get მოთხოვნას და 
// დააბრუნებს მანქანების ობიექტს json - ის ფორმატში

// Hello Express JS

const express = require("express");

const app = express();

app.get("/cars", (req, res) => {
    res.json([
        {
            brand: "Bugatti",
            model: "Chiron",
            year: 2023,
            topSpeed: 420,
        },
        {
            brand: "Lamborghini",
            model: "Aventador",
            year: 2022,
            topSpeed: 350,
        },
        {
            brand: "Ferrari",
            model: "SF90 Stradale",
            year: 2023,
            topSpeed: 340,
        }
    ])
})

app.listen(3000, () => {
    console.log("Server listens...");
})