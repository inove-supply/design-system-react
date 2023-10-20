export const ArrowLeft05SharpIcon = ({
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
        d="M4.75 6C4.75 5.58579 4.41421 5.25 4 5.25C3.58579 5.25 3.25 5.58579 3.25 6L4.75 6ZM3.25 18C3.25 18.4142 3.58579 18.75 4 18.75C4.41421 18.75 4.75 18.4142 4.75 18L3.25 18ZM3.25 6L3.25 18L4.75 18L4.75 6L3.25 6Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12.1274 12V8.94435C12.1274 8.57019 11.6451 8.36416 11.3238 8.60109L7.18046 11.6567C6.93985 11.8342 6.93985 12.1658 7.18046 12.3433L11.3238 15.3989C11.6451 15.6358 12.1274 15.4298 12.1274 15.0557V12ZM12.1274 12H20"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
