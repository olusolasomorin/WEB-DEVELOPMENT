let clearBtn = document.getElementById("clear");
let counter = document.getElementById("counter");
let firstVisit= document.getElementById("firstVisit");



let visitCount = localStorage.getItem("visitCount");
let firstVisitDate = localStorage.getItem("firstVisitDate");

if (visitCount) {
  
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("visitCount", visitCount);
} else {
  
  visitCount = 1;
  localStorage.setItem("visitCount", visitCount);

 
  firstVisitDate = new Date().toLocaleString();
  localStorage.setItem("firstVisitDate", firstVisitDate);
}


counter.textContent = `You have visited this page ${visitCount} time(s).`;
if (firstVisitDate) {
  firstVisit.textContent = `First visit: ${firstVisitDate}`;
}


clearBtn.addEventListener("click", function(){
  localStorage.removeItem("visitCount");
  localStorage.removeItem("firstVisitDate");
  location.reload(); 
});