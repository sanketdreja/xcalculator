import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [expression, setExpression] = useState(""); // Stores the current expression
  const [result, setResult] = useState(""); // Stores the current result

  // Handles button clicks
  const handleButtonClick = (value) => {
    if (value === "C") {
      // Clear the calculator
      setExpression("");
      setResult("");
    } else if (value === "=") {
      // Evaluate the expression
      handleEquals();
    } else {
      // Add the button value to the expression
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  // Evaluate the expression
  const handleEquals = () => {
    try {
      // Evaluate the current expression
      const evaluatedResult = eval(expression);

      // Check for division by zero and handle accordingly
      if (evaluatedResult === Infinity) {
        setResult("Infinity");
      } else if (isNaN(evaluatedResult)) {
        setResult("NaN");
      } else {
        setResult(String(evaluatedResult));
      }

      // Update the expression with the evaluated result
      setExpression(String(evaluatedResult));
    } catch (error) {
      // If there is an error in evaluation, display 'Error'
      setResult("Error");
      setExpression("");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>

      <div className="buttons">
        <div className="buttonRow">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>

        <div className="buttonRow">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>

        <div className="buttonRow">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>

        <div className="buttonRow">
          <button onClick={() => handleButtonClick("C")}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
