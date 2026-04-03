// 1-masala
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `My name is ${this.name} and I am ${this.age} years old`;
//   }
// }
// const newPerson = new Person("Firdavs", "20")
// console.log(newPerson.greet());
// 2-masala
// class BankAccount {
//   constructor(balance = 0) {
//     this.balance = balance;
//   }
//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       return `Muvaffaqiyatli: ${amount} qo'shildi. Joriy balans: ${this.balance}`;
//     }
//   }
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "Xatolik: Balansda mablag' yetarli emas!";
//     } else {
//       this.balance -= amount;
//       return `Muvaffaqiyatli: ${amount} yechildi. Qolgan balans: ${this.balance}`;
//     }
//   }
// }
// const myAcc = new BankAccount(100);
// console.log(myAcc.withdraw(150));
// console.log(myAcc.deposit(100));
// console.log(myAcc.withdraw(50));
// 3-masala
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
//   perimeter() {
//     return 2 * (this.width + this.height);
//   }
// }
// const myRect = new Rectangle(10, 5);
// console.log(myRect.area());
// console.log(myRect.perimeter());
// 4-masala
// class Student {
//   constructor(name, id, grades = []) {
//     this.name = name;
//     this.id = id;
//     this.grades = grades;
//   }
//   calculateAverage() {
//     if (this.grades.length === 0) {
//       return 0;
//     }
//     const sum = this.grades.reduce((total, grade) => total + grade, 0);
//     return sum / this.grades.length;
//   }
// }
// const student1 = new Student("Ali", "ST123", [85, 90, 70, 95]);
// console.log(student1.calculateAverage());
// 5-masala
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   area() {
//     const result = Math.PI * Math.pow(this.radius, 2);
//     return Number(result.toFixed(2));
//   }

//   circumference() {
//     const result = 2 * Math.PI * this.radius;
//     return Number(result.toFixed(2))
//   }
// }
// const myCircle = new Circle(5);
// console.log(myCircle.area());
// console.log(myCircle.circumference());
// 6-masala
// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }

//   fahrenheit() {
//     return this.celsius * 9 / 5 + 32;
//   }

//   kelvin() {
//     return this.celsius + 273.15;
//   }
// }
// const morningTemp = new Temperature(25);
// console.log(morningTemp.fahrenheit());
// console.log(morningTemp.kelvin());
// 7-masala
// class Order {
//   constructor() {
//     this.items = {};
//   }
//   addItem(item, quantity) {

//     if (quantity === undefined) {
//       const parts = item.split(' ');
//       const itemName = parts[0];
//       const itemQty = parseInt(parts[1]);

//       this.items[itemName] = (this.items[itemName] || 0) + itemQty;
//     } else {
//       this.items[item] = (this.items[item] || 0) + quantity;
//     }
//   }

//   removeItem(item) {
//     delete this.items[item];
//   }

//   calculateTotal() {
//     let total = 0;
//     for (let key in this.items) {
//       total += this.items[key];
//     }
//     return total;
//   }
// }
// const myOrder = new Order();

// myOrder.addItem("apple 2");
// console.log("Apple qo'shilgach:", myOrder.items);

// myOrder.addItem("banana 3");
// console.log("Banana qo'shilgach:", myOrder.items);

// console.log("Jami miqdor:", myOrder.calculateTotal());
// 8-masala
// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     if (b === 0) {
//       return "Nolga bo'lish mumkin emas!";
//     }
//     return a / b;
//   }
// }
// const calc = new Calculator();

// console.log("Qo'shish (10 + 5):", calc.add(10, 5));
// console.log("Ayirish (10 - 5):", calc.subtract(10, 5));
// console.log("Ko'paytirish (10 * 5):", calc.multiply(10, 5));
// console.log("Bo'lish (10 / 2):", calc.divide(10, 2));
// console.log("Xato bo'lish (10 / 0):", calc.divide(10, 0));
// 9-masala
// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return "Stack bo'sh";
//     }
//     return this.items.pop();
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   peek() {
//     return !this.isEmpty() ? this.items[this.items.length - 1] : null;
//   }
// }
// const myStack = new Stack();

// console.log("Bo'shmidi?", myStack.isEmpty());

// myStack.push("Kitob 1");
// myStack.push("Kitob 2");
// myStack.push("Kitob 3");

// console.log("Hozirgi holat:", myStack.items);
// console.log("Olingan element:", myStack.pop());
// console.log("Qolgan elementlar:", myStack.items);
// console.log("Bo'shmidi?", myStack.isEmpty());
// 10-masala
// class Vehicle {
//   constructor(speed) {
//     this.speed = speed;
//   }
// }

// class Car extends Vehicle {
//   constructor(speed, fuel) {
//     // Log yordamida kelayotgan ma'lumotni tekshiramiz
//     console.log("KIRAYOTGAN MA'LUMOT:", { speed, fuel });

//     
//     super(speed);

//     // 2. Agar fuel undefined bo'lsa, demak speed massiv bo'lib kelyapti
//     if (fuel === undefined && Array.isArray(speed)) {
//       this.speed = speed[0];
//       this.fuel = speed[1];
//     } else {
//       this.speed = speed;
//       this.fuel = fuel;
//     }

//     // Yakuniy natijani tekshiramiz
//     console.log("YAKUNIY OBYEKT:", this);
//   }
// }



