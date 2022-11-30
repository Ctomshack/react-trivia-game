import React from "react";
import { Link } from "react-router-dom";
// import {IoFastFoodOutline, GiBrain, ImBooks, MdSportsTennis, BiWorld,  IoMusicalNotesSharp, MdOutlineNaturePeople, IoBookSharp } from 'react-icons'

const categories = [
  { name: "Food & Drink", href: "/FoodAndDrink", icon: "IoFastFoodOutline" },
  { name: "General Knowledge", href: "/GeneralKnowledge", icon: "GiBrain" },
  { name: "History", href: "/History", icon: "ImBooks" },
  {
    name: "Sports & Leisure",
    href: "/SportsAndLeisure",
    icon: "MdSportsTennis",
  },
  { name: "Geography", href: "/Geography", icon: "BiWorld" },
  { name: "Music", href: "/Music", icon: "IoMusicalNotesSharp" },
  { name: "Science", href: "/Science", icon: "MdOutlineScience" },
  {
    name: "Society & Culture",
    href: "/SocietyAndCulture",
    icon: "MdOutlineNaturePeople",
  },
  {
    name: "Arts & Literature",
    href: "/ArtsAndLiterature",
    icon: "IoBookSharp",
  },
];

const SelectCategory = () => {
  return (
    <div className='my-8 flex justify-center lg:mx-24 md:py-16'>
    <div className='flex flex-col align-center justify-center w-4/5 items-center '>
    <h1 className='text-7xl text-white font-extrabold mb-8 drop-shadow-xl'>Select a Category</h1>
        {categories.map((item, idx) => {
            return (
                <Link to={item.href}
                key={idx}
                className='w-full'>
                    <button
                    key={idx}
                    className="my-2 text-3xl font-medium hover:shadow-md block text-center w-full lg:w-full justify-center items-center rounded-md border border-gray-300 bg-white px-6 py-8 text-gray-700 shadow-sm hover:bg-orange-500 hover:text-white  hover:border-orange-500 border-r-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    >{item.name}</button>
                </Link>
            )
        })}
    </div>
        </div>
  );
};

export default SelectCategory;
