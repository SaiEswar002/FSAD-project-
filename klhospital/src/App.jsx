import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/HospitalWebsite/Home.jsx';

function App() {
  return (
    <StrictMode>
      <Home />
    </StrictMode>
  );
}

export default App;
