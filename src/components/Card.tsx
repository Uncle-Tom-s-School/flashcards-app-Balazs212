import React, { useState } from "react";
import type { CardType } from "../types/CardType";

type CardProps = CardType & {
  Click: () => void;
};

function Card({ question, answer, Click }: CardProps) {
  const [questionCounter, setQuestionCounter] = useState<number>(1);
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{question}</p>
          </div>
          <div className="flip-card-back">
            <div className="BtnHeader">{questionCounter}</div>
            <p>{answer}</p>
            <div className="cardBottomDiv">
              <button
                className="iconBtn"
                onClick={() => {
                  setQuestionCounter((q) => q + 1);
                  Click();
                }}
              >
                <i className="fa-regular fa-circle-check check"></i>
              </button>
              <button
                className="iconBtn"
                onClick={() => {
                  setQuestionCounter((q) => q + 1);
                  Click();
                }}
              >
                <i className="fa-regular fa-circle-xmark xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="progressDiv">
        <p>{questionCounter}/12</p>
        <progress value={questionCounter} max={12}></progress>
      </div>
    </div>
  );
}

export default Card;
