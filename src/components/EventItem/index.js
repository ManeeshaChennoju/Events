import './index.css'

const EventItem = props => {
  const {eventItemDetails, clickEventItem, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventItemDetails
  const onClickEvent = () => {
    clickEventItem(registrationStatus, id)
  }
  const activeEventClassName = isActive ? 'active_event_item' : ''
  console.log(isActive, '--------------------')
  return (
    <li className="item_container" onClick={onClickEvent}>
      <button type="button" className={`img_buttons ${activeEventClassName}`}>
        <img
          src={imageUrl}
          alt="event"
          className={`event_image ${activeEventClassName}`}
        />
      </button>

      <p className="event_name">{name}</p>
      <p className="event_location">{location} </p>
    </li>
  )
}

export default EventItem
