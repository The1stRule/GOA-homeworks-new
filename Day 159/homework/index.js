// 1) os.type(), os.arch(), os.networkInterfaces(), os.homedir(), os.hostname(), os.uptime()

// გააკეთეთ ზემოთ მოცემულ os module (operating system) - ის ყველა მეთოდზე თითო მაგალითი, 
// კომენტარების სახით ახსენით თუ რას აკეთებს თითოეული მათგანი

const os = require("os");

console.log(os.type()); // os.type() - აბრუნებს ოპერაციული სისტემის ტიპს (მაგალითად: Windows_NT)
console.log(os.arch()); // os.arch() - აბრუნებს პროცესორის არქიტეკტურას (მაგალითად: x64 ანუ 64(bit))
// os.networkInterfaces() - აბრუნებს ობიექტს, რომელიც შეიცავს ინფორმაციას, კომპიუტერის ქსელური ინტერფეისების შესახებ
console.log(os.networkInterfaces());
console.log(os.homedir()); // აბრუნებს home დირექტორიის გზას
console.log(os.hostname()); // აბრუნებს კომპიუტერის ქსელურ სახელს
console.log(os.uptime()); // აბრუნებს სისტემის მუშაობის დროს წამებში(ანუ რამდენი ხანია რაც ის ჩართულია)

// 2) შექმენით ერთი ფაილი სახელად mathUtils ამ ფაილში უნდა გქონდეთ ორი ფუნქცია პირველი - რომელიც აბრუნებს ორი რიცხვის ჯამს, 
// მეორე - რომელიც აბრუნებს ორი რიცხვის ნამრავლს, ორივი ფუნქცია დაა - export - ეთ, 
// შექმენით ერთი მთავარი ფაილი რომელშიც დაა - import - ებთ ამ ფუნქციებს

const { twoSum, multiply } = require("./mathUtils.js");

console.log(twoSum(10, 5));
console.log(multiply(10, 5));

// 3) კომენტარების სახით ახსენით თუ რა არის ჩაშენებული module - ები, გამოიყენეთ ორი ჩაშენებული module - ი

// ჩაშენებული არის module-ი, რომელიც ავტომატურად არის დაინსტალიერებული node.js-ში და ჩვენ მხოლოდ მისი დაიმპორტება გვიწევს გამოსაყენებლად

console.log(process);

// 4) process - ის დახმარებით console ში დაბეჭდეთ ამჟამინდელი ფაილის სახელი რაშიც მუშაობთ, დაბეჭდეთ Node.js - ის ამჟამინდელი ვერსია

console.log(process.argv[1].split("\\").at(-1))
console.log(process.version);