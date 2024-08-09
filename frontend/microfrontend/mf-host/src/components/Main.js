import React from 'react';
import MfPlaceApp from 'mf_place/MfPlaceApp';
import MfProfileApp from 'mf_profile/MfProfileApp';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, onProfileUpdated, onPlaceCreated, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const profileContext = { currentUser }

  const placeContext = card => {
    return {card: card, user: currentUser}
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <MfProfileApp
          context={profileContext}
          onProfileUpdated={onProfileUpdated}
          onPlaceCreated={onPlaceCreated}
        />
      </section>
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <MfPlaceApp
              key={card._id}
              context={placeContext(card)}
              onPlaceShow={onCardClick}
              onPlaceLike={onCardLike}
              onPlaceDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
