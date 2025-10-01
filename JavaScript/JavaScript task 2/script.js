// ## 🎯 Practice Exercise 1

// **Task:** Simple Grading System  

// **Requirements:**  
// 1. Create a function `getGrade(score)`  
// 2. Use if/else if statements to assign grades:  
//    - 90+ → "A"  
//    - 80–89 → "B"  
//    - 70–79 → "C"  
//    - 60–69 → "D"  
//    - Below 60 → "F"  
// 3. Return a message like: `"Score: 85 → Grade: B"`  

// **Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`.

function getGrade(score) {
    if (score == 100) {
        return `Score: ${score}; Grade: A+ Outstanding!`;
    } else if (score >= 90) {
        return `Score: ${score}; Grade: A`;
    } else if (score >= 80) {
        return `Score: ${score}; Grade: B`;
    } else if (score >= 70) {
        return `Score: ${score}; Grade: C`;
    } else if (score >= 60) {
        return `Score: ${score}; Grade: D`;
    } else if (score <= 59) {
        return `Score: ${score}; Grade: F`;
    }

    console.log(getGrade('85'))
}


// ## 🎯 Practice Exercise 2

// **Task:** Discount Calculator  

// **Requirements:**  
// 1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
// 2. Apply discounts:  
//    - Student → 10%  
//    - Senior → 15%  
//    - Employee → 20%  
// 3. If `isFirstPurchase` is true, add an extra 5% discount  
// 4. Return the final price (rounded to 2 decimals)  

// **Challenge:** Print a full receipt showing original price, discount percent, and final price.

function calculatePrice(price, customerType, isFirstPurchase) {
    let discounts = 0;

    if (customerType == 'student') {
        discounts = 10;
    } else if (customerType == 'senior') {
        discounts = 15;
    } else if (customerType == 'employee') {
        discounts = 20;
    }

    if (isFirstPurchase) {
        discounts += 5;
    }

    let finalPrice = price - (price * discounts) / 100;
    return {
        originalPrice: price,
        discountPercent: discounts,
        finalPrice: finalPrice.toFixed(2)
    };
}

let result = calculatePrice(100, 'student', true)
console.log("====Receipt====")
console.log(`Original: $${result.originalPrice}`)
console.log(`Discount: $${result.discountPercent}`)
console.log(`Final price: $${result.finalPrice}`)


// ## 🎯 Practice Exercise 3

// **Task:** Weather Advisor  

// **Requirements:**  
// 1. Write a function `weatherAdvice(temperature, isRaining)`  
// 2. Use if/else if to return advice:  
//    - < 32 and raining → "Freezing rain! Stay inside!"  
//    - < 32 → "Very cold, wear a heavy coat."  
//    - 32–60 → "Chilly, bring a jacket."  
//    - 60–80 → "Nice weather!"  
//    - `>` 80 → "It's hot, stay hydrated!"  
// 3. Return the advice as a string  

// **Challenge:** Add a ternary operator for quick advice like:  
//    `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.

function weatherAdvice(temperature, isRaining) {
    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!")
    } else if (temperature < 32) {
        console.log("Very cold, wear a heavy coat.")
    } else if (temperature > 32 && temperature <60) {
        console.log("Chilly, bring a jacket.")
    } else if (temperature > 60 && temperature < 80) {
        console.log("It's hot, stay hydrated!")
    }
    let advice = isRaining ? 'Bring umbrella': 'Umbrella not needed'
    console.log(advice);
}
weatherAdvice(70, true)
console.log('')


// ## 🎯 Practice Exercise 4

// **Task:** ATM Simulation  

// **Requirements:**  
// 1. Create a function `atm(balance, action, amount)`  
// 2. If action is `"withdraw"`, check if balance is enough:  
//    - If yes, subtract amount and return new balance  
//    - If no, return `"Insufficient funds"`  
// 3. If action is `"deposit"`, add amount to balance and return new balance  
// 4. Use clear messages in template literals  

// **Challenge:** Add a condition that blocks withdrawals over 500 at once.

function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > 500) {
            return "Limit exceeded!";
        } if (amount > balance) {
            return "insufficient funds!";
        } else 
            amount -= balance; {
            return "Transaction successful.";
        }

    } else if (action === "deposit") {
        balance += amount;
        return `Deposit successful. You deposited $${amount}. New balance is $${balance}.`;
    } else {
        return "Invalid action! Chose withdraw or deposit.";
    }

    
}
console.log(atm(1000, 'deposit', 500));
let balance = 100;

// let action = prompt("Welcome to SPIE Bank. Do you want to 'withdraw' or 'deposit'");
// let amount = parseFloat(prompt("Enter amount:"));
// let results = atm(balance, action.toLowerCase(), amount);
// alert(results);


// ## 🎯 Practice Exercise 5
// **Tast:** Personal Assistant Function

// Now let's combine everything you've learned to create a "personal assistant" function that makes smart decisions based on different inputs.

// **Your Mission:**
// Create a function called `personalAssistant` that:
// 1. Takes parameters for: time (hour), weather(sunny, rainy,cloudy), and day type(workday, weekend, holiday)
// 2. Uses conditional logic to give appropriate advice
// 3. Returns different messages based on the conditions
// 4. Handles various scenarios intelligently

