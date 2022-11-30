import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import Incorrect from './Incorrect';

const Completed = ({ score, incorrect }) => {
  const calculateScore = (total) => {
    if (total === 0) {
      return 0;
    } else {
      let percent = total / 5;
      return percent * 100;
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="center-screen mx-8 flex flex-col justify-center align-middle bg-gray-700 py-16 px-8 lg:mx-28 my-6 rounded-md shadow-lg opacity-80">
      <div className="mb-12">
        <h1 className="text-5xl text-white font-bold mb-8 drop-shadow-md">
          You scored
        </h1>
        <h2 className="text-9xl text-orange-500 font-extrabold mb-8 drop-shadow-xl">
          {calculateScore(score)} %
        </h2>

        <Incorrect incorrect={incorrect} />
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <button
          type="button"
          className="my-2 text-5xl font-bold hover:shadow-md block text-center w-full lg:w-full justify-center items-center  rounded-md border border-gray-300 bg-white px-6 py-8 text-gray-700 shadow-sm hover:bg-orange-500 hover:text-white  hover:border-orange-500 border-r-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          onClick={() => refreshPage()}
        >
          Play Again
        </button>
        <Link to="/SelectCategory">
          <button
            type="button"
            className="my-2 text-5xl font-bold hover:shadow-md block text-center w-full lg:w-full justify-center items-center  rounded-md border border-gray-300 bg-white px-6 py-8 text-gray-700 shadow-sm hover:bg-orange-500 hover:text-white  hover:border-orange-500 border-r-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Select a Category
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="my-2 text-xl font-light  hover:underline block text-center w-full lg:w-full justify-center items-center  text-white shadow-sm "
          >
            Quit & return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Completed;
