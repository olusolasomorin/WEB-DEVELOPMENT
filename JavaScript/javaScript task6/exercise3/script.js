
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");


function applyTheme(theme) {
  document.body.className = theme; 
  localStorage.setItem("theme", theme); 
}


window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light" || "blue"; 
  applyTheme(savedTheme);
};


lightBtn.addEventListener("click", () => applyTheme("light"));
darkBtn.addEventListener("click", () => applyTheme("dark"));
blueBtn.addEventListener("click", () => applyTheme("blue"));