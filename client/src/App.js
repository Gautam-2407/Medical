import Login from './pages/login/Login';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
