// 7) process.stdout - ის დახმარებით მომხმარებელს მოსთხოვეთ, რომ შემოიტანოს password - ი, 
// process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ პაროლი და გამოუტანეთ თავისი პაროლი 
// xxxx - ების სახით მაგალთად - შევიტანეთ პაროლი - securedPassword123, 
// უნდა გამოიტანოთ როგორც x * securedPassword123 - სიმბოლოების რაოდენობაზე

process.stdout.write("Please enter the password: ");

process.stdin.on("data", (input) => {
    process.stdout.write("*".repeat(input.toString().trim().length));
    process.exit();
})