"use client"

import React, { useState } from 'react';
import { Music, Check, X } from 'lucide-react';

const BandQuiz = () => {
  const bands = [
    { name: "Ghost Light Parade", isReal: false },
    { name: "Rainbow Kitten Surprise", isReal: true },
    { name: "Static Summer", isReal: false },
    { name: "The Droplines", isReal: true },
    { name: "Dogs in a Pile", isReal: true },
    { name: "Basement Theory", isReal: false },
    { name: "Hot Mulligan", isReal: true },
    { name: "The Morning Hours", isReal: false },
    { name: "Tape B", isReal: true },
    { name: "Silver Street", isReal: false }
  ];

  const [currentBand, setCurrentBand] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = (guess) => {
    if (!answered) {
      const correct = guess === bands[currentBand].isReal;
      if (correct) setScore(score + 1);
      setAnswered(true);
      
      setTimeout(() => {
        if (currentBand < bands.length - 1) {
          setCurrentBand(currentBand + 1);
          setAnswered(false);
          setShowResult(false);
        } else {
          setGameOver(true);
        }
      }, 1500);
      
      setShowResult(true);
    }
  };

  const resetGame = () => {
    setCurrentBand(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="w-full max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Game Over!</h2>
        <p className="text-xl mb-4 text-gray-800">Your Score: {score} / {bands.length}</p>
        <button 
          onClick={resetGame} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        <span className="text-lg font-medium text-gray-900">Question {currentBand + 1}/{bands.length}</span>
        <span className="text-lg font-medium text-gray-900">Score: {score}</span>
      </div>
      
      <div className="text-center mb-8">
        <div className="mx-auto mb-4 text-blue-600">
          <Music size={48} />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{bands[currentBand].name}</h2>
        <p className="text-lg mb-6 text-gray-800">Is this a real band playing at Bonnaroo 2025?</p>
      </div>

      <div className="flex justify-center gap-4">
        <button 
          onClick={() => handleGuess(true)}
          disabled={answered}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Real
        </button>
        <button 
          onClick={() => handleGuess(false)}
          disabled={answered}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Fake
        </button>
      </div>

      {showResult && (
        <div className="text-center mt-6">
          {bands[currentBand].isReal ? (
            <div className="flex items-center justify-center gap-2 text-green-700">
              <Check size={24} />
              <span className="font-medium">This band is really playing at Bonnaroo!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-purple-700">
              <X size={24} />
              <span className="font-medium">This was a fake band name!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BandQuiz;
