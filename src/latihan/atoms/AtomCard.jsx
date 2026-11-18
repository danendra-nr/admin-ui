import React from "react";

function AtomCard({ children, className = "" }) {
  return (
    <>
      <div
        className={`bg-gray-06 border border-gray-01 p-5 rounded-lg shadow-lg ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default AtomCard;