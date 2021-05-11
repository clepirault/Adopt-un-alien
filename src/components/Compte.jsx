import './Compte.css';
import MatchItem from './MatchItem';

function Compte() {
  const allMatches = JSON.parse(localStorage.getItem('match'));
  console.log(allMatches);
  return (
    <div className='compte'>
      <div id='wrapper'>
        <section>
          <div id='userImage'>
            <img
              src='https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/VIDEO-La-Soupe-aux-choux-facon-blockbuster.jpg'
              alt='user'
            />
          </div>
          <div id='contenuText'>
            <h2>La Denrée</h2>
            <p>Bloubloubloubloublou</p>
            <p>J'aime manger la soupe humaine</p>
          </div>
        </section>
      </div>
      <h1>Mes matchs</h1>
      <MatchItem {...allMatches[0]} />
      <MatchItem {...allMatches[1]} />
      <MatchItem {...allMatches[2]} />
    </div>
  );
}

export default Compte;
