import './App.css';
import { BrowserRouter as Rounter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Rounter>
        <Routes>
          <Route element={<Home/>} path="/"/>
        </Routes>
      </Rounter>
    </div>
  );
}

export default App;
