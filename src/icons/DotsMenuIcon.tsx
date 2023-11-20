import React from "react";

export const DotsMenuIcon = ({
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
        d="M11.992 12H12.001"
        strokeWidth={strokeWidth + 1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9842 18H11.9932"
        strokeWidth={strokeWidth + 1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9998 6H12.0088"
        strokeWidth={strokeWidth + 1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
