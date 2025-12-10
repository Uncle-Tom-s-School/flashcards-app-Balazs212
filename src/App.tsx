import React, { useEffect, useState } from "react";
import type { CardType } from "./types/CardType";
import Card from "./components/Card";
import RestartBtn from "./components/RestartBtn";
import NewCardBtn from "./components/NewCardBtn";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [cardCounter, setCardCounter] = useState<number>(1)
  const [currentCard, setCurrentCard] = useState<CardType>({
    question: "geci", answer: "kurva", points: 69
  });
  useEffect(() => {
    fetch("./public/cards.json")
      .then((res) => res.json())
      .then((items) => {
        setCards(items);
        setCurrentCard(items[cardCounter]);
      });
  }, []);

  function NextCard(){
    setCardCounter(cardCounter+1)
    setCurrentCard(cards[cardCounter])
  }

  return (
    <main>
      <Card {...currentCard} Click={NextCard}/>
      <RestartBtn />
      <NewCardBtn />
    </main>
  );
}

export default App;
