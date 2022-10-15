import { useState } from "react";
import "./App.css";
import checkWinner from "./utils/checkWinner";
import playagain from "./utils/playagain";

function App() {
  const [byplayer1, setbyplayer1] = useState(true);
  const [gameover, setGameover] = useState(false);
  const [winner, setWinner] = useState("None");

  return (
    <div className="App">
      <header className="App-header">
        <div className="side">
          {gameover ? (
            <div className="details">
              <div className="winner">{winner !== "" ? `Player ${winner} wins!` : "It's a tie!"}</div>
              <button
                className="play-again"
                onClick={() => {
                  playagain(setWinner, setGameover);
                }}
              >
                Play again
              </button>
            </div>
          ) : (
            <></>
          )}

          <div>
            <div className="player-title">Player {byplayer1 ? "one" : "two"}'s turn</div>
            <div className="board-container">
              <div className="row">
                <div
                  id="1"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("1").classList.add("red") : document.getElementById("1").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
                <div
                  id="2"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("2").classList.add("red") : document.getElementById("2").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
                <div
                  id="3"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("3").classList.add("red") : document.getElementById("3").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
              </div>
              <div className="row">
                <div
                  id="4"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("4").classList.add("red") : document.getElementById("4").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
                <div
                  id="5"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("5").classList.add("red") : document.getElementById("5").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
                <div
                  id="6"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("6").classList.add("red") : document.getElementById("6").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
              </div>

              <div className="row">
                <div
                  id="7"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("7").classList.add("red") : document.getElementById("7").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
                <div
                  id="8"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("8").classList.add("red") : document.getElementById("8").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
                <div
                  id="9"
                  className="box-container"
                  onClick={() => {
                    byplayer1 ? document.getElementById("9").classList.add("red") : document.getElementById("9").classList.add("blue");
                    setbyplayer1(!byplayer1);
                    checkWinner(setGameover, setWinner, setbyplayer1, winner);
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
