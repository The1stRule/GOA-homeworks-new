// 1) შექმენით 3 განსხვავებული html - ის ფაილი, ჩაწერეთ მათში რაიმე ტექსტები, შექმენით თქვენივე server - ი 
// აამუშავეთ ის  port - 3000 ზე, თქვენი დავალებაა რომ მომხმარებელს random - ულად გამოუტაონოთ html - ის ფაილები, 
// დაგჭირდებათ fs.readFile რომ წაიკითხოთ random html - ის ფაილები

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.readFile(`./randomPage${Math.floor(Math.random() * 3 + 1)}.html`, "utf-8", (err, data) => {
        if(err) {
            console.log("Something went wrong:", err);
            res.end("Interval server error");
        } else {
            res.end(data);
        }
    })
})

server.listen(3000, () => {
    console.log("Server listens...");
})

// 2) კომენტარების სახით ახსენით თუ ზოგდად რა არის server - ი, ასევე ახსენით თუ რა არის request (მოთხოვნა), 
// response (პასუხი), რაში ვიყენებთ http module - ს, რას ნიშნავს res.end() - ი

// server-ი არის პროგრამა, რომელსაც იღებს მოთხოვნას client-სგან, ამუშავებს მას და უბურნებს მას პასუხს.
// server-ის მეშვეობით ხდება კომუნიკაცია client-სა და მონაცემთა ბაზას შორის

// request - მოთხოვნა, რომელსაც client-ი უგზავნის server-ს
// response - პასუხი, რომელსაც სერვერი უბრუნებს client-ს

// http არის ჩაშენებული მოდული Node.js-ში, რომელიც გამოიყენება სერვერის შექმნისთვის, მოთხოვნების გაგზავნისთვის და ა.შ

// res.end()-ის საშუალებით server-ი უგზავნის პასუხს(response) client-ს, რომელიც ძირითადად html-ის სახით გამოჩნდება საიტზე.
// პასუხის ფორმატი დამოკიდებულია Content-Type-ზე