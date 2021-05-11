import React from 'react';

function MatchItem(props) {
  const { name, image, bonnitude, phrase, hobbies } = props;
  return (
    <div>
      <img src={image} alt='profilePic' />
      <h3>{name}</h3>
      <p>je suis un(e) {bonnitude}</p>
      <p>Ma philosophie</p>
      <p>{phrase}</p>
      <p>Dans la vie, j'aime :</p>
      <p>{hobbies}</p>
    </div>
  );
}

export default MatchItem;
