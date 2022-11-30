import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../../App.css";
import arrayShuffle from "array-shuffle";
import Completed from "../Completed";

export default function SocietyAndCulture() {
  const [questions, setQuestions] = useState([]);
  let [index, setIndex] = useState(0);
  let [isDone, setIsDone] = useState(false);
  // let [answers, setAnswers] = useState([]);
  let [score, setScore] = useState(0);
  let [selection, setSelection] = useState("");
  let [showColors, setShowColors] = useState(false);
  const currentQuestions = useRef();
  const currentAnswers = useRef();

  // let score = 0

  const fetchCategory = async () => {
    try {
      let { data } = await axios.get(
        "https://the-trivia-api.com/api/questions?categories=society_and_culture&limit=5&difficulty=medium"
      );
      currentQuestions.current = data;
      setQuestions(currentQuestions.current);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetches all data from API. Data is returned as an array of objects.
  useEffect(() => {
    fetchCategory();
  }, []);

  // set questionObject to the current question based on the index value.
  let questionObject = { ...questions[index] };

  // set currentAnswers.current to a multi-dimensional array consisting of incorrect answers and the correct answer.
  currentAnswers.current = [
    questionObject.incorrectAnswers,
    questionObject.correctAnswer,
  ];

  // use .reduce to flatten the multi-dimensional array (currentAnswers.current) into a 1d array.
  let allAnswers = currentAnswers.current.reduce((accum, elem) => {
    return accum.concat(elem);
  }, []);

  // randomizes the array of answers so the correct answer is not in the same array position every time.
  let randomAnswers = arrayShuffle(allAnswers);

  // nextQuestion increments the index onClick to proceed to the next question.
  const nextQuestion = () => {
    setIndex(index + 1);
    if (index === questions.length - 1) {
      setIsDone(!isDone);
    }
  };

  function incrementScore() {
    setScore((prevScore) => prevScore + 1);
  }

  const changeHandler = (e) => {
    setSelection(e.target.value);
    console.log(selection);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (selection === questionObject.correctAnswer) {
      incrementScore();
      // setShowColors(true);
      nextQuestion();

      // setTimeout(() => {
      //   setShowColors(false);
      //   nextQuestion();
      // }, 2000);
    } else {
      nextQuestion();
      // setShowColors(true);
      // setTimeout(() => {
      //   setShowColors(false);
      //   nextQuestion();
      // }, 2000);
    }
    console.log("score", score);
    console.log("selection", selection);
    console.log("correct answer", questionObject.correctAnswer);
  };

  return (
    <>
        {!isDone ? (
          <div className="center-screen flex-col justify-center align-middle">
            <h1 className="text-8xl text-white font-extrabold mb-8 drop-shadow-xl">
              {questionObject.category}
            </h1>
            {/* <h2 className="text 2xl font-bold text-center">Score: {score}/5</h2> */}
            <div className="grid grid-cols-2 gap-4 bg-gray-700 py-16 px-8 mx-8 lg:mx-28 my-6 rounded-md shadow-lg opacity-80">
              <div>
                <h2 className="text-4xl text-left mb-4 text-white font-bold">
                  Question {index + 1}/{questions.length}
                </h2>
                <h2 className="text-xl text-left col-start-1 col-span-1 text-white">
                  {questionObject.question}
                </h2>
              </div>
              <form
                onSubmit={(e) => {
                  submitHandler(e);
                }}
              >
                <div className="flex flex-col text-2xl font-bold text-center col-start-2 col-span-2">
                  {randomAnswers.map((answer, idx) => {
                    return (
                      <button
                        className="my-2 hover:shadow-md inline-flex text-center w-4/5 lg:w-full  justify-center self-center items-center rounded-3xl border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-blue-700 hover:text-white  hover:border-blue-600 border-r-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        key={idx}
                        value={answer}
                        onClick={(e) => {
                          changeHandler(e);
                        }}
                      >
                        {answer}
                      </button>
                    );
                  })}
                </div>
              </form>
            </div>
          </div>
        ) : (
          <Completed score={score} />
        )}
    </>
  );
}
