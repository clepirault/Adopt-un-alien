import './AlienList.css';

function AlienItem(props) {
  return(
    <div>
      <div className="random-alien">
      <img className="avatar-alien" src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="avatar"/>
      <h1 className="Name">{profiles.name}</h1>
      <h1>Bonnitude</h1>
      <h1>Phrase</h1>
      <h1>Planete</h1>
    </div>
    </div>
  )
}

export default AlienItem;