import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Footer.css';
import go from '../assets/go.svg';
import Ma_recherche from '../assets/Ma_recherche.svg';
import Mon_compte from '../assets/Mon_compte.svg';
import Compte from './Compte';
import Home from './Home';
//import AlienList from './AlienList';

function Footer(){
  
  return(
    <div className="Footer">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/compte" component={Compte}/>
            
          </Switch>
        </div>
               
        <div class="container">
        <Link to="/"><div><img src={Ma_recherche} alt="recherche"/><p>Ma recherche</p></div></Link>
        <Link to="/compte"><div><img src={Mon_compte} alt="compte"/><p>Mon compte</p></div></Link>
        <Link to="/pecho"><div><img src={go} alt="go"/><p>Go pour pécho</p></div></Link>
        </div>
      </Router>  
    </div>
  )
}

export default Footer;