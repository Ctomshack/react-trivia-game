import React from 'react';

export default function Incorrect({ incorrect }) {
  return (
    <div>
      {incorrect.map((elem, idx) => {
        return (
          <div key={idx} className="flex-col">
            <h3 className="text-xl text-red-500 font-bold my-0 drop-shadow-md">
              {elem.question}
            </h3>
            <h3 className="text-xl text-white font-bold mb-8 drop-shadow-md">
              Answer: {elem.correctAnswer}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
