import { useMemo, useState } from "react";

// 4) შექმენით ერთი input - ი სადაც მომხმარებელი შემოიტანს რაიმე სახელს, შექმენით სახელების სია რომელიც შედგება 50 სახელისგან, 
// უნდა გქონდეთ ერთი ფუნქცია, რომელიც გაფილტრავს სიას მომხმარებლის მიერ შემოტანილი სახელის მიხედვით, გამოიყენეთ useMemo კაუჭი, 
// რომ ფილტრაციის ფუნქცია გაუშვათ მხოლოდ მაშინ როცა მომხმარებლის მიერ შემოტანილი სახელის მნიშვნელობა შეიცვლება, 
// უნდა გქონდეთ მდგომარეობა სახელად search რომლის მნიშვნელობაც განახლდება მომხმარებლის მიერ შემოტანილი მნიშვნელობის მიხედვით, 
// გადაუარეთ სიას map - ის გამოყენებით რადგან თითოეული სახელი გამოიტანოთ ეკრანზე დაულაგებელი list - ის სახით

const names = [
    "saba", "Nino", "Giorgi", "Mariam", "Luka", "Ana", "Dato", "Natia", "Irakli", "Tamar",
    "Beka", "Elene", "Nikoloz", "Keti", "Giga", "Ia", "Levan", "Nika", "Salome", "Lile",
    "Zurab", "Maka", "Gvanca", "Sandro", "Tina", "Temo", "Maia", "Eka", "Rezo", "Kakha",
    "Sopo", "Lasha", "Natia", "Zura", "Guga", "Tazo", "Natia", "Misho", "Tamuna", "Keti",
    "Lali", "Dato", "Anano", "Giorgi", "Lika", "Teo", "Sandro", "Lena", "Tako", "Givi"
];

const App = () => {

    const [search, setSearch] = useState("");

    console.log(search);

    const filteredNames = useMemo(() => {
        console.log("Filtering");
        return names.filter((name) => name.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    return (
        <>
            <input type="text" placeholder="Enter your name" onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {
                    filteredNames.map((curValue, index) => <li key={index}>{curValue}</li>)
                }
            </ul>
        </>
    );
}

export default App;