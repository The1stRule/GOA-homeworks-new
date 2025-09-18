// 1) პირველი <input> უნდა იყოს რიცხვის (n) შესაყვანი ველი, მეორე - Light/Dark theme - ის switch - ი, 
// დაწერეთ ფუნქცია findPrimesUpTo(n), რომელიც აბრუნებს მარტივი რიცხვების მასივს 2–დან n–მდე, შექმენით React კომპონენტი
// გამოიყენეთ ერთი useMemo ჰუკი prime რიცხვების გამოსათვლელად, დამოკიდებულებების მასივში მიუთითეთ მხოლოდ n, 
// რადგან ფუნქცია გაეშვას მხოლოდ მაშინ როდესაც n შეიცვლება ეკრანზე გამოიტანეთ primes რიცხვების მასივი და დარწმუნდით, 
// რომ light/dark theme შეცვლის დროს არ ხდება findPrimesUpTo – ის ხელახლა re-ender - ი

function findPrimesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }

  console.log(primes);
  return primes;
}

import { useMemo, useState } from "react";
import "index.css"

const App = () => {
    const [number, setNumber] = useState(2);
    const [theme, setTheme] = useState("light");

    const findPrimesList = useMemo(() => findPrimesUpTo(number), [number]);

    const handleChange = ({ target }) => {
        if(target.value >= 2) {
            setNumber(target.value)
        }
    }

    return (
        <main className={theme}>
            <input type="number" value={number} onChange={handleChange} />
            <br /><br /><br />
            <button onClick={() => setTheme(prev => {
                return prev === "light" ? "dark" : "light"
            })}>Change theme to Light</button>

            <h2>Prime numbers 2-{number}</h2>
            <ol>
                {
                    findPrimesList.map((curValue, index) => <li key={index}>{curValue}</li>)
                }
            </ol>
        </main>
    );
}

export default App;