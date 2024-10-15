import React, { useState } from "react";
import "./Counter.css";
import { Button } from "../button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    // If the counter is greater than 0, decrement the counter, otherwise keep it as it is
    // Ternary operator is used to check the condition:
    // condition ? trueCase : falseCase
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div id="counter-container">
      <h1>Counter App</h1>

      <div id="counter">
        <span id="count">{counter}</span>

        <div id="button-container">
          <Button id="increment" onClick={increment}>
            +
          </Button>
          <Button id="decrement" onClick={decrement}>
            -
          </Button>
          <Button id="reset" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};