// **Requirements:**
// - Use if/else statements for complex logic
// - Include at least one logical operator (&&, ||, !)
// - Use a ternary operator for simple decisions
// - Return helpful, personalized advice
// - Handle edge cases (invalid inputs)

function personalAssistant(time, weather, dayType) {
    if (time >= 5 && time <= 11) {
        if (dayType === "workday") {
            console.log("Good morning! It's new day to be at work");
        } else if (dayType === "weekend") {
            console.log("Good morning! Oh it's weekend already. Enjoy your weekend.");
        } else if (dayType === "holiday") {
            console.log("Good morning! Enjoy your holiday.");
        }
    } else if (time >= 12 && time <= 16) {
        if (dayType === "workday") {
            console.log("Good afternoon! Hope work is going well.");
        } else if (dayType === "weekend") {
            console.log("Good afternoon! Trust your weekend is going well.");
        } else if (dayType === "holiday") {
            console.log("Good afternoon! I hope you are make a good use of your holiday.");
        }
    } else if (time >= 17 && time <= 21) {
        if (dayType === "workday") {
            console.log("Wagwan! It's time to rest");
        } else if (dayType === "weekend") {
            console.log("Yoo! I think clubing will be nice.");
        } else if (dayType === "holiday") {
            console.log("You fit lodge one nice babe in a 5star hotel");
        }
    }

    let advice = weather === "sunny" ? "It's sunny, wear something light" : weather === "rainy" ? "It's rainy, take an umbrella" : "The weather is favourable today."
    console.log(advice)
}
personalAssistant(6, "rainy", "weekend")


// ## 🎯 Practice Exercise 6

// **Task:** Apply Common Function Patterns  

// **Requirements:**  
// 1. Create a **validation function** `isStrongPassword(password)` that checks:  
//    - At least 8 characters  
//    - Contains a number  
//    - Contains a special character  
// 2. Create a **formatter function** `formatPercentage(value)` that always shows one decimal place with `%`.  
// 3. Create a **calculator function** `calculateCompoundInterest(principal, rate, years)` using the formula:  
//    \[
//    A = P \times (1 + r)^t
//    \]  
// 4. Create a **decision maker function** `canGraduate(credits, gpa)` that:  
//    - Requires at least 120 credits  
//    - Requires GPA ≥ 2.0  
// 5. Create a **utility function** `reverseWords(sentence)` that takes a string and returns the sentence with the words reversed.  

// **Challenge:** Extend `reverseWords` to also capitalize the first letter of each word.  

// 1
function isStrongPassword(password) {
    const hasLength = password.length >= 8;
    const hasNumber = /[123456789]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLength === false) {
        return "Password must be at least 8 characters";
    } else if (hasNumber === false) {
        return "Password must have at least a number"
    } else if (hasSpecial === false) {
        return "Password should have at least a special character"
    } else {
        return "Password created successfully"
    }
}
console.log('');
console.log(isStrongPassword('somorin@1'))

// 2
function formatPercentage(value) {
    return `${value.toFixed(1)}%`
}
console.log(formatPercentage(75))

// 3
function calculateCompoundInterest(principal, rate, years) {
    let A = principal * (1 + rate)**years
    return `${A.toFixed(2)}`
}
console.log(calculateCompoundInterest(50000, 0.08, 3));

// 4
function canGraduate(credits, gpa) {
    if (credits >= 120 && gpa >= 2.0) {
        return "You can graduate"
    } else {
        return "You cannot graduate due to low Credits or GPA"
    }
}
console.log(canGraduate(150, 3.0))

// 5
function reverseWords(sentence) {
    let words = sentence.split(" ")
    let sentences = words.reverse()
    return sentences
}
console.log(reverseWords('I love python'))


// Practices Exercise 7

function taxCalculator(country, amount){
taxRate = 0;
if (country === "Argentina"){
    taxRate = 0.35;
} else if (country === "Australia"){
    taxRate = 0.30
} else if (country === "Brazil"){
    taxRate = 0.34;
} else if(country === "Canada"){
    taxRate = 0.262;
} else if(country === "China"){
    taxRate = 0.25;
} else if(country == "Nigeria"){
    taxRate = 0.24;
}
else {
    taxRate = 0.5;
}

return amount * taxRate;
}

console.log(taxCalculator("Uganda", 1000))


function shippingCalculator(weight, distance){
    let ratePerKg = 0.5;
    let ratePerKM = 0.1;

    let costByWeight = weight * ratePerKg;
    let costByDistance = distance * ratePerKM;

   let total = costByWeight + costByDistance;
    return total;
}

console.log(shippingCalculator(20, 100));



function memberDiscount(amount, membershipType){
    if (membershipType === "Platinum"){
        return `Platinum member discount: ${amount * 0.3}`;
    } else if (membershipType === "Gold"){
        return `Gold member discount: ${amount * 0.2}`;
    } else if (membershipType === "Silver"){
        return `Silver member discount: ${amount * 0.15}`;
    } else {
        return "No discount for regular members";
    }
}

console.log(memberDiscount(500, "Silver"));