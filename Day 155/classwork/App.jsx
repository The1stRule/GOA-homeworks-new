// 1) გამოიყენეთ useMemo კაუჭი, იმისათვის რომ მოახდინოთ 

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

  console.log("re-calculations", primes);
  return primes;
}

// ამ ფუნქციის მიერ დაბრუნებული მნიშვნელობის ქეშირეება, რადგან ძვირიანი გამოთვლა თავიდან არ გაეშვას

const App = () => {
    const [number, setNumber] = useState(0);
    const [userInput, setUserInput] = useState("");

    const result = useMemo(() => findPrimesUpTo(number), [number]);

    return (
        <>
            <form>
                <input type="text" onChange={(e) => setNumber(parseInt(e.target.value))} />
                <input type="text" onChange={(e) => setUserInput(e.target.value)} />
            </form>
        </>
    );
}

// ახსენით კომენტარებით რა არის expensive calculation, რას აკეთებს useMemo, რა არის ქეშირება 

// expensive calculation - ძვირიანი გამოთვლა, ეს შეიძლება იყოს ფუნქცია, 
// რომელსაც კალკულაციისთვის დიდი დრო სჭირდება

// useMemo - არის ჩაშენებული კაუჭი React-ში, რომელსაც გადაეცემა callback ფუნქცია და დამოკიდებულების მასივი. 
// callback ფუნქცია აუცილებლად უნდა აბრუნებდეს მნიშვნელობას, რადგან შემდგომ მისი ქეშირება უნდა მოხდეს. 
// დამოკიდებულების მასივში შეგვიძლია ჩავწეროთ ის მდგომარეობები, რომლების შეცვლაც გამოიწვევს callback ფუნქციის 
// გაშვებას და ახალი მონაცემის ქეშირებას. თუ დამოკიდებულების მასივს დავტოვებთ ცარიელს, callback ფუნქცია გაეშვება 
// მხოლოდ კომპონენტის პირველი რენდერისას, შესაბამისად ქეშირებაც მხოლოდ ერთხელ მოხდება.
// useMemo გვაძლევს ძვირიანი ფუნქციების ქეშირების საშუალებას. ეს კარგია იმისთვის, 
// რომ ფუნქციის გაშვება არ მოხდეს კომპონენტის ყოველი დარენდერებისას და ამან არ დააზიანოს ჩვენი პერფორმანსი

// ქეშირება არის რაღაც მონაცემის დროებით დამახსოვრება. კომპონენტის ხელახლა დარენდერებამ რომ არ გამოიწვიოს მათი წაშლა

export default App;