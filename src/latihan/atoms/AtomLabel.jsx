import React from "react";

function AtomLabel({ children, ...props }) {
  return (
    <>
      <label {...props} className={`me-1 ${props.className ?? ""}`}>
        {children}
      </label>
    </>
  );
}

export default AtomLabel;