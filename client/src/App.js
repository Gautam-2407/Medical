import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Wizard from "./pages/wizard/Wizard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/Wizard" element={<Wizard />}/>
      </Routes>
    </div>
  );
}

export default App;
