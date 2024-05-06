import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (number) => {
    setExpression(expression + number);
  };

  const handleOperator = (operator) => {
    setExpression(expression + operator);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleEquals = () => {
    try {
      const evaluatedResult = eval(expression);
      setResult(evaluatedResult.toString());
      setExpression(evaluatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleDivisionByZero = (operator) => {
    if (
      expression.endsWith("/") &&
      (expression === "0/" || expression.endsWith("/0"))
    ) {
      setResult("Infinity");
      return;
    }
    handleOperator(operator);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
      <div className="buttons">
        <div className="buttonRow">
          <button onClick={handleNumber}>7</button>
          <button onClick={handleNumber}>8</button>
          <button onClick={handleNumber}>9</button>
          <button onClick={() => handleOperator("+")}>+</button>
        </div>

        <div className="buttonRow">
          <button onClick={handleNumber}>4</button>
          <button onClick={handleNumber}>5</button>
          <button onClick={handleNumber}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>
        </div>

        <div className="buttonRow">
          <button onClick={handleNumber}>1</button>
          <button onClick={handleNumber}>2</button>
          <button onClick={handleNumber}>3</button>
          <button onClick={() => handleOperator("*")}>*</button>
        </div>

        <div className="buttonRow">
          <button onClick={handleClear}>C</button>
          <button onClick={handleNumber}>0</button>
          <button onClick={handleEquals}>=</button>
          <button onClick={() => handleDivisionByZero("/")}>/</button>
        </div>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;
