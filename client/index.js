var playerTurn = 0;
var winner = false;
var filled = false;
var grid = [
  ["", "",  ""],
  ["", "",  ""],
  ["", "",  ""]
];
$(".col").on("click", function(event){
  if(grid[$(this).data("y")][$(this).data("x")] == ""){
  grid[$(this).data("y")][$(this).data("x")] = getPlayerLetter();
  $(this).css("background-color", getBoxColor());
  winner = checkIfWinner();
  if(winner == false){
    filled = checkIfFilled();
    if(filled == false){
    playerTurn = switchPlayerTurn();
    showplayerSwitched();
    }else{
    showTie();
    }
  } else{
    showOverlay();
  }
  }

});

function getPlayerLetter(){
  if(playerTurn == 0){
    return "X";
  } else{
    return "Y";
  }
}
function switchPlayerTurn(){
  if(playerTurn == 0){
    return 1;
  } else{
    return 0;
  }
}
function getBoxColor(){
  if(playerTurn == 0){
    return "#4ABDAC";
  }else{
    return "#FC4A1A";
  }
}

function resetGrid(){
  grid = [
    ["", "",  ""],
    ["", "",  ""],
    ["", "",  ""]
  ];
  $(".col").css("background", "white");
  playerTurn = 0;
  winner = false;
  filled = false;
  $("#winner2").html("Player 1's");
  $("#winner2").css("background", "#4ABDAC");
  $("#msg").html("The winner is <span id='winner'>Player</span>!");
}
function checkIfWinner(){
  for (var i = 0; i < 3; i++) {
    if(grid[i][0] != "" && grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]){
      return true;
    }
    if(grid[0][i] != "" && grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]){
      return true;
    }
  }
  if(grid[0][0] != "" && grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]){
    return true;
  }
  if(grid[0][2] != "" && grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]){
    return true;
  }
  return false;
}
function showOverlay(){
  $("#overlay").css("display", "block");
  $("#winner").html("Player " + (playerTurn+1));
  if(playerTurn == 1){
    $("#winner").css("background", "#FC4A1A");
  } else {
    $("#winner").css("background", "#4ABDAC");
  }
}
function showTie(){
  $("#overlay").css("display", "block");
    $("#msg").html("The game is a draw!");

}
function checkIfFilled(){
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if(grid[i][j] == ""){
        return false;
      }
    }
  }
  return true;
}
function showplayerSwitched(){
  if(playerTurn == 0){
    $("#winner2").html("Player 1's");
    $("#winner2").css("background", "#4ABDAC");
  }else{
    $("#winner2").html("Player 2's");
    $("#winner2").css("background", "#FC4A1A");
  }
}
$("#againBtn").on("click", function(){
  resetGrid();
  $("#overlay").css("display", "none");

});
