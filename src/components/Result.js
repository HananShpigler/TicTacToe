import React from 'react';
import './Result.css';
export default function Result({winner,turn}) {
    return (
        <div className="App__result">
            <h2 className="result__text">
            {winner?'The Winner is : '+(turn?'O':'X'):''}
            </h2>
      </div>
    );
}