export const InsertTopImageIcon = ({
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
        d="M3 17H19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 21H12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8C3 5.64298 3 4.46447 3.73223 3.73223C4.46447 3 5.64298 3 8 3H16C18.357 3 19.5355 3 20.2678 3.73223C21 4.46447 21 5.64298 21 8C21 10.357 21 11.5355 20.2678 12.2678C19.5355 13 18.357 13 16 13H8C5.64298 13 4.46447 13 3.73223 12.2678C3 11.5355 3 10.357 3 8Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
