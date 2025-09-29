// 1) შექმენით თვქენი სერვერი რომელსაც აამუშავებთ პორტ 3000ზე, 
// როდესაც მოთხოვნა გამოიგზავნება ან / ან /home ურლზე მაგ შემთხვევაში წაიკითხეთ index.html 
// ფაილის შიგთავის და დაუბრენთ end ით, ხოლო თუ ბილიკი უდრის /register წაიკითხეთ register.html შიგთავის და დაუბრუნეთ, 
// საბოლოოდ თუ ბილი არცერთს არ ემთხვევა დაუბრუნეთ ტექსტად ერთი სათაური და ჩასვით 404 Not Found

const http = require("http");
const fs = require("fs");

const homeContent = fs.readFileSync("./index.html", "utf-8");
const registerContent = fs.readFileSync("./register.html", "utf-8");

const server = http.createServer((req, res) => {
    if(req.url === "/" || req.url === "/home") {
        res.end(homeContent);
    } else if (req.url === "/register") {
        res.end(registerContent);
    } else {
        res.end("<h1>404 Not Found</h1>");
    }
})

server.listen(3000, () => {
    console.log("Server listens...");
})