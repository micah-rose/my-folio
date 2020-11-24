import './App.css';
import Nav from './containers/Nav';
import Header from './containers/Header';
// import Page from './containers/Page';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Header />
        {/* <Page />*/}
        <Footer /> 
    </div>
  );
}

export default App;
