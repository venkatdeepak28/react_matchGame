import {Component} from 'react'
import NavBar from '../NavBar'
import ImageCard from '../ImageCard'
import CategoryList from '../CategoryList'
import WinLose from '../WinLoseCard'
import './index.css'

let initial = 0

class MatchGame extends Component {
  state = {arrCategory: 'FRUIT'}

  changeCategory = id => {
    this.setState({arrCategory: id})
  }

  render() {
    let imageDiv
    let imgValue
    const {count, timer, isWin, imagesList} = this.props
    const {tabsList, checkObj, shuffledList, startTimer, changeWin} = this.props
    const {arrCategory} = this.state

    const {imageUrl} = shuffledList

    const sendArr = imagesList.filter(
      eachValue => eachValue.category === arrCategory,
    )

    if (initial === 0) {
      imgValue = (
        <img
          className="main-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png"
          alt="match"
        />
      )
      initial += 1
    } else {
      imgValue = <img className="main-img" src={imageUrl} alt="match" />
    }

    if (isWin === false) {
      imageDiv = (
        <div className="emoji-container">
          {imgValue}
          <ul className="list-prop">
            {tabsList.map(eachValue => (
              <CategoryList
                key={eachValue.tabId}
                value={eachValue}
                highlighted={arrCategory}
                changeCategory={this.changeCategory}
              />
            ))}
          </ul>
          <ul className="list-prop images-list">
            {sendArr.map(eachValue => (
              <ImageCard
                key={eachValue.id}
                value={eachValue}
                checkObj={checkObj}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      imageDiv = <WinLose sendValue={count} changeWin={changeWin} />
    }

    return (
      <div className="bg-container">
        <NavBar
          isWin={isWin}
          count={count}
          timer={timer}
          startTimer={startTimer}
        />
        {imageDiv}
      </div>
    )
  }
}

export default MatchGame
