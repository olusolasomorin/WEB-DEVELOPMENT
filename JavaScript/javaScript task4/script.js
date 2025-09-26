// ## 🎯 Practice Exercise 1

// **Task:** Array Basics - Shopping List  

// **Requirements:**  
// 1. Create an array `shoppingList` with at least 5 items  
// 2. Add a new item to the end of the list  
// 3. Remove the first item from the list  
// 4. Display the total number of items  
// 5. Loop through the list and print each item with its position  

// **Challenge:**  
// Create a function `formatList(list)` that returns the shopping list in a numbered format (1. Item, 2. Item, ...).

let shoppingList = ['Bag', 'Launch Box', 'Rice', 'Beans', 'Food flask']
console.log(shoppingList)
shoppingList.push("egg")
shoppingList.shift()
console.log(shoppingList)
console.log('Total items:', shoppingList.length)

function formatList(shoppingList) {
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`Item${i + 1}: ${shoppingList[i]}`)
    }
    
}
formatList(shoppingList)


// ## 🎯 Practice Exercise 2

// **Task:** Student Grades Analyzer  

// **Requirements:**  
// 1. Store grades in an array  
// 2. Write a function `getAverage(grades)` to calculate average grade  
// 3. Write a function `getHighest(grades)` to find the highest grade  
// 4. Write a function `getLowest(grades)` to find the lowest grade  
// 5. Use loops where necessary to process the array  

// **Challenge:**  
// Create a function `getPassRate(grades)` that:  
// - Counts how many students scored **50 or above** (passing)  
// - Divides that number by the total number of students  
// - Returns the **percentage of students who passed** 

let grades = [20, 60, 76, 97, 50, 86, 10];
function getAverage(grades) {
    let total = 0;
    for (let grade of grades) {
        total += grade;
    }
    let average = total / grades.length;
        return `Average: ${average.toFixed(1)}`
}
console.log(getAverage(grades))

function getHighest(grades) {
    let heighest = grades[0];
    for (let grade of grades) {
        if (grade > heighest) {
            heighest = grade;
        }
    }
    return `The highest grade is: ${heighest}`
    // let heighest = []
    // for (let i = 0; i < grades.length; i++) {
    //     if (grades[i] > heighest) {
    //         heighest = grades[i];
    //     }
    // }
    // return heighest
}
console.log(getHighest(grades))

function getLowest(grades) {
    let lowest = grades[0];
    for (let grade of grades) {
        if (grade < lowest) {
            lowest = grade;
        }
    }  
    return `The lowest grade is: ${lowest}` 
}
console.log(getLowest(grades))


function getPassRate(grades) {
    let pass = []
    for (let grade of grades) {
        if (grade >= 50) {
            pass.push(grade)
            passLength = pass.length
        }
        
    }
    console.log(`Total number of students that scored 50 or above is: ${passLength} out of ${grades.length}`)

    let averagePassed = (passLength / grades.length) * 100
    return `${averagePassed.toFixed(1)}% of students passed the exam`

}
console.log(getPassRate(grades))


// ## 🎯 Practice Exercise 3

// **Task:** Movie Ratings System  

// **Requirements:**  
// 1. Create two arrays: `movies` (names) and `ratings` (numbers)  
// 2. Write a function `addMovie(movie, rating)` that adds a new entry  
// 3. Write a function `getAverageRating()` to calculate the average rating  
// 4. Write a function `getTopMovie()` to find the highest-rated movie  
// 5. Print a summary of all movies with their ratings  

// **Challenge:**  
// Sort the movies by rating (highest → lowest) and display the sorted list.

let movies = ['Fast X', 'The gods must be crazy', 'Mr Bones', 'Beauty in Black']
let ratings = [16, 13, 18]

function addMovie(movie, rating) {
    let mov = []
    let rated = []
    for (let m of movies) {
        mov.push(m)
    }
    for (let r of ratings) {
        rated.push(r)
    }
    console.log(`Movies: ${movies}<br>Ratings: ${rating}`)
    
}
console.log(addMovie('To kill a monkey', 16))