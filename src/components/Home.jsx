import './Home.css';

function Home() {
  return (
    <div className='home'>
      <h1>Adopt 1 Alien</h1>
      <form className='form'>
        <h2>Je cherche :</h2>
        <h3>Espèce</h3>
        <div>
          <div>
            <label htmlFor='humain'>Humain</label>
            <input type='radio' name='species' value='humain' id='humain' />
          </div>
          <div>
            <label htmlFor='Alien'>Alien</label>
            <input type='radio' name='species' value='alien' id='alien' />
          </div>
        </div>
        <h3>Bonnitude</h3>
        <div>
          <div>
            <label htmlFor='canon'>Canon de l'espace</label>
            <input type='radio' name='bonnitude' value='canon' id='canon' />
          </div>
          <div>
            <label htmlFor='débris'>Débris de la galaxie</label>
            <input type='radio' name='bonnitude' value='débris' id='débris' />
          </div>
        </div>
        <button type="button">Go pour pécho !</button>
      </form>
    </div>
  );
}

export default Home;
