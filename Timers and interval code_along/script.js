// setTimeout - Run Code After a Delay
// setTimeout waits, then runs code ONCE
// Syntax: setTimeout(function, milliseconds)

console.log("Start");

// Wait 2 seconds, then run this code
setTimeout(function () {
    console.log("This appears after 2 seconds");
}, 2000);  // 2000 milliseconds = 2 seconds

console.log("End");

// Notice: "End" appears before "This appear after 2 seconds"


// Example 1: Simple delay
setTimeout(function () {
    console.log("Hello after 1 second")
}, 1000);

// Example 2: With arrow function (shorter way)
setTimeout (() => {
    console.log("Hello after 3 seconds")
}, 3000);

// Example 3: Using a named function
function showMessage() {
    console.log("This ia a delayed message");
}

setTimeout(showMessage, 2000);

// Example 4: Multiple timers
setTimeout(() => console.log("1 second"), 1000);
setTimeout(() => console.log("2 seconds"), 2000);
setTimeout(() => console.log("3 seconds"), 3000);

// You can cancel a timeout before it runs

// Save the timer ID
let timerId = setTimeout(() => {
    console.log("This will NOT run");
}, 5000);

// Cancel it
clearTimeout(timerId);
console.log("Timer was cancelled")

// Practical example: Auto-hide notification
let notificationTimer;

function showNotification(message) {
    console.log("Notification:", message);

    // Hide after 3 seconds
    notificationTimer = setTimeout(() => {
        console.log("Notification Hidden");
    }, 3000);

}

function hideNotificationNow() {
    clearTimeout(notificationTimer);
    console.log("Notification hidden immediately");
}

showNotification("Welcome");


// setInterval runs code REPEATEDLY
// Syntax: setInterval(function, milliseconds)
let counter = 0;

// This runs every 1 second
let intervalId = setInterval(function () {
    counter++;
    console.log("Counter:", counter);

    // Stop after 5 times
    if  (counter >= 5) {
        clearInterval(intervalId);
        console.log("Stopped!");
    }
}, 1000);


// Simple Countdown Timer
function startCountdown(seconds) {
    let timeLeft = seconds;

    console.log("Countdown started:", timeLeft);

    let CountdownId = setInterval(function () {
        timeLeft--;
        console.log("Time left:", timeLeft);

        if (timeLeft <= 0) {
            clearInterval(CountdownId);
            console.log("Time's up!");
        }
    }, 1000);
}

startCountdown(10);

let clockInterval = null;

function updateClock() {
    // Get current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display time
    let timeString = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById('clockDisplay').textContent = timeString;
}

function startClock() {
    updateClock(); // Show time immediately
    clockInterval = setInterval(updateClock, 1000); // update clock every second
}

function stopClock() {
    clearInterval(clockInterval);
}

// Start automatically 
startClock();


// Countdown Function
let timerInterval = null;
let totalSeconds = 0;

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Add leading zeros
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) minutes = "0" + seconds;

    document.getElementById('timerDisplay').textContent = minutes + ":" + seconds;

    // Alert when time is up
    if (totalSeconds <= 0) {
        document.getElementById('timerDisplay').textContent = "TIME'S UP!";
    }
}

function startTimer() {
    //Get user input
    let minutes = parseInt(document.getElementById('minutesInput').value) || 0;
    let seconds = parseInt(document.getElementById('secondsInput').value) || 0;

    totalSeconds = (minutes * 60) + seconds;

    if (totalSeconds <= 0) {
        alert("Please enter a time!");
        return;
    }

    updateDisplay();

    // Start countdown
    timerInterval = setInterval(function() {
        totalSeconds--;
        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 0;
    updateDisplay();
}

updateDisplay();