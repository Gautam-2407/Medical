import Login from './pages/login/Login';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Home from './components/home/Home';
import Date from  "./Date";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/Home" Component={Home} /> 
        <Route path="/Date" Component={Date} />
      </Routes>
     
    </div>
  );
}

export default App;
