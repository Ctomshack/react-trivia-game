import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/index.css'

const Home = () => {
    return (
        <div className='center-screen flex justify-center align-middle'>
        <div className='flex flex-col align-center justify-center w-4/5 items-center'>
            <h1 className='text-8xl text-white font-extrabold mb-8 drop-shadow-xl'>Trivia Game</h1>
                    <Link to='/SelectCategory'
                    className='w-full'>
                        <button
                        className="my-2 text-5xl font-bold hover:shadow-md block text-center w-full lg:w-full justify-center items-center  rounded-md border border-gray-300 bg-white px-6 py-8 text-gray-700 shadow-sm hover:bg-orange-500 hover:text-white  hover:border-orange-500 border-r-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        >Play Now</button>
                    </Link>
        </div>
            </div>
      )
}

export default Home