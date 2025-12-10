const NewCard = () => {
  return (
    <div className="NewCardDiv">
      <h1 className="NewCardTitle">Új Kártya létrehozása</h1>
      <div className="NewCardOuter">
        <div className="NewCardUpper">
          <div className="NewCardInput">
            <h2>Kérdés</h2>
            <textarea placeholder="Kérdés placeholder..."></textarea>
          </div>
          <div className="NewCardInput">
            <h2>Válasz</h2>
            <textarea placeholder="Válasz placeholder..."></textarea>
          </div>
          <button className="NewCardAddBtn">+ Hozzáad</button>
        </div>
        <div className="NewCardBottom"></div>
      </div>
    </div>
  );
};

export default NewCard;
