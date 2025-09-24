function runFirstProgram() {
    //This is a comment - JavaScript ignores this line
    // Let's display a message in our output area
    document.getElementById('first-output').innerHTML = 'Hello World! This message was created by JavaScript!';

    // Also show it in the browser console (open Developer tools to see)
    console.log('Hello from JavaScript console!');
}

function showAlert() {
    //Show a popup alert
    alert('This is a JavaScript alert!');
}


            //variables intorduction
function showBasicVariables() {
    // Creating variables with different declarations
    let studentName = 'Alice';
    const schoolName = 'Tech Academy';
    let age =25;

    // Display the variables
    let output = `
        <strong>Basic Variables:</strong><br>
        Student Name: ${studentName}<br>
        School Name: ${schoolName}<br>
        Age: ${age}<br><br>
        <em>studentName and age use 'let' (can be changed)<br>
        schoolName uses 'const' (cannot be changed)</em>
    `;

    document.getElementById('variables-output').innerHTML = output;
    console.log('Student:', studentName, 'Age:', age, 'School:', schoolName);
}

function showVariableTypes() {
    // Different data types
    let userName = "John Doe";      //String
    let userAge = 30;       //Number
    let isActive = true;    //Boolean
    let salary = 50000.50;  //Number (with decimals)
    let middleName = null;  // Null (intentionally empty)
    let nickname;           // Undefined (not assigned)

    let output = `
        <strong>Variable Types:</strong><br>
        username: "${userName}" (type: ${typeof userName})<br>
        userAge: ${userAge} (type: ${typeof userAge})<br>
        isActive: ${isActive} (type: ${typeof isActive})<br>
        salary: ${salary} (type: ${typeof salary})<br>
        middleName: ${middleName} (type: ${typeof middleName})<br>
        nickname: ${nickname} (type: ${typeof nickname})
    `;

    document.getElementById('variables-output').innerHTML = output;
}

function demonstrateConstVsLet() {
    let changeable = "I can be changed";
    const permanent = "I cannot be changed";
    
    // Change the let variable
    changeable = "I have been changed!";
    
    // Try to change const (this would cause an error)
    // permanent = "This would cause an error!"; // Don't uncomment this!
    
    let output = `
        <strong>const vs let:</strong><br>
        changeable (let): "${changeable}"<br>
        permanent (const): "${permanent}"<br><br>
        <em>The 'let' variable was successfully changed.<br>
        Trying to change a 'const' variable would cause an error!</em>
    `;
    
    document.getElementById('variables-output').innerHTML = output;
}

function variableNamingExamples() {
    // Good variable names (descriptive and follow conventions)
    let firstName = "Maria";
    let lastName = "Garcia";
    let phoneNumber = "555-0123";
    let isLoggedIn = true;
    let totalPrice = 99.99;

    // Examples of what NOT to do (but still valid)
    let a = "Bad name - not descriptive";
    let x123 = "Confusing name";

    let output = `
        <strong>Variable Naming Examples:</strong><br><br>
        <strong>Good Names (descriptive):</strong><br>
        firstName: ${firstName}<br>
        lastName: ${lastName}<br>
        phoneNumber: ${phoneNumber}<br>
        isLoggedIn: ${isLoggedIn}<br>
        totalPrice: $${totalPrice}<br><br>
        <strong>Poor Names (avoid these):</strong><br>
        a: "${a}"<br>
        x123: "${x123}"<br><br>
        <em>Use camelCase and descriptive names!</em>
    `;

    document.getElementById('variables-output').innerHTML = output;
}


//Data types in JavaScript
function exploreStrings() {
    // Different ways to create strings
    let singleQuotes = 'Hello World';
    let doubleQuotes = "JavaScript is fun";
    let templateLiteral = `Today is ${new Date().toDateString()}`;

    //String properties and methods
    let message = "Learning JavaScript";
    let length = message.length;
    let uppercase = message.toUpperCase();
    let lowercase = message.toLowerCase();

    let output = `
        
    `
}


// Arrays and Loops

// Creating arrays with square brackets []
let fruits = ["apple", "banana", "orange", "grape"];
let numbers = [10, 25, 30, 45, 50];
let booleans = [true, false, true, true];
let mixedArray = ["John", 25, true, "student"];

// Empty array
let emptyArray = [];

// Display the arrays
console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);

