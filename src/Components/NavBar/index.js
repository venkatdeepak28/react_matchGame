const NavBar = props => {
  let paraValue
  let value
  const {isWin, count, timer} = props

  if (isWin === false) {
    paraValue = <p className="score-para">{timer} sec</p>
  } else {
    paraValue = <p className="score-para">60 sec</p>
  }

  if (count === 0) {
    value = 0
  } else {
    value = count
  }

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="list-nav">
        <li>
          <div className="logo-container">
            <p className="score-para" id="value">
              Score:{value}
            </p>
          </div>
        </li>
        <li>
          <div className="logo-container">
            <img
              className="timer-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            {paraValue}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
