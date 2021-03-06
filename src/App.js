import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import uniqid from "uniqid";
import "./styles/app.css";

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

function App() {
  const [cardList, setCardList] = useState([
    { name: "Kaladin", id: uniqid() },
    { name: "Shallan", id: uniqid() },
    { name: "Adolin", id: uniqid() },
    { name: "Vin", id: uniqid() },
    { name: "Hoid", id: uniqid() },
    { name: "Elend", id: uniqid() },
    { name: "Wax", id: uniqid() },
    { name: "Wayne", id: uniqid() },
    { name: "Steris", id: uniqid() },
    { name: "Vasher", id: uniqid() },
    { name: "Szeth", id: uniqid() },
    { name: "Dalinar", id: uniqid() },
  ]);

  const shuffleCardList = () => {
    setCardList([...shuffle(cardList)]);
  };

  // Shuffle array when component mounts
  useEffect(() => {
    shuffleCardList();
  }, []);

  const [cardsTaken, setCardsTaken] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const takeCard = (data) => {
    if (cardsTaken.includes(data)) {
      setCardsTaken([]);
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    } else {
      setCardsTaken(cardsTaken.concat(data));
      setScore(score + 1);
    }
    shuffleCardList();
  };

  useEffect(() => {
    console.table(cardsTaken);
  }, [cardsTaken]);

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <div className="card-list">
        {cardList.map((cardElement) => {
          return (
            <Card data={cardElement} takeCard={takeCard} key={cardElement.id} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
