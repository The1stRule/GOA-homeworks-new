// 1) შექმენით online მაღაზიის API, უნდა შეგეძლოთ ახალი პროდუქტების დამატება, წაშლა, 
// არსებული მონაცემების განახლება (post, delete, patch, get),  მომხმარებელს უნდა შეეძლოს 
// პროდუქტების ფასის მიხედვით დალაგება (ზრდადობის მიხედვით, კლებადობის მიხედვით), 
// იმ შემთხვევაში თუ საძიებელ სიტყვაში იყო მოცემული limit - ი მაშინ limit - რება გააკეთეთ პროდუქტების მასივზე. 
// გატესტეთ მუშაობა Postman - ის გამოყენებით

const express = require("express");

const products = [
    {
        id: 1,
        name: "iPhone 16 Pro",
        category: "Smartphone",
        price: 1199.99,
        brand: "Apple"
    },
    {
        id: 2,
        name: "Samsung Galaxy Z Fold 7",
        category: "Foldable Smartphone",
        price: 1799.99,
        brand: "Samsung"
    },
    {
        id: 3,
        name: "AirPods Max 2",
        category: "Headphones",
        price: 599.00,
        brand: "Apple"
    },
    {
        id: 4,
        name: "Google Pixel 9 Pro",
        category: "Smartphone",
        price: 999.00,
        brand: "Google"
    },
    {
        id: 5,
        name: "OnePlus Watch 3",
        category: "Smartwatch",
        price: 299.00,
        brand: "OnePlus"
    }
];

const app = express();

app.get("/products", (req, res) => {
    const { sort, limit } = req.query;
    const sortedProducts = [...products];

    if(limit) {
        sortedProducts.splice(limit, products.length - limit);
    }

    if(sort === "price") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if(sort === "-price") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    res.json(sortedProducts);
})

app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(obj => obj.id === id);

    if(!product) {
        return res.status(404).json({
            status: "Fail",
            message: "Product not found"
        })
    }

    res.json(product);
})

app.delete("/products/:id", (req, res) => {
    const delId = parseInt(req.params.id);
    const productIndex = products.findIndex(obj => obj.id === delId);

    if(productIndex === -1) {
        return res.status(404).json({
            status: "Fail",
            message: "Product not found"
        })
    }

    products.splice(productIndex, 1);
    res.status(204).send();
})

app.post("/products", express.json(), (req, res) => {
    const { name, category, price, brand } = req.body;

    if(!name || !category || !price || !brand) {
        return res.status(404).send({
            status: "Fail",
            message: "All fields are required"
        })
    }

    const newProduct = { id: products.at(-1).id + 1 || 1, ...req.body };

    products.push(newProduct);
    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    })
})

app.patch("/products/:id", express.json(), (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(obj => obj.id === id);

    if(productIndex === -1) {
        return res.status(404).json({
            status: "Fail",
            message: "Product not found"
        })
    }

    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json({
        message: "Product changed successfully",
        product: products[productIndex]
    })
})

app.listen(3000, () => {
    console.log("Server listens...");
})