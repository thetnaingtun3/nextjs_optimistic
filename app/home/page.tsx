"use client";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("Updated count on the server:", count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        className="px-4 py-2 mr-5 bg-teal-700 rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
      <button
        className="px-4 py-2 bg-teal-700 rounded-md"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
};

export default Home;
