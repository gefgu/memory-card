import "../styles/card.css";

function Card(props) {
  const name = props.data.name;
  const { takeCard } = props;

  return (
    <div className="card" onClick={() => takeCard(props.data)}>
      <img
        alt={name}
        src={require(`../assets/${name.toLowerCase()}.jpg`)}
      ></img>
      <div>{name}</div>
    </div>
  );
}

export default Card;
