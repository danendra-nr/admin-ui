import React from "react";

function AtomInput({ type = "text", ...props }) {
  return (
    <>
      <input
        type={type}
        {...props}
        className={`border border-gray-01 rounded-md p-2 ${props.className ?? ""}`}
      />
    </>
  );
}

export default AtomInput;