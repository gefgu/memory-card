import "../styles/card.css";

function Card(props) {
  const name = props.data.name;

  return (
    <div className="card">
      <img
        alt={name}
        src={require(`../assets/${name.toLowerCase()}.jpg`)}
      ></img>
      <div>{name}</div>
    </div>
  );
}

export default Card;
