function changeElements() {
    // Change text content
    document.getElementById('title').textContent = "JavaScript Changed This Title!";
    
    // Change HTML content (can include HTML tags)
    document.getElementById('description').innerHTML = "<strong>This text is now bold!</strong>";
    
    // Find element by class name
    let infoElement = document.querySelector('.info');
    infoElement.textContent = "Found by class name and changed!";
    
    // Change styles
    document.getElementById('title').style.color = "blue";
    document.getElementById('title').style.fontSize = "36px";
}

function greetUser() {
    // get the value from the input field
    let name = document.getElementById('nameInput').value;

    // check if user entered something
    if (name === "") {
        document.getElementById('greeting').textContent = "Please enter your name!";
        return;
    }

    let greeting = `Hello, ${name}! Welcome to our website.`;
    document.getElementById('greeting').textContent = greeting;
    document.getElementById('greeting').style.color = "green";
}