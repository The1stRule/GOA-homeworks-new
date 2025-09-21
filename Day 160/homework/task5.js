// 5) process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ რაიმე string - ი, 
// რომელსაც შემდეგ გადააქცევთ upperCase - ში მაგალითად - User types 'hello' output 'HELLO'

process.stdin.on("data", (userInput) => {
    process.stdout.write(userInput.toString().toUpperCase());
    process.exit();
})