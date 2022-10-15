const checkWinner = (setGameover, setWinner, setbyplayer1, winner) => {
  if (document.getElementById("1").classList.contains("red") && document.getElementById("2").classList.contains("red") && document.getElementById("3").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-red");
    document.getElementById("2").classList.add("win-red");
    document.getElementById("3").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("4").classList.contains("red") && document.getElementById("5").classList.contains("red") && document.getElementById("6").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("4").classList.add("win-red");
    document.getElementById("5").classList.add("win-red");
    document.getElementById("6").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("7").classList.contains("red") && document.getElementById("8").classList.contains("red") && document.getElementById("9").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("7").classList.add("win-red");
    document.getElementById("8").classList.add("win-red");
    document.getElementById("9").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("1").classList.contains("red") && document.getElementById("4").classList.contains("red") && document.getElementById("7").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-red");
    document.getElementById("4").classList.add("win-red");
    document.getElementById("7").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("2").classList.contains("red") && document.getElementById("5").classList.contains("red") && document.getElementById("8").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("2").classList.add("win-red");
    document.getElementById("5").classList.add("win-red");
    document.getElementById("8").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("3").classList.contains("red") && document.getElementById("6").classList.contains("red") && document.getElementById("9").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-red");
    document.getElementById("4").classList.add("win-red");
    document.getElementById("7").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("1").classList.contains("red") && document.getElementById("5").classList.contains("red") && document.getElementById("9").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-red");
    document.getElementById("5").classList.add("win-red");
    document.getElementById("9").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("3").classList.contains("red") && document.getElementById("5").classList.contains("red") && document.getElementById("7").classList.contains("red")) {
    setGameover(true);
    setWinner("one");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("3").classList.add("win-red");
    document.getElementById("5").classList.add("win-red");
    document.getElementById("7").classList.add("win-red");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("1").classList.contains("blue") && document.getElementById("2").classList.contains("blue") && document.getElementById("3").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-blue");
    document.getElementById("2").classList.add("win-blue");
    document.getElementById("3").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("4").classList.contains("blue") && document.getElementById("5").classList.contains("blue") && document.getElementById("6").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("4").classList.add("win-blue");
    document.getElementById("5").classList.add("win-blue");
    document.getElementById("6").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("7").classList.contains("blue") && document.getElementById("8").classList.contains("blue") && document.getElementById("9").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("7").classList.add("win-blue");
    document.getElementById("8").classList.add("win-blue");
    document.getElementById("9").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("1").classList.contains("blue") && document.getElementById("4").classList.contains("blue") && document.getElementById("7").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-blue");
    document.getElementById("4").classList.add("win-blue");
    document.getElementById("7").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("2").classList.contains("blue") && document.getElementById("5").classList.contains("blue") && document.getElementById("8").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("2").classList.add("win-blue");
    document.getElementById("5").classList.add("win-blue");
    document.getElementById("8").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("3").classList.contains("blue") && document.getElementById("6").classList.contains("blue") && document.getElementById("9").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-blue");
    document.getElementById("4").classList.add("win-blue");
    document.getElementById("7").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("1").classList.contains("blue") && document.getElementById("5").classList.contains("blue") && document.getElementById("9").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("1").classList.add("win-blue");
    document.getElementById("5").classList.add("win-blue");
    document.getElementById("9").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (document.getElementById("3").classList.contains("blue") && document.getElementById("5").classList.contains("blue") && document.getElementById("7").classList.contains("blue")) {
    setGameover(true);
    setWinner("two");
    if (winner === "one") {
      setbyplayer1(false);
    } else if (winner === "true") {
      setbyplayer1(true);
    }
    document.getElementById("3").classList.add("win-blue");
    document.getElementById("5").classList.add("win-blue");
    document.getElementById("7").classList.add("win-blue");

    document.getElementById("1").classList.add("no-touch");
    document.getElementById("2").classList.add("no-touch");
    document.getElementById("3").classList.add("no-touch");
    document.getElementById("4").classList.add("no-touch");
    document.getElementById("5").classList.add("no-touch");
    document.getElementById("6").classList.add("no-touch");
    document.getElementById("7").classList.add("no-touch");
    document.getElementById("8").classList.add("no-touch");
    document.getElementById("9").classList.add("no-touch");
  } else if (
    document.getElementById("1").classList.length > 1 &&
    document.getElementById("2").classList.length > 1 &&
    document.getElementById("3").classList.length > 1 &&
    document.getElementById("4").classList.length > 1 &&
    document.getElementById("5").classList.length > 1 &&
    document.getElementById("6").classList.length > 1 &&
    document.getElementById("7").classList.length > 1 &&
    document.getElementById("8").classList.length > 1 &&
    document.getElementById("9").classList.length > 1
  ) {
    setGameover(true);
    // setWinner("tie");
  }
};

export default checkWinner;
