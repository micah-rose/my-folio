import './App.css';
import Nav from './containers/Nav';
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
        <Nav />
        <Header />

      <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Intro</h2>
          <br />
          <p className="intro">
            Introductory content
          </p>
          <br />
          <hr />
          <h2>
            Hobbies/Interests
          </h2>
          <p className="hobbies">Hobbies/Interests content</p>
          <br />
          <h2>My Story</h2>
          <p className="my-story">
            My Story content
          </p>
          <br />
          <hr />
          <h2>Skills & Projects</h2>
          <p className="skills">
            Skills & Projects content
          </p>
          <br />
          <h2>Contact Me</h2>
          <p className="contact-me">
            Contact Me content
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
