import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
 import Home from './components/home/Home';
import Calendar from './components/Dashboardcalander/Calander';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/Home" Component={Home} /> 
        <Route path="/Calendar" Component={Calendar} />
      </Routes>
     
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
