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