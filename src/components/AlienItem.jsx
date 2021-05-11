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
        <h1>{props.bonnitude}</h1>
        <h1>{props.state}</h1>
        <h1>{props.planete}</h1>
      </div>
    </div>
  );
}

export default AlienItem;
