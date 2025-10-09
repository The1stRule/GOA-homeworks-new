const { readFile, writeFile } = require("../utils/dataMethods.js");

const getTours = (res) => {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(readFile("./data/data.json"));
}

const addTour = (req, res) => {
    const tours = JSON.parse(readFile("./data/data.json"));
    let data = "";

    req.on("data", (chunk) => {
        data += chunk;
    })

    req.on("end", () => {
        tours.push(JSON.parse(data));
        writeFile("./data/data.json", JSON.stringify(tours));
        res.writeHead(201, { "content-type": "application/json" });
        return res.end(JSON.stringify({ message: "Tour added successfully" }));
    })
}

const deleteTour = (res, query) => {
    const delId = parseInt(query.id);
    const tours = JSON.parse(readFile("./data/data.json"));
    const newTours = tours.filter(el => el.id !== delId);

    writeFile("./data/data.json", JSON.stringify(newTours));
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ message: "Tour deleted successfully" }));
}

const changeTour = (req, res, query) => {
    const id = parseInt(query.id);
    const tours = JSON.parse(readFile("./data/data.json"));
    let data = "";

    req.on("data", (chunk) => {
        data += chunk;
    })

    req.on("end", () => {
        data = JSON.parse(data);
        writeFile("./data/data.json", JSON.stringify(tours.map(el => {
            if(el.id === id) {
                console.log(data);
                return { ...el, ...data };
            }

            return el;
        })));
        
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify({ message: "Tour changed successfully" }));
    })
}

module.exports = { getTours, addTour, deleteTour, changeTour };