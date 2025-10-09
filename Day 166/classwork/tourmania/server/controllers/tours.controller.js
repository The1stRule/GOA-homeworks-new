const { readFile } = require("../utils/dataMethods.js");

const getTours = (req, res) => {
    res.writeHead(200, { "content-type" : "application/json" });
    return res.end(readFile("./data/data.json"));
}

module.exports = { getTours };