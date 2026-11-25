// 1. 

// let num1 = 20;
// let num2 = 30;
// let result = "%";

// switch (result) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
//     case "%":
//         console.log(num1 % num2);
//         break;
//     default :
//         console.log("Invalid Operatot");
//         break;
// }    
            
// 2.            
            
// const numbers = [2, 10, 14, 5, 16, 7];
// for(let num of numbers) {
//     console.log("Current Number is ", num);
//     if(num === 10) {
//         continue;
//     }
//     console.log("Print Pannuran :", num);
    
// }


// 3.

// const numbers = [2, 5, 8, 10];
// const doubleAll = (arr) => {
//     let result = [];
//     for(let num of arr) {
//         result.push(num * 2);
//     }
//     return result;
// }
//     console.log(doubleAll(numbers));
    

// 4.

// let name = "Bala";
// let city = "Kandamangalam";

// function sayHi() {
//     console.log("Hi," + name);
//     console.log("Naan," + city + "la irukkan");
// }
// function sayBye() {
//     console.log("Bye," + name);
// }

// sayHi();
// sayBye();

// 5.

// let bikes = ["Ktm", "Duke", "Splendor", "Mt 50"];
// console.log(bikes.length);
// console.log(bikes[2]);
// bikes.push("R15");
// console.log("Full list :" + bikes);
// bikes.pop();
// console.log("Final list: " + bikes);

// 6.

// let studentDetails = [

//     {name: "Bala", age: 21, mobileNo: "9876543210"},
//     {name: "Sundar", age: 20, mobileNo: "9876543210"},
//     {name: "Suriya", age: 22, mobileNo: "987654320"},
//     {name: "Sudhakar", age: 22, mobileNo: "8901234567"}
    
// ];       
//     for(let result of studentDetails) {
//         console.log("Name: " + result.name);
//         console.log("Age: " + result.age);
//         console.log("MobileNo: " + result.mobileNo);
//         console.log("All Details Submitted");
    
//     }


// 7.


// let months = [
//     {name: "January", days: 31},
//     {name: "February", days: 28},
//     {name: "March", days: 31},
//     {name: "April", days: 30},
//     {name: "May", days: 31},
//     {name: "June", days:30},
//     {name: "July", days: 31},
//     {name: "Augest", days: 31},
//     {name: "September", days: 30},
//     {name: "Octobor", days: 31},
//     {name: "November", days: 30},
//     {name: "December", days: 31}
// ];

// let totalDays = 0;

// months.forEach((month) => {
//         console.log(month.name + "-" + month.days + "days");
//         totalDays = totalDays + month.days;
// });
// console.log("Total Days in a Year: " + totalDays);


// 8.

// let students = [

//     {name: "Bala",age: 21, mark: 85},
//     {name: "Sundar", age: 20, mark: 35},
//     {name: "Suriya", age: 22, mark: 92},
//     {name: "Sudhakar", age: 22, mark: 95}
// ];
// let toppers = students.filter((student) => {
//     return student.mark >= 40 && student.age >= 21;
// });

// toppers.forEach((student) => {
//     console.log(student.name + "-" + student.mark + "- Topper!");
    
// });

// 9.

// let teaShop = [
//     {item: "Tea", price: 10},
//     {item: "Coffee", price: 20},
//     {item: "Bun", price:25}
// ];
// let newRateCard = teaShop.map((food) => {
//     return {
//         item: food.item,
//         oldprice: food.price,
//         newPrice: food.price + food.price * 18 / 100
//     };
// });

// console.log(newRateCard);


// 10.


// let orders = [
//     {food: "Biriyani", price: 220, qty: 2},
//     {food: "Chicken 65", price: 180, qty: 1},
//     {food: "Parotta", price: 20, qty: 5}
// ];
// let totalBill = orders.reduce((total, order) => {
//     return total + (order.price * order.qty);
// }, 0);

// console.log("Total Bill: " + totalBill);
