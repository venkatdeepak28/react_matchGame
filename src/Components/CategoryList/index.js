const CategoryList = props => {
  let classValue
  const {value, highlighted, changeCategory} = props
  const {tabId, displayText} = value

  const changeArr = () => {
    changeCategory(tabId)
  }

  if (tabId === highlighted) {
    classValue = 'para highlight'
  } else {
    classValue = 'para'
  }
  return (
    <li className="list-el">
      <button className={classValue} type="submit" onClick={changeArr}>
        {displayText}
      </button>
    </li>
  )
}

export default CategoryList
