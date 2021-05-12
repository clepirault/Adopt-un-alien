import './Home.css';

function Home() {
  const handleClic = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
  };
  return (
    <div className='home'>
      <h1>Adopt 1 Alien</h1>
      <form className='form'>
        <h2>Je cherche :</h2>
        <h3>Espèce</h3>
        <div>
          <div>
            <label htmlFor='Humain'>Humain</label>
            <input
              type='radio'
              name='species'
              value='Humain'
              id='Humain'
              onClick={handleClic}
            />
          </div>
          <div>
            <label htmlFor='Alien'>Alien</label>
            <input
              type='radio'
              name='species'
              value='Alien'
              id='Alien'
              onClick={handleClic}
            />
          </div>
        </div>
        <h3>Bonnitude</h3>
        <div>
          <div className="label-box">
            <label htmlFor="Canon de l'espace">Canon de l'espace</label>
            <input
              type='radio'
              name='bonnitude'
              value="Canon de l'espace"
              id="Canon de l'espace"
              onClick={handleClic}
            />
          </div>
          <div>
            <label htmlFor='Débris de la galaxie'>Débris de la galaxie</label>
            <input
              type='radio'
              name='bonnitude'
              value='Débris de la galaxie'
              id='Débris de la galaxie'
              onClick={handleClic}
            />
          </div>
        </div>
        <button className="pecho" type='button'>Go pour pécho !</button>
      </form>
      
    </div>
  );
}

export default Home;
