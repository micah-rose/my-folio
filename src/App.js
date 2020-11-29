import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Nav from './containers/Nav';
import Header from './containers/Header';
import AboutMe from './containers/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
                <Route exact component={Header} path="/my-folio" />
                <Route exact component={AboutMe} path="/about" />
                <Route exact component={Skills} path="/skills" />
                <Route exact component={Contact} path="/contact-me" />
          </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
