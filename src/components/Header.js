function Header() {
  return (
    <div>
      <h1>Cosmere's Memory Game</h1>
      <div className="scoreboard">
        <p>Score: 0</p>
        <p>Best Score: 0</p>
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
