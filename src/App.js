import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./components";
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
