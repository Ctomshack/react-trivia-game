import react, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../App.css";

export default function FoodAndDrink() {
  const [questions, setQuestions] = useState([]);
  let [index, setIndex] = useState(0);
  let [isDone, setIsDone] = useState(false);
  const [answers, setAnswers] = useState([])
  const currentQuestions = useRef();
  const currentAnswers = useRef();

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

  useEffect(() => {
    fetchFoodAndDrink();
  }, []);

  let questionObject = { ...questions[index] };
//   let answersArray = [...questionObject.incorrectAnswers, questionObject.correctAnswer] || [];

  const clickHandler = () => {
    setIndex(index + 1);
    if (index === questions.length - 1) {
      setIsDone(!isDone);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

//   console.log(answersArray)
console.log(questionObject)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Food & Drink</h1>
      <h2>
        Question: {index + 1}/{questions.length}
      </h2>
      <div>

      <h2>
        {isDone ? (
            <span>Done! -- placeholder --</span>
            ) : (
                questionObject.question
                )}
      {/* <select>
        {answersArray.map((answer, idx) => {
            return (
                <option key={idx}>{answer}</option>
                )
            })}
      </select> */}
      </h2>
            </div>
      {isDone ? (
        <button type="button" onClick={() => refreshPage()}>
          Play Again
        </button>
      ) : (
        <button type="button" onClick={() => clickHandler()}>
          Next Question
        </button>
      )}
    </>
  );
}
