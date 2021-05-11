import './Compte.css';
import MatchItem from './MatchItem';
import profil from './profil.jpg';

function Compte() {
  const allMatches = JSON.parse(localStorage.getItem('match'));
  console.log(allMatches);
  return (
    <div className='compte'>
      <div className="user">
        <h2>La Denrée</h2>
        <img src={profil} alt='userAvatar' />
        <p>Ma philosophie : <br /> Bloubloubloubloublou</p>
        <p>Mes hobbies :J'aime manger la soupe humaine</p>
      </div>
      <h1>Mes matchs</h1>
      <MatchItem {...allMatches[0]} />
      <MatchItem {...allMatches[1]} />
      <MatchItem {...allMatches[2]} />
    </div>
  );
}

export default Compte;
