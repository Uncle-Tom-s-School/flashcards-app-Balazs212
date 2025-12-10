type RestartBtnProp = {
  Click: () => void;
}

const RestartBtn = ({Click}:RestartBtnProp) => {
  return (
    <button className='restartBtn customBtn' onClick={Click}>Újrakezdés</button>
  )
}

export default RestartBtn