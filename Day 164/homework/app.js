// 1) შექმენით თქვენივე server - ი, რომელიც იღებს POST request - ს, 
// როდესაც მომხამრებელი გააგზავნის რაიმე მოთხოვნას server - მა ეს მოთხოვნები (message - ები) 
// უნდა მიიღოს და დაამატოს messages - ის მასივში, საბოლოოდ კი უნდა გამოიტანოს message - ი როგორიცაა 
// 'Message saved in messages array' console - ში, გამოიყენეთ writeHead, status - ის კოდისთვის, 
// if - ში შეამოწმეთ თუ req.url არის '/messages' და მეთოდი არის POST - ი მაშინ შეასრულეთ ზემოთ 
// მოცემული დავალება, სხვა შემთხვევაში კი გამოიტანეთ ERROR happened

// 2) კომენტარების სახით ახსენით დაწერილი კოდი (დეტალურად)

const messages = [];

const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/messages" && req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {
            data += chunk;
        })

        req.on("end", () => {
            console.log("Message saved in messages array");
            messages.push(JSON.parse(data));
            res.writeHead(200, { "Content-Type" : "application/json" });
            res.end(JSON.stringify(messages));
        })
    } else {
        res.end("ERROR happend");
    }
});

server.listen(3000, () => {
    console.log("Server listens...");
})