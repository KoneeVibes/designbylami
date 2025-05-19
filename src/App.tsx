import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/home';
import { Work } from './page/work';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
