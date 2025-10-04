// დაამატეთ put შემთხვევა, თვქენთან იგზავნება ობიექტი რომელში შეიძლება მოცემული იყოს ერთერთი კუთვბნილება 
// მაგ: make, model ან year, რომელი მნიშნელობაც გადმოგვეცემა მაგ მნიშვნელობით შევცვლით შესაბამის კუთვნილებას, 
// აგრეთვე ლინკში უნბდა იყოს მოცემული მანქანის ID რომლის შეცვლაც გინდათ

const http = require('http');
const fs = require('fs');
const url = require('url');

// Controller
const getCars = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(fs.readFileSync('cars.json', 'utf-8'));
}

const deleteCar = (req, res) => {
    const urlParts = url.parse(req.url, true);
    const carId = parseInt(urlParts.query.id);

    const cars = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));
    const updatedCars = cars.filter(car => car.id !== carId);

    fs.writeFileSync('cars.json', JSON.stringify(updatedCars));

    return res.end('<h1>Car deleted successfully</h1>');
}

const createCar = (req, res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const newCar = JSON.parse(body);
        const cars = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));
        newCar.id = cars.length ? cars[cars.length - 1].id + 1 : 1;
        cars.push(newCar);

        fs.writeFileSync('cars.json', JSON.stringify(cars));

        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newCar));
    })
}

const changeCar = (req, res) => {
    const urlParts = url.parse(req.url, true);
    const cars = JSON.parse(fs.readFileSync("./cars.json", "utf-8"));
    const carId = parseInt(urlParts.query.id);

    let body = '';

    req.on("data", (chunk) => {
        body += chunk.toString();
    })

    req.on("end", () => {
        body = JSON.parse(body);
        const newCars = cars.map(el => {
            if(el.id === carId) {
                for(const key in body) {
                    el[key] = body[key];
                }
            }

            return el;
        })

        fs.writeFileSync("./cars.json", JSON.stringify(newCars), "utf-8");
        return res.end("<h1>Car element is changed");
    })
}

const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return getCars(req, res);
        case 'DELETE':
            return deleteCar(req, res);
        case 'POST':
            return createCar(req, res);
        case 'PUT':
            return changeCar(req, res);
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})