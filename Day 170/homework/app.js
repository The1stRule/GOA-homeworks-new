// 1) შექმენით cars API, უნდა შეგეძლოთ ახალი მაქანების დამატება, წაშლა, განახლება, წამოღება, 
// თქვენი დავალებაა რომ მოცემული მეთოდები დაარეგისტრიროთ cars.router.js - ის ფაილში, 
// შექმენით controllers folder - ი სადაც თქვენ შეინახავთ მოცემული მეთოდებისთვის ფუნქციებს, 
// საბოლოოდ კი მოცემული ფუნქციები დაა - export - ეთ და გამოიყენეთ cars.router.js ფაილში, 
// დაა - export - ეთ cars.router.js - ი და მთავარ ფაილში use მეთოდის გამოყენებით დაარეგისტრირეთ ის, 
// შექმენით client - ის folder - ი, და შეეცადეთ რომ თქვენი client - ი დააკავშიროთ server - თან

// External modules
const express = require("express");

// Router imports
const carsRouter = require("./router/cars.router.js");

const app = express();

app.use("/cars", carsRouter);

app.listen(3000, () => {
    console.log("Server listens...");
})