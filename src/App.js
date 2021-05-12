import './App.css';
import Compte from './components/Compte'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import AlienList from './components/AlienList';
import Footer from './components/Footer';
import Home from './components/Home';
import go from './assets/go.svg';
import Ma_recherche from './assets/Ma_recherche.svg';
import Mon_compte from './assets/Mon_compte.svg';


function App() {
  return (
    <div className="App">
         <Router>
          <Switch>
            <Route path="/compte">
              <Compte />
            </Route>
            <Route path="/pecho">
              <AlienList />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <div className="container">
          <Link to="/"><div className="column"><img className="searchIcon" src={Ma_recherche} alt="recherche"/><p>Ma recherche</p></div></Link>
          <Link to="/compte"><div className="column"><img className="compteIcon" src={Mon_compte} alt="compte"/><p>Mon compte</p></div></Link>
          <Link to="/pecho"><div className="column"><img className="pechoIcon" src={go} alt="go"/><p>Go pour pécho</p></div></Link>
          </div>
          </Router>
          <Footer/>
    </div>
  );
}

export default App;