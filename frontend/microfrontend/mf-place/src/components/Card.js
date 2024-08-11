import React from 'react';
import { PlaceContext } from 'src/contexts/PlaceContext';

function Card({ onImageClick, onLikeClick, onDeleteClick }) {
  const { card, user } = React.useContext(PlaceContext);
  const cardStyle = { backgroundImage: `url(${card?.link})` };

  const isLiked = card?.likes.some(i => i._id === user._id);
  const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_is-active'}`;

  const isOwn = card?.owner._id === user?._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  function handleLikeClick() {
    const isLiked = card?.likes.some((i) => i._id === user._id);
    onLikeClick(card._id, !isLiked)
  }

  function handleImageClick() {
    onImageClick(card._id)
  }

  function handleDeleteClick() {
    onDeleteClick(card._id)
  }

  return (
    <li className="places__item card">
      <div className="card__image" style={cardStyle} onClick={handleImageClick}>
      </div>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <div className="card__description">
        <h2 className="card__title">
          {card?.name}
        </h2>
        <div className="card__likes">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="card__like-count">{card?.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
