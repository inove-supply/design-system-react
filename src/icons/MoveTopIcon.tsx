export const MoveTopIcon = ({
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
      <circle
        r="3"
        transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 12 19)"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.0001 2L12.0001 12M12.0001 2C11.4381 2 11.0109 2.4381 10.1564 3.3143L8.5 4.97057M12.0001 2C12.5622 2 12.9894 2.4381 13.8439 3.3143L15.5 4.97044"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
