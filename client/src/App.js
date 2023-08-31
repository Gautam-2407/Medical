import Register from './pages/Register/Register';
import Error from './pages/Error/Error';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/header' element={<Header />} />

        {/* Fallback Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
