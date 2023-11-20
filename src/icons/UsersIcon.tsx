import React from "react";

export const UsersIcon = ({
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
        d="M18.5045 19.0002H18.9457C19.9805 19.0002 20.8036 18.5287 21.5427 17.8694C23.4202 16.1944 19.0067 14.5 17.5 14.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5.06877C15.2271 5.02373 15.4629 5 15.7048 5C17.5247 5 19 6.34315 19 8C19 9.65685 17.5247 11 15.7048 11C15.4629 11 15.2271 10.9763 15 10.9312"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M4.78256 15.1112C3.68218 15.743 0.797061 17.0331 2.55429 18.6474C3.41269 19.436 4.36872 20 5.57068 20H12.4293C13.6313 20 14.5873 19.436 15.4457 18.6474C17.2029 17.0331 14.3178 15.743 13.2174 15.1112C10.6371 13.6296 7.36292 13.6296 4.78256 15.1112Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
