const playagain = (setWinner, setGameover, setplayerOnePoints, setplayerTwoPoints, winner, playerOnePoints, playerTwoPoints) => {
  if (winner === "one") {
    setplayerOnePoints(playerOnePoints + 1);
  } else if (winner === "two") {
    setplayerTwoPoints(playerTwoPoints + 1);
  }
  setWinner("");
  setGameover(false);
  document.getElementById("1").className = "box-container";
  document.getElementById("2").className = "box-container";
  document.getElementById("3").className = "box-container";
  document.getElementById("4").className = "box-container";
  document.getElementById("5").className = "box-container";
  document.getElementById("6").className = "box-container";
  document.getElementById("7").className = "box-container";
  document.getElementById("8").className = "box-container";
  document.getElementById("9").className = "box-container";
};

export default playagain;
