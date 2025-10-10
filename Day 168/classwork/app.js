// 1) შექმენით express სერვერი, რომელიც უსმენს მოთხოვნებს პორეტ 3000სზე თქვენი დავალებაა, 
// შექმნათ თავიდან მასივი რომელშიც იქნება 5 მანქანა მოცემული, დაარეგისტრირეთ როუტე GET /cars 
// რომელიც დააბრუნებს ყველა მანქანას json ფორმატში, შემდეგ დაარეგისტრირეთ GET /cars/:id როუტე, 
// დასერჩეთ ექსპრესში როგორ გამოიყენოთ პარამეტრები, შესწავლის შემდეგ მასივიდან აირჩიეთ ის მანქანა, 
// რომელიც ემთხვევა გადმოცემულ პარამეტრს და დააბრუნეთ json ფორმატში, დაამატეთ DELETE /cars/:id როუტე, 
// რომლითაც მასივიდან წაშლით ობიექტს და დააბრუნებთ წაშლილ ობიექტს შესაბამისი სტატუსის კოდით და საბოლოოდ 
// შექმენით POST /cars როუტე რომლითაც დაამატებთ ახალ მანქანას მასივში ID ავტოიმატურად უნდა ემატებოდეს და შექმენის შემდეგ 
// დააბრუნებთ ახალ მანქანის ობიექტს json ფომატში, მოიძიეთ იუნფორმაცია midlleware  შესახებ და რას აკეთებს express.json 
// ახსენით კომენტარებით, გატესტეთ postman გამოყენებით თქვენი შექმენილი express ის API

const express = require("express");

let cars = [
    {
        id: 1,
        brand: "Ferrari",
        country: "Italy",
        founded: 1939,
        popular_model: "LaFerrari"
    },
    {
        id: 2,
        brand: "Lamborghini",
        country: "Italy",
        founded: 1963,
        popular_model: "Aventador"
    },
    {
        id: 3,
        brand: "Bugatti",
        country: "France",
        founded: 1909,
        popular_model: "Chiron"
    },
    {
        id: 4,
        brand: "McLaren",
        country: "United Kingdom",
        founded: 1963,
        popular_model: "720S"
    },
    {
        id: 5,
        brand: "Pagani",
        country: "Italy",
        founded: 1992,
        popular_model: "Huayra"
    }
];

const app = express();

app.get("/cars", (req, res) => {
    res.send(cars);
})

app.get("/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars.find(obj => obj.id === id);
    
    if(!car) {
        return res.status(404).send("Car not found");        
    }

    res.send(car);
})

app.delete("/cars/:id", (req, res) => {
    const delId = parseInt(req.params.id);
    let deletedObj;
    cars = cars.filter(obj => {
        if(obj.id === delId) {
            deletedObj = obj;
            return false;
        }

        return true;
    })

    res.send({
        message: "Car deleted successfully",
        car: deletedObj
    });
})

app.post("/cars", express.json(), (req, res) => {
    const newCar = { ...req.body, id: cars.at(-1).id + 1 || 1 }
    cars.push(newCar);

    res.status(201).send({
        message: "Car added successfully",
        car: newCar
    })
})

app.listen(3000, () => {
    console.log("Server listens...");
})

// Middleware არის ფუნქცია, რომელიც შესრულდება request-ის მიღებამდე ან response-ის გაგზავნამდე. 
// მას შეუძლია შეცვალოს, ან შეამოწმოს request და response ობიექტები

// express.json() არის ერთ-ერთი middleware ფუნქცია, რომელიც JSON ფორმატში გამოგზავნილ მონაცემებს პარსავს და ანიჭებს req.body კუთვნილებას