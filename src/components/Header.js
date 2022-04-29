import "../styles/header.css"

function Header(props) {
  const { score, bestScore } = props;

  return (
    <div className="heading">
      <h1>Cosmere's Memory Game</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div>
        <p>
          Get points by clicking on an image, but don't click on any more than
          once!
        </p>
      </div>
    </div>
  );
}

export default Header;
