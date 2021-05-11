import React from 'react';

function MatchItem(props) {
  const { name, image, bonnitude, phrase, hobbies } = props;

  return (
    <div>
      <section>
        <div>
          <img src={image} alt='profilePic' />
        </div>
        <div>
          <p>{name}</p>
          <p>je suis un(e){bonnitude}</p>
          <p>Ma philosophie</p>
          <div>{phrase}</div>
          <div>Dans la vie, j'aime :</div>
          <div>{hobbies}</div>
        </div>
      </section>
    </div>
  );
}

export default MatchItem;
