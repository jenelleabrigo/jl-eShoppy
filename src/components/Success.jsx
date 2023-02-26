import React from "react";
import { NavLink } from "react-router-dom";

export default function Success() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-6xl font-bold tracking-tight text-primary dark:text-white mb-8">Thank you!</h1>
      <p className="mb-8">Your order has been placed.</p>
      <NavLink to={`/`} className="btn text-center text-sm mt-1 p-2 w-full">
        Return to Home
      </NavLink>
    </div>
  );
}
