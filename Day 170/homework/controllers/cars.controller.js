let cars = [
    {
        id: 1,
        brand: "Ferrari",
        country: "Italy",
        founded: 1939,
        popular_model: "LaFerrari"
    },
    {
        id: 2,
        brand: "Lamborghini",
        country: "Italy",
        founded: 1963,
        popular_model: "Aventador"
    },
    {
        id: 3,
        brand: "Bugatti",
        country: "France",
        founded: 1909,
        popular_model: "Chiron"
    },
    {
        id: 4,
        brand: "McLaren",
        country: "United Kingdom",
        founded: 1963,
        popular_model: "720S"
    },
    {
        id: 5,
        brand: "Pagani",
        country: "Italy",
        founded: 1992,
        popular_model: "Huayra"
    }
];

const getCars = (req, res) => {
    res.send(cars);
}

const getCar = (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars.find(obj => obj.id === id);
    
    if(!car) {
        return res.status(404).send("Car not found");        
    }

    res.send(car);
}

const addCar = (req, res) => {
    const newCar = { ...req.body, id: cars.at(-1).id + 1 || 1 }
    cars.push(newCar);

    res.status(201).send({
        message: "Car added successfully",
        car: newCar
    })
}

const changeCar = (req, res) => {
    const id = parseInt(req.params.id);
    const findIndex = cars.findIndex(obj => obj.id === id);

    if(findIndex === -1) {
        res.status(404).send({
            status: "Fail",
            message: "Car not found"
        })
    }

    cars[findIndex] = { ...cars[findIndex], ...req.body };

    res.json({
        message: "Car changed successfully",
        car: { ...cars[findIndex], ...req.body }
    })
}

const deleteCar = (req, res) => {
    const delId = parseInt(req.params.id);
    let deletedObj;
    cars = cars.filter(obj => {
        if(obj.id === delId) {
            deletedObj = obj;
            return false;
        }

        return true;
    })

    res.send({
        message: "Car deleted successfully",
        car: deletedObj
    });
}

module.exports = { getCars, getCar, addCar, changeCar, deleteCar };