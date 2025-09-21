// 3) process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ password - ი, 
// იმ შემთხვევაში თუ მომხმარებელმა შემოიტანა 'securedPassword123' მაგ შემთხვევაში 
// console - ში დაბეჭდეთ რომ Access granted, სხვა შემთხვევაში კი, გამოუტანეთ Wrong password, 
// process.stdout.write  - ის დახმარებით მომხმარებელს მოსთხოვეთ რომ გამოიცნოს (პაროლი) password

process.stdout.write("Enter your password\n");

process.stdin.on("data", (password) => {
    if(password.toString().trim() === "securedPassword123") {
        process.stdout.write("Access granted\n");
        process.exit();
    }

    process.stdout.write("Wrong password\n");
    process.stdout.write("Enter your password\n");
})