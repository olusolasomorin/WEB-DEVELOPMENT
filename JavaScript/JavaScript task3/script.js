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
console.log(atm(100, 'deposit', 500));
let balance = 100;

let action = prompt("Welcome to SPIE Bank. Do you want to 'withdraw' or 'deposit'");
let amount = parseFloat(prompt("Enter amount:"));
let results = atm(balance, action.toLowerCase(), amount);
alert(results);


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
    } else if (time >= 12 && time <= 15) {
        if (dayType === "workday") {
            console.log("Good afternoon! Hope work is going well.");
        } else if (dayType === "weekend") {
            console.log("Good afternoon! Trust your weekend is going well.");
        } else if (dayType === "holiday") {
            console.log("Good afternoon! I hope you are make a good use of your holiday.");
        }
    } else if (time >= 16 && time <= 21) {
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