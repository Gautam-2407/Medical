import Login from './pages/login/Login';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Bodypart from './components/bodypart/Bodypart';
import Bodytest from './components/bodytests/Bodytest';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/Header" Component={Header} />
        <Route path="/Home" Component={Home} /> 
        <Route path="/Bodypart" Component={Bodypart} />
        <Route path="/Bodytest" Component={Bodytest} />
      </Routes>
     
    </div>
  );
}

export default App;
