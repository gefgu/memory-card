import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import uniqid from "uniqid";

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

  return (
    <div>
      <Header />
      <div className="card-list">
        {cardList.map((cardElement) => {
          return <Card data={cardElement} />;
        })}
      </div>
    </div>
  );
}

export default App;
