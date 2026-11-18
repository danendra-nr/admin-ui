import React from "react";

const variants = {
  primary: "bg-primary",
  secondary: "bg-neutral-700",
  danger: "bg-red-600",
};

function AtomButton({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <>
      <button
        type={type}
        {...props}
        className={[
          "px-8 py-2 rounded-md text-white",
          variants[variant] ?? variants.primary,
          className,
        ].join(" ")}
      >
        {children}
      </button>
    </>
  );
}

export default AtomButton;