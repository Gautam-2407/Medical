import Login from './pages/login/Login';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Home from './components/home/Home';
import Bodytest from './components/bodytests/Bodytest';
import Bodypart from './components/bodypart/Bodypart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/Home" Component={Home} /> 
        <Route path="/Bodytest" Component={Bodytest} />
        <Route path="/bodypart" Component={Bodypart} />
     
      </Routes>
     
    </div>
  );
}

export default App;
