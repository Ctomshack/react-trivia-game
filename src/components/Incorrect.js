import React from 'react';

export default function Incorrect({ incorrect }) {
  return (
    <div className='grid grid-cols-1 gap-8 md:px-12'>
      <p className='text-left underline text-white text-xl font-bold md:mt-4'>Incorrectly answered questions</p>
      {incorrect.map((elem, idx) => {
        return (
          <div key={idx} className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 border-b">
            <h3 className="row-start-1 row-span-1 md:col-start-1 md:col-span-1 text-xl text-left text-orange-500 font-base my-0">
              {elem.question}
            </h3>
            <div className='flex flex-col-reverse'>
            <p className="row-start-2 row-span-1 md:col-start-2 md:col-span-2 text-xl text-left md:text-right text-white font-base font-bold ">
               {elem.correctAnswer}
            </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
