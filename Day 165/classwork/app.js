// 1) შექმენით სერვერი, რომელიც აბრუნებს სერვერიდან მანქანის მონაცემებს მინ 10 ელ, 
// თვენი დავალებაა ფაილიდან წაიკითხოთ ეს მონაცემები და დააბრუნეთ ყველა მონაცემი კლიენტთან, 
// მაგრამ თუ ლინკში არის მოცემული საძიებელი სიტყვა (შეამოწმეთ გვაქვს თუ არა id) მაგ შემთხვევაში 
// უბრუნებთ ერთ კონკრეტულ მანქანას, თუ id არ არის ვალიდური (ვგულისხმოპბ არ არსებობს ობიექტი გადმოცემული id) 
// მაგ შემთხვევაშიო დააბრუნეთ კოდი 404 და html თეგი რომელში შასმულია მანქანა ვერ მოიძებნა

const http = require("http");
const fs = require("fs");

const cars = JSON.parse(fs.readFileSync("./cars.json", "utf-8"));

const server = http.createServer((req, res) => {
    const urlParts = new URL(req.url, `http://${req.headers.host}`);
    const id = parseInt(urlParts.searchParams.get("id"));
    if(!id) {
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify(cars));
    }

    const car = cars.find(el => el.id === id);
    if(!car) {
        res.writeHead(404);
        return res.end("<h1>Car not found</h1>");
    }

    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(car))
})

server.listen(3000, () => {
    console.log("Server listens...");
})