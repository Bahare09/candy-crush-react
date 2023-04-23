import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const width = 8;
  const candyColor = ["yellow", "red", "blue", "green", "purple", "orange"];
  const [currentBoard, setCurrentBoard] = useState([]);

  const createBoard = () => {
    const randomColorArray = [];
    for (let i = 0; i < width * width; i++) {
      const randomCandyColor =
        candyColor[Math.floor(Math.random() * candyColor.length)];
      randomColorArray.push(randomCandyColor);
    }
    setCurrentBoard(randomColorArray);
  };
  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className="container">
      <div className="game">
        {currentBoard.map((randomColor, index) => (
          <img key={index} style={{ backgroundColor: randomColor }} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;
