var randomnumber1 = Math.floor( Math.random() * 6) + 1;
var randomimage1 = "dice" + randomnumber1 + ".png";
var randomimagesource1= "images/" + randomimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomimagesource1);

var randomnumber2 = Math.floor( Math.random() * 6) + 1;
var randomimage2 = "dice" + randomnumber2 + ".png";
var randomimagesource2 = "images/" + randomimage2
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);
if (randomnumber1 > randomnumber2){
document.querySelector("h1").innerHTML = "Player 1 Winsss !!!";
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 Winsss !!!";
}
else{
    document.querySelector("h1").innerHTML = "Draw !!!";


}

