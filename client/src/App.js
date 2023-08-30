import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Error from './pages/Error/Error';
import { Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Fallback Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
