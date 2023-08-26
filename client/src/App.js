import Login from './pages/login/Login';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/Header" Component={Header} /> 
      </Routes>
     
    </div>
  );
}

export default App;
