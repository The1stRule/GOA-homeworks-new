const http = require("http");
const router = require("./router/tours.router.js");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    router(req, res);
})

server.listen(3000, () => {
    console.log("Server listens...");
})