console.log(""); // Empty line

// Array length property
console.log("Number of fruits:", fruits.length);
console.log("Number of numbers:", numbers.length);
console.log("Empty array length:", emptyArray.length);

console.log(""); // Empty line

// Accessing individual elements with index [0, 1, 2, ...]
console.log("First fruit:", fruits[0]);     // apple
console.log("Second fruit:", fruits[1]);    // banana
console.log("Last fruit:", fruits[fruits.length - 1]); // grape

console.log("First number:", numbers[0]);   // 10
console.log("Third number:", numbers[2]);   // 30

// What happens with invalid indexes?
console.log("Index that doesn't exist:", fruits[10]); // undefined


// Modifying Arrays
let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);

// Changing existing elements
colors[0] = 'purple';
colors[2] = 'yelllow';
console.log("After changes:", colors);

console.log('');

// Adding elements to the end with push()
let shoppingList = ['milk', 'bread'];
console.log('Original List:', shoppingList);

shoppingList.push('eggs');
shoppingList.push('cheese', 'butter');  // Can add multiple items
console.log('After adding items:', shoppingList);

console.log('')

// Removing the last element with pop()
let removedItem = shoppingList.pop();  // Removing the last element with pop()
console.log('Removed item:', removedItem);
console.log('List after removing:', shoppingList);

console.log(""); // Empty line

// Adding elements to the beginning with unshift()
shoppingList.unshift('apples');
console.log("After adding to front:", shoppingList);

// Removing the first element with shift()
let firstItem = shoppingList.shift();
console.log("Removed first item:", firstItem);
console.log('Final list:', shoppingList)

console.log(""); // Empty line

// Finding elements
let students =['Alice', 'Bob', 'Charlie', 'Diana'];
console.log('Students:', students);
console.log('Is Bob in class?', students.includes('Bob'));
console.log('Where is Charlie?', students.indexOf('Charlie'));
console.log("Where is Frank?", students.indexOf('Frank')); // -1 means not found

console.log(""); // Empty line

// More Array Methods
let number = [1, 2, 3, 4, 5];
let names = ['John', 'Jane', 'Bob', 'Alice'];
console.log("Original number:", number);
console.log('Original names:', names);

console.log(""); // Empty line

// slice() - Get a portion of the array (doesn't change original)
let firstThree = number.slice(0, 3);  // Get items 0, 1, 2
let lastTwo = number.slice(-2);  // Get last 2 items
console.log("First three numbers:", firstThree);
console.log("Last two numbers:", lastTwo);
console.log("Original unchanged:", number);

console.log(""); // Empty line

// splice() - Remove/add items at specific position (changes original)
let fruit = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('Original fruits;', fruit);

// Remove 2 items starting at index 1
let removed = fruit.splice(1, 2);
console.log("Removed items:", removed);
console.log("After removal:", fruit);

// Add items at index 1
fruit.splice(1, 0, 'mango', 'pineapple'); // Remove 0, add 2 items
console.log("After adding:", fruit);

console.log(""); // Empty line

// join() - Convert array to string
let words = ['Hello', 'from', 'JavaScript'];
let sentence = words.join(' ')  // Join with spaces
let csv = words.join(',');  // Join with commas
console.log("Words array:", words);
console.log("As sentence:", sentence);
console.log("As CSV:", csv);

console.log(""); // Empty line

// split() - Convert string to array (string method, but creates arrays)
let message = 'apple,banana,orange';
let fruitArray = message.split(',');
console.log("String:", message);
console.log("Split into array:", fruitArray);

console.log(""); // Empty line

// reverse() - Reverse array order (changes original)
let countdown = [1, 2, 3, 4, 5];
console.log("Original countdown:", countdown);
countdown.reverse();
console.log("Reversed countdown:", countdown);


// Loops
// Basic for loop structure:
// for (initialization; condition; increment) {
//     code to repeat
// }

// Simple counting loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

console.log('');

// Counting backwards
console.log("Countdown from 5 to 1:");
for (let i = 5; i >= 1; i--) {
    console.log('Countdown:', i);
}
console.log('Blast off!');

console.log('');

// Using loops with calculations
console.log('Multiplication table for 3:');
for (let i = 1; i <= 10; i++) {
    let result = 3 * i;
    console.log(`3 x ${i} = ${result}`);
}