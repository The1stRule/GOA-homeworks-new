// 1) დააიმპორტეთ events მოდული, დაიმპორტების შემდეგ ახსენით რას წარმოადგენს ის და რაში შეიძლება ამ მოდულის გამოყენება, 
// შემდეგ გამოიყენეთ მაგ მოდულში არსებული კლასი EventEmitter, რომ შექმნათ მოვლენის გამომწვევი ობიექტი, 
// შეინახეთ ის კონსტანტაში სახელად myEvents, ამ ობიექტით შექმენით 2 მოვლენა click and submit ორივე მოვლენა გამოიწვიეთ emit მეთოდით, 
// აგრეთვე კომენტარებით ახსენით რა არის on და emit მეთოდები

// 2) გადაეცით მოვლენის გამოძახებისას მოვლენის მართველ ფუყნქციოას მინიმუმ 2 არგუმენტი და დაბეჭდეთ ისინი კონსოლში

const events = require("events");

// events არის ჩაშენებული module node.js-ში. ობიექტი, რომელიც გვაძლევს საშუალებას შევქმნათ და გამოვიწვიოთ მოვლენები

const myEvents = new events.EventEmitter();

// .on არის მეთოდი, რომელიც ქმნის მოვლენას. მას გადაეცემა ორი არგუმენტი: 
// 1. მოვლენის სახელი; 2. ფუნქცია, რომელიც გაეშვება ამ მოვლენის გამოწვევისას (მოვლენის მმართველი, ანუ eventhandler ფუნქცია)

myEvents.on("click", (...args) => {
    console.log("Button is clicked!");
    for(const arg of args) {
        console.log(arg);
    }
})

myEvents.on("submit", () => {
    console.log("The form is submitted!");
})

// .emit არის მეთოდი, რომელიც იწვევს მოვლენას, მას გადაეცემა მინიმუმ ერთი არგუმენტი:
// 1. მოვლენის სახელი, რომელიც უნდა გამოიწვიოს; 2. არგუმენტები, რომლებიც გადაეცემა მოვლენის მმართველ ფუნქციას

myEvents.emit("click", "Hello", "Back end", "and", "Node.js");
myEvents.emit("submit");

// 3) გამოიყენეთ process.stdin ობიექტი იმისათვიუს რომ ტერმინალიდან შეგვეძლოს იუნფორმაციის შეტანა, 
// მომხმარებელს უნდა შეეძლოს იქამდე რიცხვების შემოტანა სანამ ტერმინალში exit არ დაწერს, 
// სანამ პროგრამას გათიშავთ შემოტანუილი რიცხვების ჯამი გაიგეთ და დაბეჭდეთ ტერმინალში

// .stdin - standart input
// .stdout - standart output

const numbers = [];

process.stdin.on("data", (userInput) => {

    if(userInput.toString().trim() === "exit") {
        const sum = numbers.reduce((cur, acc) => acc + cur, 0);
        process.stdout.write(String(sum));
        process.exit();
    }

    numbers.push(parseInt(userInput));
})