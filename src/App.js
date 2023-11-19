import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import BotCollection from './Components.js/BotCollection';
import NavBar from './Components.js/NavBar';
import MyArmy from './Components.js/MyArmy';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<BotCollection />} />
    <Route exact path="/myArmy" element={<MyArmy /> } />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
