# JavaScript Core Concepts

## Introduction
This README covers the important JavaScript concepts that I have learned and practiced. These concepts help me understand JavaScript programming and improve my problem-solving skills.

## 1. Switch Statement
The `switch` statement is used to execute different blocks of code based on a given value.

**Syntax:**
```javascript
switch (expression) {
    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Default code
}
```

**Example:**
```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid Day");
}
```

## 2. Loops
Loops are used to execute a block of code repeatedly until a given condition is satisfied.

### Types of Loops

**For Loop**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**While Loop**
```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

**Do While Loop**
```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

## 3. Functions
Functions are reusable blocks of code that perform a specific task.

**Example:**
```javascript
function greet() {
    console.log("Hello JavaScript");
}

greet();
```

**Function with Parameters:**
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

**Arrow Function:**
```javascript
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));
```

## 4. Objects
Objects are used to store data in key-value pairs.

**Example:**
```javascript
let student = {
    name: "Arun",
    age: 22,
    course: "Computer Science"
};

console.log(student.name);
console.log(student.age);
```

**Adding a New Property:**
```javascript
student.city = "Chennai";

console.log(student);
```

## 5. Scope
Scope determines where variables can be accessed in JavaScript.

### Types of Scope

**Global Scope:** A variable declared outside a function or block can be accessed throughout its accessible scope.

```javascript
let name = "Arun";

function display() {
    console.log(name);
}

display();
```

**Function Scope:** Variables declared with `var`, `let`, or `const` inside a function are accessible within that function.

```javascript
function test() {
    let message = "Hello";
    console.log(message);
}

test();
```

**Block Scope:** Variables declared with `let` and `const` inside a block are accessible only within that block.

```javascript
if (true) {
    let age = 22;
    const city = "Chennai";

    console.log(age);
    console.log(city);
}
```

## 6. Arrays
Arrays are used to store multiple values in a single variable.

**Example:**
```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
```

**Common Array Operations:**

```javascript
let numbers = [10, 20, 30];

numbers.push(40);     // Add element at the end
numbers.pop();        // Remove last element
numbers.unshift(5);   // Add element at the beginning
numbers.shift();      // Remove first element

console.log(numbers);
```

## 7. For...of Loop
The `for...of` loop is used to iterate over iterable values such as arrays and strings.

**Example:**
```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

**Output:**
```text
Apple
Banana
Mango
```

## 8. For...in Loop
The `for...in` loop is used to iterate over the enumerable property keys of an object.

**Example:**
```javascript
let student = {
    name: "Arun",
    age: 22,
    city: "Chennai"
};

for (let key in student) {
    console.log(key, student[key]);
}
```

**Output:**
```text
name Arun
age 22
city Chennai
```

## 9. Array Methods

### 9.1 forEach()
The `forEach()` method executes a function for each element in an array. It does not return a new array.

**Example:**
```javascript
let numbers = [10, 20, 30, 40];

numbers.forEach((num) => {
    console.log(num);
});
```

### 9.2 filter()
The `filter()` method creates a new array containing elements that satisfy a given condition.

**Example:**
```javascript
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter((num) => {
    return num > 20;
});

console.log(result);
```

**Output:**
```text
[25, 30]
```

### 9.3 map()
The `map()` method creates a new array by transforming each element of the original array.

**Example:**
```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map((num) => {
    return num * 2;
});

console.log(result);
```

**Output:**
```text
[2, 4, 6, 8]
```

### 9.4 reduce()
The `reduce()` method reduces all array elements into a single value using an accumulator.

**Example:**
```javascript
let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);
```

**Output:**
```text
100
```

## 10. Difference Between Array Methods

| Method | Purpose | Return Value |
|---|---|---|
| forEach() | Executes a function for each element | undefined |
| filter() | Selects elements based on a condition | New Array |
| map() | Transforms each element | New Array |
| reduce() | Combines elements into one value | Single Value |

## Conclusion

Learning these JavaScript concepts helps me understand programming logic, work with data, use functions, handle arrays and objects, and solve coding problems.

I will continue practicing these concepts to improve my JavaScript skills and prepare for frontend development.
