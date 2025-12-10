import React, { useState } from 'react'
import type { CardType } from '../types/CardType'

function Card(props:CardType){
  const [questionCounter, setQuestionCounter] = useState<number>(0);
  
  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
        <p>{props.question}</p>
    </div>
    <div className="flip-card-back">
        <div className='BtnHeader'>1</div>
      <p>{props.answer}</p>
      <button className='NextCardBtn'>Next Card</button>
    </div>
  </div>
</div>
)
}

export default Card