// 1) შექმენით json ის ფაილი სახელად cars ჩათჯიპიტის დააწერეიეთ 10 ელემენტიანი მასიივი json ის ფორმატში და ჩასვით ფაილში, 
// შემდეგ შექმენით სერვერი რომელიც ამოწმებს უდრის თუ არა ბილიკი /cars  და მეთოდი GET თუ ემთვევა დაუბრუნეთ json ის მონაცემები, 
// რომელსაც წაიკითხავთ ფაილიდან, აგრეთვე გამოიყენეთ writeHead იმისათის, რომ გაუწეროთ 
// სტატუსის კოდი და დამატებითი ინფორმაცია content-type მოიძიეთ ამის შესახებ ინფორმაცია

// 2) გადმოწერეთ და დააინსტალირეთ postman + გააკეთეთ აქაუნთი

// 3) postman დაყენების შემდეგ გააგზავნეთ post მოთხოვნა მონაცემებით თქვენს სერვერზე, 
// სერვერზე მონაცემების მიღებისას გადათარგმნეთ json იდან ჩვეულებრივ მონაცემად და დაამატეთ cars მასივში

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const carsArray = JSON.parse(fs.readFileSync("./cars.json", "utf-8"));

    if(req.url === "/cars" && req.method === "GET") {
        res.writeHead(200, { "Content-Type" : "application/json" });
        res.end(JSON.stringify(carsArray));
    } else if(req.url === "/cars" && req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {
            data += chunk;
        })

        req.on("end", () => {
            carsArray.push(JSON.parse(data));
            console.log(carsArray);
            fs.writeFile("./cars.json", JSON.stringify(carsArray), "utf-8", (err) => {
                if(err) {
                    console.log("Something went wrong", err);
                }
            });
            res.writeHead(200, { "Content-Type" : "application/json" });
            res.end(JSON.stringify(carsArray));
        })
    }
    
    else {
        res.end("404 Not Found");
    }
})

server.listen(3000, () => {
    console.log("Server listens...");
})