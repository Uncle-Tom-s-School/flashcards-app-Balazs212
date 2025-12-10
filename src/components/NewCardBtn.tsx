type NewCardBtnProp = {
  Click: () => void;
}

const NewCardBtn = ({Click}:NewCardBtnProp) => {
  return (
    <button className='newCardBtn customBtn' onClick={Click}>Új kártya hozzáadása</button>
  )
}

export default NewCardBtn