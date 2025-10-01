
let username = "admin";
let password = "1234"
let loginBtn = document.getElementById("btn");


loginBtn.addEventListener("click", function validLogin(e){
    e.preventDefault();
    let user = document.getElementById("name");
    let username = user.value.trim();

    let pass = document.getElementById("password");
    let password = pass.value.trim();
    let alert1 = document.getElementById("notification");

    if (username === "" || password === ""){
        alert1.textContent = "These fields cannot be left empty!";
        alert1.style.color ="red";
    } else if(username === "admin" && password === "1234"){
        
        alert1.textContent = "Admin login successful";
        alert1.style.color ="green";
    }
    else {
        alert1.textContent = `Welcome, ${username}!`;
        alert1.style.color = "green";
    }
        
        
    
});