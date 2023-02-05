function diceroll(){

  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "images/dice" + dice1 + ".png";
  var randomDiceImage2 = "images/dice" + dice2 + ".png";
  var image1 = document.querySelectorAll('img')[0];
  var image2 = document.querySelectorAll('img')[1];


  if(dice1 > dice2){
   document.querySelector("h1").innerHTML = '🚩Player 1 wins';
  }
  else if (dice2 > dice1){
   document.querySelector("h1").innerHTML = "Player 2 wins🚩";
 }
  else{
   document.querySelector("h1").innerHTML = "Its a draw";
  }
  image1.setAttribute("src" ,randomDiceImage1);
  image2.setAttribute("src" ,randomDiceImage2);
}

diceroll();