let text = document.getElementById("textarea1");
text.onkeyup = () => {
    getCount();
}
// text.addEventListener("input", getCount);
function getCount(){
    let textValue = text.value.trim();
    let cnt = document.getElementById("counted");
    let textCount = textValue.length;
    cnt.textContent = textCount;

    if (textCount === 0){
        cnt.style.color = "black";
    }
    else if (textCount> 200){
        cnt.style.color = "red";
    } else {
        cnt.style.color ="green";
    }
    
}