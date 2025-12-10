import { useEffect, useState } from "react";
import type { CardType } from "./types/CardType";
import Card from "./components/Card";
import RestartBtn from "./components/RestartBtn";
import NewCardBtn from "./components/NewCardBtn";
import NewCard from "./components/NewCard";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [cardCounter, setCardCounter] = useState<number>(1);
  const [currentCard, setCurrentCard] = useState<CardType>({
    question: "Ki a legjobb tanár a világon?",
    answer: "Nemes Tamás tanár úr",
    points: 67,
  });
  useEffect(() => {
    fetch("./public/cards.json")
      .then((res) => res.json())
      .then((items) => {
        setCards(items);
        setCurrentCard(items[cardCounter]);
      });
  }, []);

  function NextCard() {
    setCardCounter(cardCounter + 1);
    setCurrentCard(cards[cardCounter]);
  }

  function MakeNewCard() {
    setShowCard(false);
    setShowNewCardBtn(false);
    setShowNewCard(true);
  }
  function Restart() {
    setShowCard(true);
    setShowNewCardBtn(true);
    setShowNewCard(false);
    setCardCounter(0)
    setCurrentCard(cards[cardCounter])
  }

  const [showCard, setShowCard] = useState<boolean>(true);
  const [showNewCardBtn, setShowNewCardBtn] = useState<boolean>(true);
  const [showNewCard, setShowNewCard] = useState<boolean>(false);

  return (
    <main>
      <div className={showCard ? "" : "hidden"}>
        <Card {...currentCard} Click={NextCard} />
      </div>
      <div className={showNewCard ? "" : "hidden"}>
        <NewCard/>

      </div>
      <RestartBtn Click={Restart} />
      <div className={showNewCardBtn ? "" : "hidden"}>
        <NewCardBtn Click={MakeNewCard} />
      </div>
    </main>
  );
}

export default App;
