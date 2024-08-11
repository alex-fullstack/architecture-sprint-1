import React from 'react';
import { ProfileContext } from 'src/contexts/ProfileContext';
import AddPlacePopup from 'src/components/AddPlacePopup'
import EditProfilePopup from 'src/components/EditProfilePopup'
import EditAvatarPopup from 'src/components/EditAvatarPopup'
import api from '../utils/api'

function MfProfileApp({ context, onProfileUpdated, onPlaceCreated }) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const profileContext = context || {}

  const imageStyle = { backgroundImage: `url(${profileContext.currentUser?.avatar})` };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  function handleEditClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleImageClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleUpdateUser(userUpdate) {
    api
      .setUserInfo(userUpdate)
      .then((newUserData) => {
        onProfileUpdated(newUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    api
    .addCard(newCard)
    .then((newCardFull) => {
      onPlaceCreated(newCardFull)
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatarUpdate) {
    api
      .setUserAvatar(avatarUpdate)
      .then((newUserData) => {
        onProfileUpdated(newUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  return (
    <ProfileContext.Provider value={profileContext}>
      <React.Fragment>
      <div className="profile__image" onClick={handleImageClick} style={imageStyle}></div>
      <div className="profile__info">
        <h1 className="profile__title">{profileContext.currentUser?.name}</h1>
        <button className="profile__edit-button" type="button" onClick={handleEditClick}></button>
        <p className="profile__description">{profileContext.currentUser?.about}</p>
      </div>
      <button className="profile__add-button" type="button" onClick={handleAddClick}></button>
      </React.Fragment>
    <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
          onClose={closeAllPopups}
        />
    <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddPlaceSubmit}
          onClose={closeAllPopups}
        />
    <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
        />
    </ProfileContext.Provider>
    
  );
}

export default MfProfileApp;
