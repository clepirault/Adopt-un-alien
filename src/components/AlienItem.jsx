import './AlienList.css';

function AlienItem(props) {
  return (
    <div>
      <div className='random-alien'>
        <img
          className='avatar-alien'
          src={props.image}
          alt='avatar'
        />
        <h1 className='Name'>{props.name}</h1>
        <h2>Je suis un(e) :</h2>
        <h1 className="bonnitude">{props.bonnitude}</h1>
        <h2>Ma philosophie :</h2>
        <p className="phrase">{props.phrase}</p>
        <h2>Ma planète :</h2>
        <p>{props.planete}</p>
        <h2>Mes hobbies :</h2>
        <p>{props.hobbies}</p>
      </div>
    </div>
  );
}

export default AlienItem;
