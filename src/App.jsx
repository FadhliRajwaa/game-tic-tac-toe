import { useState } from "react";
import "./App.css";
import KalkulasiMenang from "./components/KalkulasiMenang";
import Kotak from "./components/Kotak";


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = KalkulasiMenang(squares);
  const status = winner ? `Pemenang: ${winner}` : `Giliran: ${xIsNext ? "X" : "O"}`;

  function handleClick(i) {
    if (winner || squares[i]) return;

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true); // Reset juga giliran ke X
  }

  function renderSquare(i) {
    return <Kotak nilai={squares[i]} onClick={() => handleClick(i)} />;
  }

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        Ulang
      </button>
    </div>
  );
}

export default App;