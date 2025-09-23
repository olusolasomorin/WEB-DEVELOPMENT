function runCalculator() {
    let num1 = parseFloat(prompt('Enter first number:'))
    let num2 = parseFloat(prompt('Enter second number:'))
    
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let remainder = num1 % num2;
    let exponentiation = num1 ** num2;


    let output = `
        <strong>Answer</strong><br><br>
        Num1 = ${num1}, Num2 = ${num2}<br><br>
        Addition (num1 + num2): ${addition}<br>
        Subtraction (num1 - num2): ${subtraction}<br>
        Multiplication (num1 * num2): ${multiplication}<br>
        Division (num1 / num2): ${division.toFixed(3)}<br>
        Remainder/Modulo (num1 % num2): ${remainder}<br>
        Exponentiation (num1 ** num2): ${exponentiation}<br><br>
        <em>% gives remainder, ** is exponentiation (ES2016)</em>
    `;

    document.getElementById('operation-output').innerHTML = output;
}

function greetPerson(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript!`);
}

