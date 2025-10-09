const url = require("url");

const { getTours, addTour, deleteTour, changeTour } = require("../controllers/tours.controller.js");

const router = (req, res) => {
    const { method } = req;
    const { pathname, query } = url.parse(req.url, true);

    if (method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    if(pathname === "/tours" && method === "GET") {
        return getTours(res);
    } else if(pathname === "/tours" && method === "POST") {
        return addTour(req, res);
    } else if(pathname === "/tours" && method === "DELETE") {
        return deleteTour(res, query);
    } else if(pathname === "/tours" && method === "PATCH") {
        return changeTour(req, res, query);
    }

    return res.end("404 Not Found");
}

module.exports = router;