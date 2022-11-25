import './index.css'

const HistoryListItems = props => {
  const {userDetails, onDeleteBrowseHistroy} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

  const onDelete = () => {
    onDeleteBrowseHistroy(id)
  }

  return (
    <li className="list-items">
      <div className="items">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button onClick={onDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryListItems
