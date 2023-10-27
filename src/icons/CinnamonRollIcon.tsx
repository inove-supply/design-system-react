export const CinnamonRollIcon = ({
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
        d="M22 9C22 12.3137 17.5228 15 12 15C6.47715 15 2 12.3137 2 9C2 5.68629 6.47715 3 12 3C17.5228 3 22 5.68629 22 9Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 6.85441C15 5.44094 17 7.71729 17 8.7817C17 11.9514 7 11.7874 7 7.88187C7 5.49755 9 3 12 3"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M22 9V15C22 18.3137 17.5228 21 12 21C6.47715 21 2 18.3137 2 15V9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
