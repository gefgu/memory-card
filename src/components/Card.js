import "../styles/card.css";

function Card(props) {
  return (
    <div className="card">
      <div>{props.data.name}</div>
    </div>
  );
}

export default Card;
