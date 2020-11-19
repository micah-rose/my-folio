import './App.css';
import Nav from './containers/Nav';
import Header from './containers/Header';
import Page from './containers/Page';
import Footer from './containers/Footer';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
        <Nav />
        <Header />
        <Canvas />
        <Page />
        <Footer />
    </div>
  );
}

export default App;
