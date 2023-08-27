<<<<<<< HEAD
import Login from './pages/login/Login';
=======
import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
>>>>>>> c5234bf4d52a9da4f2fa8e07d27407187ca626a8
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<Login />
=======
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
>>>>>>> c5234bf4d52a9da4f2fa8e07d27407187ca626a8
    </div>
  );
}

export default App;
