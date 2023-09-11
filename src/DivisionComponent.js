import React, { useState } from "react";

const DivisionComponent = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const numA = parseFloat(a);
      const numB = parseFloat(b);

      if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Please enter valid numbers.");
      }

      if (numB === 0) {
        throw new Error("Division by zero is not allowed.");
      }

      const divisionResult = numA / numB;
      setResult(`Result: ${divisionResult}`);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult("");
    }
  };

  return (
    <div>
      <h2>Division Calculator</h2>
      <div>
        <label>
          Enter number a:
          <input
            type="text"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Enter number b:
          <input
            type="text"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {error && <div>Error: {error}</div>}
      {result && <div>{result}</div>}
    </div>
  );
};

export default DivisionComponent;