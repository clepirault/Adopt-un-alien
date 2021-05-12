import React from 'react';
import './MatchItem.css';

function MatchItem(props) {
  const { name, image, bonnitude, phrase, hobbies } = props;
  return (
    <div className="avatar">
      <img className="avatarmatches"src={image} alt='profilePic' />
      <h3 className="match-name">{name}</h3>
      <p><strong>Je suis un(e) : </strong>{bonnitude}</p>
      <p><strong>Ma philosophie :</strong></p>
      <p>{phrase}</p>
      <p><strong>Dans la vie, j'aime :</strong></p>
      <p>{hobbies}</p>
    </div>
  );
}

export default MatchItem;
