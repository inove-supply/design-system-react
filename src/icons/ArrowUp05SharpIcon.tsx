export const ArrowUp05SharpIcon = ({
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
        d="M18 4.75C18.4142 4.75 18.75 4.41421 18.75 4C18.75 3.58579 18.4142 3.25 18 3.25L18 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM18 3.25L6 3.25L6 4.75L18 4.75L18 3.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 12.1274H15.0557C15.4298 12.1274 15.6358 11.6451 15.3989 11.3238L12.3433 7.18046C12.1658 6.93985 11.8342 6.93985 11.6567 7.18046L8.60109 11.3238C8.36416 11.6451 8.57019 12.1274 8.94435 12.1274H12ZM12 12.1274V20"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
