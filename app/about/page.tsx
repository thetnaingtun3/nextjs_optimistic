"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Optimistic update: immediately increment the count on the UI
    setCount(count + 1);

    // Send the request to the server to update the count
    fetch("http://localhost:8000/api/increment", {
      method: "POST",
      body: JSON.stringify({ count: count + 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Handle the server response (optional)
        if (!response.ok) {
          // If the request fails, revert the count on the UI
          setCount(count);
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        // Handle errors (optional)
        console.error("Error updating count:", error);
      });
  };

  const handleDecrement = () => {
    // Optimistic update: immediately decrement the count on the UI
    setCount(count - 1);

    // Send the request to the server to update the count
    fetch("http://localhost:8000/api/decrement", {
      method: "POST",
      body: JSON.stringify({ count: count - 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Handle the server response (optional)
        if (!response.ok) {
          // If the request fails, revert the count on the UI
          setCount(count);
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        // Handle errors (optional)
        console.error("Error updating count:", error);
      });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
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

export default Counter;
