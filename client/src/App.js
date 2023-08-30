import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Wizard from "./pages/wizard/Wizard";
import './App.css';
import Checkbox from './pages/Checkbox/Checkbox';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/Wizard" element={<Wizard />}/>
      <Route path="/checkbox" element={<Checkbox />}/>
      </Routes>
    </div>
  );
}

export default App;
