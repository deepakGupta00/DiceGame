
var randomNumber1= Math.floor(Math.random()*6) +1 ;

var randomDiceimage= "dice"+randomNumber1+".png";

var randomimagesource= "images/"+randomDiceimage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomimagesource2= "images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);



if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win !";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 win !";

}
else{
document.querySelector("h1").innerHTML="Draw!!";
}