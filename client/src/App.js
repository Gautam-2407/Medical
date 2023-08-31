import Register from './pages/Register/Register';
import Error from './pages/Error/Error';
import Dashboard from './pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />      
        <Route path='/dashboard' element={<Dashboard />} />

        {/* Fallback Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
