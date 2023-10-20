export const WorkflowCircle01Icon = ({
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
        d="M9 9C9 10.6569 7.65685 12 6 12C4.34315 12 3 10.6569 3 9C3 7.34315 4.34315 6 6 6C7.65685 6 9 7.34315 9 9Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 9H14C15.8856 9 16.8284 9 17.4142 9.58579C18 10.1716 18 11.1144 18 13V15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12V22M6 6V2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
