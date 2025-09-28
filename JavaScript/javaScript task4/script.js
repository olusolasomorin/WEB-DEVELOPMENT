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
let ratings = [9, 9.5, 9, 10]

function addMovie(movie, rating) {
    movies.push(movie)
    ratings.push(rating)
    // console.log('Updated movie list:', movies)
    // console.log('Updated movie ratings:', ratings)
}
console.log(addMovie('To kill a monkey', 10))
console.log(movies, ratings)

function getAverageRating() {
    let total = 0;
    for (let r of ratings) {
        total += r;
    }
    let average = total / ratings.length;
    return average.toFixed(2)
}
console.log(`rating; ${getAverageRating(ratings)}`)

function getTopMovie() {
    if (movies.length === 0){
        return "No movies yet.";
    }
    let topMovie = movies[0];
    let heighest = ratings[0];

    let i = 0;
    for (let high of ratings) {
        if (high > heighest) {
            heighest =high;
            topMovie = movies[i];
        }
        i++
    }
    return `${topMovie} (rating: ${heighest})`
}
console.log(getTopMovie())

// Print summary
function printSummary(movies, ratings) {
  console.log("🎬 Movie Ratings Summary:");
  let mov = [];
  let rate = [];
  mov.push(movies)
  rate.push(ratings)
  for (let i = 0; i < [mov.length, rate.length]; i++) {
        console.log(`${mov[i]}: ${rate[i]}`)
    }
    console.log(`${mov[i]}: ${rate[i]}`)
//   for (let m of mov) {
//     console.log(`${m.movies} - Rating: ${m.ratings}`);
//   }
    console.log(`⭐ Average Rating: ${getAverageRating()}`);
    console.log(`🏆 Top Movie: ${getTopMovie()}`);
}
console.log(printSummary())



// ## 🎯 Practice Exercise 4

// ### Comprehensive Practice Exercise: Student Report System

// Build a program that manages student grades using arrays, loops, and functions.

// **Your Challenge:**  
// Create a system with multiple functions that can:

// 1. **Add Student** - Store student names and their grades in an array  
// 2. **Calculate Average** - Compute the average grade for the class  
// 3. **Find Top & Bottom Student** - Identify the student with the highest and lowest score  
// 4. **Grade Categorizer** - Assign letter grades (A, B, C, D, F) based on numeric scores  
// 5. **Report Generator** - Print a formatted class report showing:  
//    - Each student’s name, grade, and letter grade  
//    - Class average  
//    - Top student  
//    - Lowest student  

// **Requirements:**  
// - Use arrays to store multiple students  
// - Use `for` or `for...of` loops to process data  
// - Write at least 5 reusable functions  
// - Validate inputs (no negative grades, no grades above 100)  
// - Use `Math.max()` and `Math.min()` for comparisons  
// - Return results in a well-formatted way (like a table or list)  

// **Challenge:**  
// Sort the students by grade (highest → lowest) before printing the report. 

let students = [];

//Add student function
function addStudent(name, grade) {
    if (name === '') {
        console.log("Student name cannot be blank")
        return 'Student name cannot be empty'
    } else if (name === !isNaN()) {
        console.log("Student name cannot be a number")
        return "Student name cannot be a number"
    }

    if (grade < 0 || isNaN(grade) || grade > 100) {
        console.log("Grade must be a number between 0 and 100")
        return "Grade must be a number between 0 and 100"
    }

    students.push({
        name: name.trim(),
        grade: parseFloat(grade)
    });

    return `${name} added successfully with grade (${grade})`
}

// Calculate average function
function calculateAverage() {
    if (students.length === 0) {
        return "Student list is empty"
    }

    let total = 0;
    for (let student of students) {
        total += student.grade;
    }

    let average = total / students.length

    return `Average: ${average}`
}

// Find top student
function findTopStudent() {
    if (students.length === 0) {
        return null;
    }

    let highGrade = Math.max(...students.map(student => student.grade));
    return students.find(student => student.grade === highGrade);
}

// Find bottom student
function findBottomStudent() {
    if (students.length === 0) {
        return "Empty"
    }

    let lowGrade = Math.min(...students.map(student => student.grade));

    return students.find(student => student.grade === lowGrade)
}

// Grade catergorizer
function getLetterGrade(numGrade) {
    if (numGrade >= 75) {
        return 'A';
    } else if (numGrade >= 60) {
        return 'B';
    } else if (numGrade >= 50) {
        return 'C'
    } else if (numGrade >= 45) {
        return 'D'
    } else if (numGrade >= 40) {
        return 'E'
    } else {
        return 'F'
    }
}

// Sort student
function sortStudentByGrade() {
    return [...students].sort((a, b) => b.grade - a.grade);
}


// Formatted report
function reportGenerator() {
    console.log("==== Class Report ====")
    console.log("Name       Grade(score)        Grade")
    for (let student of students) {
        console.log(`${student.name}        ${student.grade}`)
    }
}