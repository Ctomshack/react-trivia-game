import react, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../App.css";
import arrayShuffle from "array-shuffle";

export default function FoodAndDrink() {
  const [questions, setQuestions] = useState([]);
  let [index, setIndex] = useState(0);
  let [isDone, setIsDone] = useState(false);
  let [answers, setAnswers] = useState([]);
  let [score, setScore] = useState(0);
  let [selection, setSelection] = useState("");
  let [showColors, setShowColors] = useState(false);
  const currentQuestions = useRef();
  const currentAnswers = useRef();

  // let score = 0

  const fetchFoodAndDrink = async () => {
    try {
      let { data } = await axios.get(
        "https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=5&difficulty=medium"
      );
      currentQuestions.current = data;
      setQuestions(currentQuestions.current);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetches all data from API. Data is returned as an array of objects.
  useEffect(() => {
    fetchFoodAndDrink();
    //test stuff
    // window.localStorage.setItem('SCORE', JSON.stringify(score))
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
      setShowColors(true);

      setTimeout(() => {
        setShowColors(false);
        nextQuestion();
      }, 3000);
    } else {
      setShowColors(true);
      setTimeout(() => {
        setShowColors(false);
        nextQuestion();
      }, 3000);
    }
    console.log("score", score);
    console.log("selection", selection);
    console.log("correct answer", questionObject.correctAnswer);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Food & Drink</h1>
      <h2 className="text 2xl font-bold text-center">Score: {score}/5</h2>

      <div>
        {showColors ? (
          <div className="bg-gray-800 m-auto py-40 px-8 mx-12 my-6 rounded-md shadow-lg text-center">
            <h2 className="text-4xl text-white">Correct Answer: {questionObject.correctAnswer}</h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 bg-gray-800 py-16 px-8 mx-12 my-6 rounded-md shadow-lg">
            <div>
              {!isDone ? (
                <h2 className="text-4xl text-left mb-4 text-white font-bold">
                  Question {index + 1}/{questions.length}
                </h2>
              ) : null}
              {isDone ? (
                <h2 className="text-5xl text-white col-start-2">You Scored {score} out of 5</h2>
              ) : (
                <h2 className="text-xl text-left col-start-1 col-span-1 text-white">
                  {questionObject.question}
                </h2>
              )}
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
                      className="my-2 hover:shadow-md inline-flex text-center justify-center items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
        )}
      </div>
      {isDone ? (
        <button type="button" onClick={() => refreshPage()}>
          Play Again
        </button>
      ) : null}
    </>
  );
}
