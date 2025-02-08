import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/HospitalWebsite/Home.jsx';
import Services from './components/HospitalWebsite/Services.jsx';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
