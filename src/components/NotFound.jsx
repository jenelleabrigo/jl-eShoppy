import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-9xl font-bold tracking-tight text-primary dark:text-white mb-8">404</h1>
      <p className="text-6xl mb-14 text-primary">Page Not Found</p>
      <NavLink to={`/`} className="btn text-center text-sm mt-1 p-2 w-full">
        Go to Homepage
      </NavLink>
    </div>
  );
}
