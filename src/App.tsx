import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/home';
import { Work } from './page/work';
import ScrollToTop from './util/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
