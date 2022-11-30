import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FoodAndDrink from './components/categories/FoodAndDrink';
import SelectCategory from './components/SelectCategory';
import GeneralKnowledge from './components/categories/GeneralKnowledge';
import History from './components/categories/History';
import SportsAndLeisure from './components/categories/SportsAndLeisure';
import Geography from './components/categories/Geography';
import Music from './components/categories/Music';
import SocietyAndCulture from './components/categories/SocietyAndCulture';
import Science from './components/categories/Science';
import ArtsAndLiterature from './components/categories/ArtsAndLiterature';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SelectCategory' element={<SelectCategory />} />
        <Route path='/GeneralKnowledge' element={<GeneralKnowledge />} />
        <Route path='/History' element={<History />} />
        <Route path='/SportsAndLeisure' element={<SportsAndLeisure />} />
        <Route path='/Geography' element={<Geography />} />
        <Route path='/Music' element={<Music />} />
        <Route path='/SocietyAndCulture' element={<SocietyAndCulture />} />
        <Route path='/Science' element={<Science />} />
        <Route path='/FoodAndDrink' element={<FoodAndDrink />} />
        <Route path='/ArtsAndLiterature' element={<ArtsAndLiterature />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

