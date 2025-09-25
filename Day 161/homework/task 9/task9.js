// 9) შექმენით ფაილი text2.txt მასში შეინახეთ წინადადებები, 
// process ობიექტის დახმარებით მომხმარებელს შემოატანინეთ რაიმე წინადადება, 
// enter - ზე დაჭერის შემდეგ მომხმარებლის მიერ შემოტანილი წინადადება უნდა დაემატოს text2.txt - ის ფაილში

const fs = require("fs");

process.stdin.on("data", (input) => {
    fs.appendFile("./text2.txt", `\n${input.toString()}`, (error) => {
        if(error) {
            console.log("Can't write to this file:", error);
        }

        process.exit();
    })
})