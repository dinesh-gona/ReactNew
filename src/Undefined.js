import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Undefined = () => {
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    try {
      const undefinedObject = undefined;
      const propertyValue = undefinedObject.someProperty; // This will throw a TypeError
      console.log(propertyValue); // This line won't execute if an error is thrown
    } catch (err) {
      // Handle the error here
      setError(err.message); // Store the error message in state
    }
  };

  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <br/>
      <button onClick={handleButtonClick}>Trigger Error</button>
      
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Undefined;