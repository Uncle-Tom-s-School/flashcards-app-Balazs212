import React, { useEffect, useState } from "react";
import type { CardType } from "./types/CardType";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import RestartBtn from "./components/RestartBtn";
import NewCardBtn from "./components/NewCardBtn";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [currentCard, setCurrentCard] = useState<CardType>({
    question: "geci", answer: "kurva", points: 69
  });
  useEffect(() => {
    fetch("./public/cards.json")
      .then((res) => res.json())
      .then((items) => {
        setCards(items);
        setCurrentCard(items[0]);
      });
  }, []);

  return (
    <main>
      <Card {...currentCard} />
      <ProgressBar />
      <RestartBtn />
      <NewCardBtn />
    </main>
  );
}

export default App;
