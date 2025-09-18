// 🧠 დავალება: ოპტიმიზაცია useMemo - ით
// შექმენი React კომპონენტი სახელად ExpensiveCalculator, რომელიც:


// აქვს input ველი, სადაც მომხმარებელი შეიტანს რიცხვს.
// რიცხვის ცვლილებისას გამოითვლება ძალიან რთული ფუნქცია(მაგ., რიცხვის უზარმაზარი ფაქტორიალი ან დიდი ციკლი).
// ამ რთული ფუნქციის შედეგი გამოისახება ეკრანზე.
// გვერდით არის სხვა input ველი, რომელიც უბრალოდ ტექსტს იღებს და არ უნდა გამოიწვიოს რთული ფუნქციის თავიდან გამოთვლა.
// გამოიყენე useMemo, რომ რთული გამოთვლა შესრულდეს მხოლოდ მაშინ, როცა რიცხვი იცვლება.

import { useMemo, useState } from "react";

const Numfactorial = (number) => {
    if (number < 0 || number === "") return "";

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

const ExpensiveCalculator = () => {
    const [number, setNumber] = useState(0);
    const [userInput, setUserInput] = useState("");

    const result = useMemo(() => Numfactorial(number), [number]);

    return (
        <>
            <h1>Factorial {number} is: {result}</h1>
            <input type="number" value={number} onChange={(e) => {
                const value = e.target.value;
                value === "" ? setNumber(value) : setNumber(parseInt(value));
            }} />

            <p>UserInput: {userInput}</p>
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        </>
    );
}

export default ExpensiveCalculator;