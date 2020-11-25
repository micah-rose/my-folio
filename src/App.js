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
                <Route exactly component={Header} path="/" />
                <Route exactly component={AboutMe} path="/about" />
                <Route exactly component={Skills} path="/skills" />
                <Route exactly component={Contact} path="/contact-me" />
          </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
