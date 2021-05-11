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
          <Link to="/"></Link>
          <Link to="/compte"></Link>
          <Link to="/pecho"></Link>
          </Router>
          <Footer/>
    </div>
  );
}

export default App;
