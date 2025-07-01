import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: (prevMoves.blue += 1) };
    });
  };

  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: (prevMoves.yellow += 1) };
    });
  };

  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: (prevMoves.green += 1) };
    });
  };

  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: (prevMoves.red += 1) };
    });
  };

  return (
    <div>
      <h1>Game</h1>
      <div className="board">
        <p>Blue Moves = {moves.blue} </p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>

        <p>Yellow Moves = {moves.yellow} </p>
        <button
          onClick={updateYellow}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>

        <p>Green Moves = {moves.green} </p>
        <button onClick={updateGreen} style={{ backgroundColor: "green" }}>
          +1
        </button>

        <p>Red Moves = {moves.red} </p>
        <button onClick={updateRed} style={{ backgroundColor: "red" }}>
          +1
        </button>
      </div>
    </div>
  );
}
