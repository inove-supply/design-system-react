export const CongruentToCircleIcon = ({
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
        d="M7.5 12.5022H16.5M7.5 16H16.5M7.5 9.50402C8.4 7.64165 10.5 7.54875 12 9.00431M16.5 8.49966C15.6 10.362 13.5 10.4549 12 8.99937"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
    </svg>
  )
}
