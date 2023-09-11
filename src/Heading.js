import React from "react";
import { NavLink } from "react-router-dom";

const Heading = () => {
  return (
    <>
      <div>Heading</div>
      <div>
        <div className="flex space-x-3 m-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          
        </div>
      </div>
    </>
  )
}
export default Heading
