import React from "react";

export const MenuIcon = ({
  color = "gray-500",
  strokeWidth = 2,
  size = 24,
}: {
  color?: string;
  strokeWidth?: number;
  size?: number;
}) => {
  return (
    <svg
      className={`stroke-current text-${color}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5L20 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L20 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19L20 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
