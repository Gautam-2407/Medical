import Register from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
