// 1) შექმენით ფუნქცია სახელად randomError , გამოიყენეთ math.random იმისათვის რომ დააგენერიროთ 1 ან 0, 
// თუ ერთი იქნება არ გამოიწვიოთ ერორ თუ ნული შექმენით ახალი ერორ ობიექტი რომელსაც ისვრით

const randomError = () => {
    try {
        if(!Math.round(Math.random())) {
            throw new Error("This is error");
        }
    } catch(error) {
        console.log(error);
    }
}

randomError();