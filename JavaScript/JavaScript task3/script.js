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

// function weatherAdvice(temperature, isRaining) {
//     if (temperature < 32 && isRaining) {
//         return "Freezing rain! Stay inside!"
//     } else if (temperature < 32) {
//         return "Very cold, wear a heavy coat."
//     } else if (temperature > 32 && temperature <60) {
//         return "Chilly, bring a jacket."
//     } else if (temperature > 80 && isRaining) {
//         return "It's hot, stay hydrated!"
//     }
    
//     // isRaining = true
//     advice = isRaining ? 'Bring umbrella': 'Umbrella not needed'
//     console.log(advice)
// }
// // console.log(weatherAdvice(30, false))
// weatherAdvice(37, true)


function weatherAdvice(temperature, isRaining){
    if (temperature< 32 && isRaining){
        console.log("Freezing rain! Stay inside!")
    }
    else if(temperature < 32){
        console.log("Very cold, wear a heavy coat.")
    } else if(temperature >= 32 && temperature <= 60){
        console.log("Chilly, bring a jacket.")
    } else if(temperature >= 60 && temperature <= 80){
        console.log("Nice weather!")
    } else{
        console.log("It's hot, stay hydrated!")
    }
    advice = isRaining ? "Bring an Umbrella" : "No umbrella needed"
    console.log(advice);
}
weatherAdvice(30, true)
console.log("")