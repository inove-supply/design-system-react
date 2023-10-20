export const WorkflowCircle04Icon = ({
  color = 'white',
  strokeWidth = 1.5,
  size = 24
}: {
  color?: string
  strokeWidth?: number
  size?: number
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color} stroke-current`}
    >
      <path
        d="M9 5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M6 16V8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 8C18 8.93188 18 11.3978 17.8478 11.7654C17.6448 12.2554 17.2554 12.6448 16.7654 12.8478C16.3978 13 15.9319 13 15 13H9C8.06812 13 7.60218 13 7.23463 13.1522C6.74458 13.3552 6.35523 13.7446 6.15224 14.2346C6 14.6022 6 15.0681 6 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
