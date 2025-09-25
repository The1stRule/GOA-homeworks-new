// 1) შექმენით ერთი ფაილი text.txt მასში დაწერეთ რაიმე წინადადება, 
// თქვენი დავალებაა რომ დაა - import - ოთ fs მოდული, წაიკითხოთ ფაილი 
// readFile მეთოდის გამოყენებით და დაბეჭდოთ ის

const fs = require("fs");

fs.readFile("./text.txt", "utf8", (error, data) => {
    if(error) {
        console.log("Can't read this file:", error);
    } else {
        console.log("File succsesfully read:", data);
    }
})

// 2) 1 დავალების გაკეთება სცადეთ ხელახლა ამჯერად სინქრონიზირებულად fs.readFileSync - ის გამოყენებით, 
// შეინახეთ ის ცვლადში და დაბეჭდეთ

const data = fs.readFileSync("./text.txt", "utf-8");

console.log(data);

// 3) თქვენი დავალებაა რომ fs.readFile - ს გადასცეთ არასწორი ფაილის მისამართი (რომელიც არ არსებობს), 
// ეს გამოიწვევს error - ს, იმ შემთხვევაში თუ error - ი (შეცდომა) დაფიქსირდა დაბეჭდეთ რომ 'File path incorrect', 
// სხვა შემთხვევაში კი დაბეჭდეთ ფაილის content - ი

fs.readFile("./txt.txt", "utf8", (error, data) => {
    if(error) {
        console.log("File path incorrect:", error);
    } else {
        console.log("File succsesfully read:", data);
    }
})

// 4) შექმენით ფაილი text1.txt მასში შეინახეთ რაიმე სიტყვები, 
// თქვენი დავალებაა რომ fs.readFile - ის დახმარებით წაიკითხოთ ფაილი და console - ში დაბეჭდოთ, სიტყვები upperCase() - ში

fs.readFile("./text1.txt", "utf-8", (error, data) => {
    if(error) {
        console.log("Can't read this file:", error);
    } else {
        console.log(data.toUpperCase());
    }
})