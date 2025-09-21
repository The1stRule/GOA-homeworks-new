// 4) process.stdin - ის დახმარებით, შეამოწმეთ თუ მომხმარებელმა შემოიტანა 'bye' მაშინ გამოუტანეთ 'Goodbye' 
// და გათიშეთ პროგრამა process.exit() - ის დახმარებით, სხვა შემთხვევაში კი ჩვეულებრივ გამოუტენთ მის მიერ შემოტანილი მნიშვნელობა

process.stdin.on("data", (userInput) => {
    if(userInput.toString().trim() === "bye") {
        process.stdout.write("Goodbye\n")
        process.exit();
    }

    process.stdout.write(userInput.toString());
})