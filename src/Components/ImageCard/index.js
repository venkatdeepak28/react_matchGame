const ImageCard = props => {
  const {value, checkObj} = props
  const {id, thumbnailUrl} = value

  const checkValue = () => {
    checkObj(id)
  }

  return (
    <li className="list-el">
      <button className="custom-btn" type="submit" onClick={checkValue}>
        <img className="inner-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageCard
