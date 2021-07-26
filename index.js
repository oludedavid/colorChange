var buttElement = document.getElementById("clickButton");

buttElement.addEventListener("click", changeBackground);

function changeBackground () {  
var colorType = ["red", "white", "pink", "yellow", "purple", "orange", "green", "blue", "black", "#FF0099"];
var randNum = Math.floor(Math.random()*colorType.length);
var randColor = colorType[randNum]; 
document.body.style.backgroundColor = randColor;    
}

