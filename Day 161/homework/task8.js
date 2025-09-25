// 8) process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ ასო, 
// შეამოწმეთ თუ მომხმარებლის მიერ შემოტანილი ასო არის ხმოვანი მაშინ გამოუტენეთ 
// რომ ${userInput} is vowel სხვა შემთხვევაში კი ${userInput} is consonant

process.stdin.on("data", (input) => {
    const char = input.toString().trim();
    if("aeiou".includes(char)) {
        console.log(`${char} is vowel`);
    } else {
        console.log(`${char} is consonant`);
    }

    process.exit();
})