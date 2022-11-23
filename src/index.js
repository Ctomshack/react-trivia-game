import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FoodAndDrink from './components/FoodAndDrink';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/foodAndDrink' element={<FoodAndDrink />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

