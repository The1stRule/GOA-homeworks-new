// 4) გამოიყენეთ process ობიექტი იმისათვის, რომ ტერმინალიდან შეგვეძლოს რაღაც სახელების ჩაწერა, 
// როგორც კი დავაჭერთ enters ეგ ახალი სახელი უნდა დაემატოს ფაილში

const fs = require("fs");

process.stdin.on("data", (input) => {
    if(input.toString().trim() === "exit") {
        process.exit();
    }

    fs.appendFile("./names.txt", input.toString(), (error) => {
        if(error) {
            console.log("Can't write to this file:", error);
        }
    })
})