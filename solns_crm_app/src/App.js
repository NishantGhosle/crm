
import './App.css';
import Home from './Components/Home';

import TopNavBar from './Components/TopNavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SolnsCRM</h1>
        <p className='profile-box'>P</p>
      </header>
      <TopNavBar />
      <Home />
      
    </div>
  );
}

export default App;
 