import react, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FoodAndDrink from './components/FoodAndDrink';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <>
    <Link to='/foodAndDrink'>
      <h1>Food and Drink</h1>
    </Link>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}
