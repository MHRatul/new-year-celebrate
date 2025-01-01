import React, { useState } from "react";

const NewYearMessage = () => {
  const [message, setMessage] = useState("");

  // Handlers for button clicks
  const handleNotClick = () => {
    setMessage("You clicked 'is Not'.");
  };

  const handleHeartClick = () => {
    setMessage("You clicked '❤️ for me'.");
  };

  const handleMuslimClick = () => {
    setMessage("Thanks for clicking- 'I'm Muslim ❤️'.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Celebrate 31st Night or New Year.</h1>
        <div className="mt-4">
          <div className="w-16 h-16 mx-auto">
            {/* Replace with your confetti image */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2278/2278992.png"
              alt="Confetti"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Box 1 */}
        <button
          onClick={handleNotClick}
          className="flex flex-col items-center justify-center bg-gray-900 border border-white rounded-lg p-6 hover:bg-gray-700 transition"
        >
          <div className="text-4xl text-red-600">🚫</div>
          <p className="mt-2 text-lg">is Not</p>
        </button>

        {/* Box 2 */}
        <button
          onClick={handleHeartClick}
          className="flex flex-col items-center justify-center bg-gray-900 border border-white rounded-lg p-6 hover:bg-gray-700 transition"
        >
          <div className="text-4xl text-red-600">❤️</div>
          <p className="mt-2 text-lg">for me</p>
        </button>

        {/* Box 3 */}
        <button
          onClick={handleMuslimClick}
          className="flex flex-col items-center justify-center bg-gray-900 border border-white rounded-lg p-6 hover:bg-gray-700 transition"
        >
          <p className="text-center text-lg">
            Because, <br />
            <span className="font-bold text-xl">I'm Muslim.❤️</span>
          </p>
          <div className="mt-4">
            {/* Replace with your prayer image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
              alt="Muslim Prayer"
              className="w-12 h-12"
            />
          </div>
        </button>
      </div>

      {/* Message Display */}
      <div className="mt-10">
        {message && (
          <p className="text-lg font-semibold text-green-400">{message}</p>
        )}
      </div>
    </div>
  );
};

export default NewYearMessage;
