// 2) დაა - import - ეთ 'events' module - ი, შექმენით მოვლენა სახელად userJoined, 
// რომელიც იღებს მომხმარებლის სახელს არგუმენტად და console ში გამოაქვს 
// `User: ${username} has joined` გამოიყენეთ EventEmitter ობიექტში არსებული მეთოდი 
// სახელად emit - ი იმისთვის რომ გამოიწვიოთ (გამოიძახოთ) მოვლენა

const events = require("events");

const myEvents = new events.EventEmitter();

myEvents.on("userJoined", (username) => {
    process.stdout.write(`User: ${username} has joined\n`)
})

myEvents.emit("userJoined", "Kvara");