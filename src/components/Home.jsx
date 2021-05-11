import './Home.css';

function Home() {
  const handleClic=(e)=>{
    localStorage.setItem(e.target.name, e.target.value)
  }
  return (
    <div className='home'>
      <h1>Adopt 1 Alien</h1>
      <form className='form'>
        <h2>Je cherche :</h2>
        <h3>Espèce</h3>
        <div>
          <div>
            <label htmlFor='humain'>Humain</label>
            <input type='radio' name='species' value='humain' id='humain' onClick={handleClic}/>
          </div>
          <div>
            <label htmlFor='Alien'>Alien</label>
            <input type='radio' name='species' value='alien' id='alien' onClick={handleClic}/>
          </div>
        </div>
        <h3>Bonnitude</h3>
        <div>
          <div>
            <label htmlFor='canon'>Canon de l'espace</label>
            <input type='radio' name='bonnitude' value='canon' id='canon' onClick={handleClic}/>
          </div>
          <div>
            <label htmlFor='débris'>Débris de la galaxie</label>
            <input type='radio' name='bonnitude' value='débris' id='débris' onClick={handleClic}/>
          </div>
        </div>
        <button type="button">Go pour pécho !</button>
      </form>
    </div>
  );
}

export default Home;
