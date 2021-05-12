import './Compte.css';
import Footer from './Footer';
import MatchItem from './MatchItem';
import profil from './profil.jpg';

function Compte() {
  const allMatches = JSON.parse(localStorage.getItem('match')) || [];
  console.log(allMatches);
  return (
    <div>
      <div className='compte'>
        <div className='profile-header'>
          <h3>Profil de:</h3>
          <h1>La Denrée</h1>
        </div>
        <div className='user'>
          <img className='matchesAvatar' src={profil} alt='userAvatar' />
          <p>
            <strong>Ma philosophie :</strong> <br /> Bloubloubloubloublou
          </p>
          <p>
            <strong>Mes hobbies :</strong> j'aime manger la soupe aux choux !
          </p>
        </div>
        <div className='matches-box'>
          <h1>Mes matchs ❤️</h1>
          {allMatches.slice(0, 3).map((match) => {
            return <MatchItem {...match} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Compte;
