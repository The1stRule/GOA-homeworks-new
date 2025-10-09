// 1) შექმენით ფოლდერი სახელად tourmania, შემდეგ მაგ ფოლდერში დაამატეთ server ფოლდერი, 
// server ფოლდერში შექმენით data, router, controllers და utils 
// 2) დაამატეთ server ფოლდერში  app.js ფაილი და შექმენით საბაზსიო სერვერი
// 3) შექმენით router ფოლდერში ფაილი სახელად tours.router.js, მაგ ფაილში შექმენით ფუნქცია სახელად routes, 
// რომელსაც გადსაეცამ ორი პარამეტრი req, res, მოთხოვნის ობიექტიდან ამოიღეთ ორი კუთვნილება url და method, 
// შემდეგ გამოიყენეთ if იმისათის რომ შეამოწმოტ უდრის თუ არა url /tours და method GET თუ უდრის გამოიძახეთ ფუნქცია 
// სახელად getTours და გადაეცით ორი მნიშვნელობა req და res აგრეთვე წინ დაუწერეთ return რომ გათიშოთ routes ფუნქცია
// 4) controllers ფოლდერში შექმენით ფაილი სახელად tours.controller.js, რომელშიც შექმენით getTours ფუნქციას მისი დავალებაა 
// წაიკითხოს ფაილი რომელშიც არის ტურები მოცემული და დააბრუნოს res.end ის გამოყენებით სანამ დააბრუნებთ გამოიყენეთ 
// res.writeHead(200, { "content-type" : "application/json"}) იმისათის რომ ბრაუზერს ვუთხრათ, 
// რომ ვაბრუნებთ json ფორმატში ტურებს res.end წინ დაუწერეთ return
// 5) utils ფოლდერში შექმენით ფაილი სახელად dataMethods რომელშიც შექმენით ფუნქციას, 
// სახელად readFile რომელსაც გადაეცემა filePathპარამეტრი წაიკითხეთ მაგ ფაილში მყოპფი ინფორმაცია 
// სინქრონული გზით და დააბრუნეთ წაკიტხული ინფორმაცია
// 6) data ფოლდერში შექმენით ფაილი სახელად data.json და დაამატეთ ეს ინფორმაცია

const http = require("http");
const router = require("./router/tours.router.js");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    router(req, res);
})

server.listen(3000, () => {
    console.log("Server listens...");
})