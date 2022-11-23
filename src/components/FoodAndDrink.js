import react, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../App.css";

export default function FoodAndDrink() {
  const [questions, setQuestions] = useState([]);
  let [index, setIndex] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState('')
  const currentQuestions = useRef();

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

  console.log(questions[index])
  console.log(index)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Food n Drink</h1>
      <h2>
      </h2>
      <button type="button" onClick={() => setIndex(index+1)}>Next Question</button>
    </>
  );
}
