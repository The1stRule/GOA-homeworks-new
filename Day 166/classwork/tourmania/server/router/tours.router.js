const { getTours } = require("../controllers/tours.controller.js");

const router = (req, res) => {
    const { url, method } = req;

    if(url === "/tours" && method === "GET") {
        return getTours(req, res);
    }
}

module.exports = router;