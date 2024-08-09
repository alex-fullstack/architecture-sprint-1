import React from 'react';
import Card from './Card'
import { PlaceContext } from 'src/contexts/PlaceContext';
import api from '../utils/api'

function MfPlaceApp({ context, onPlaceShow, onPlaceLike, onPlaceDelete }) {
  const placeContext = context || {}
 
  function handleImageClick(id) {
    onPlaceShow(id);
  }

  function handleLikeClick(id, like) {
    api
      .changeLikeCardStatus(id, like)
      .then((newCard) => {
        onPlaceLike(newCard);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteClick(id) {
    api
      .removeCard(id)
      .then(() => {
        onPlaceDelete(id);
      })
      .catch((err) => console.log(err));

  ;
}
  return (
    <PlaceContext.Provider value={placeContext}>
      <Card onImageClick={handleImageClick} onLikeClick={handleLikeClick} onDeleteClick={handleDeleteClick}></Card>
    </PlaceContext.Provider>
  );
}

export default MfPlaceApp;
