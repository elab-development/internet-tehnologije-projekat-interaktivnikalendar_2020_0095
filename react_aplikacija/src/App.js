
import './App.css';
import NavBar from './components/NavBar';
import slika from './images/slika.jpg';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className = "hero-container"><img src = {slika} alt = "Business Calendar Background" className = "hero-image"/>
          <div className = "hero-text">   Welcome to Your Business Calendar</div>
      </div>
    </div>
  );
}

export default App;
