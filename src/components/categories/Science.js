import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import arrayShuffle from 'array-shuffle';
import Completed from '../Completed';

export default function Science() {
  const [questions, setQuestions] = useState([]);
  let [index, setIndex] = useState(0);
  let [isDone, setIsDone] = useState(false);
  let [score, setScore] = useState(0);
  let [selection, setSelection] = useState('');
  let [incorrect, setIncorrect] = useState([]);
  const currentQuestions = useRef();
  const currentAnswers = useRef();

  const fetchCategory = async () => {
    try {
      let { data } = await axios.get(
        'https://the-trivia-api.com/api/questions?categories=science&limit=5&difficulty=medium'
      );
      currentQuestions.current = data;
      setQuestions(currentQuestions.current);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  let questionObject = { ...questions[index] };

  currentAnswers.current = [
    questionObject.incorrectAnswers,
    questionObject.correctAnswer,
  ];

  let allAnswers = currentAnswers.current.reduce((accum, elem) => {
    return accum.concat(elem);
  }, []);

  let randomAnswers = arrayShuffle(allAnswers);

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
      nextQuestion();
    } else {
      incorrect.push(questionObject);
      nextQuestion();
    }
    console.log('score', score);
    console.log('selection', selection);
    console.log('correct answer', questionObject.correctAnswer);
  };

  return (
    <>
        {!isDone ? (
          <div className="center-screen flex-col justify-center align-middle">
            <h1 className="text-8xl text-white font-extrabold mb-8 drop-shadow-xl">
              {questionObject.category}
            </h1>
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 bg-gray-700 py-16 px-8 mx-8 lg:mx-28 my-6 rounded-md shadow-lg opacity-80 min-w-100 max-w-500">
              <div className="mb-8">
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
                <div className="flex flex-col text-2xl font-bold text-center lg:col-start-2 lg:col-span-2">
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
        <Completed score={score} incorrect={incorrect} />
      )}
    </>
  );
}
