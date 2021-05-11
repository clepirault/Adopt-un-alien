import './AlienList.css';
import fuséelove from "../images/fuséelove.png";

function AlienList(){
  return(
    <div className="random-alien">
      <img className="avatar-alien" src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="avatar"/>
      <h1 className="Name">Name</h1>
      <h1>Bonnitude</h1>
      <h1>Phrase d'accroche</h1>
      <h1>Planète</h1>
        <div>
          <img className="like" src="../images/fuséelove.png" alt="fuséelove"/>
        </div>
    </div>
  )
}

export default AlienList;