import './index.css'

const WinLose = props => {
  const {sendValue, changeWin} = props

  const startTime = () => {
    changeWin()
  }

  return (
    <div className="emoji-container">
      <div className="won-container">
        <div>
          <div className="inner-container">
            <img
              className="won-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
            />
            <div className="text-container">
              <p className="won-para">Your Score</p>
              <p className="won-para extra">{sendValue}</p>
              <button className="win-btn" type="submit" onClick={startTime}>
                <img
                  className="timer-logo"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                />
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinLose
