// // alert("works");
// document.querySelector("#button").addEventListener("click",function(){
//   // document.querySelector("h1").style.color="red";
//   alert("clicked");
// });
var computerGuess = Math.floor(Math.random()*11);
var chances = 3;
var gameOver = false;
// alert(computerGuess);
$("#button").on("click",function(){
  $("h1").css("color","red");


});

$("#input").on("change",function(){
  var x =Number( $('input').val());
  // alert(x);
  // $("p").html("<h1>" +x+ "</h1>");
  if(!gameOver){
    if(x===computerGuess){
      $("p").html("Your guess was right 🎉"+"<br>"+"Refresh to play again!");
      gameOver=true;
    }
    else{
      if(chances!==0){
        $("p").html("Wrong 🥱"+"<br>"+"Give it a go, your are left with "+chances+" chances");
      }
      else{
        $("p").html("Game over!"+"<br>"+"Computer Guess was "+computerGuess+ "<br>"+ "Refresh to start the Game");
        gameOver=true;
      }

    chances--;


  }
}
});
