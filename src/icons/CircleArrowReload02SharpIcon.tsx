export const CircleArrowReload02SharpIcon = ({
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
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M16 11.55V10.3C16 9.74772 15.5523 9.3 15 9.3H9.43705C9.0264 9.3 8.79084 8.83237 9.03527 8.50239L9.77778 7.5M8 12.45V13.7C8 14.2523 8.44772 14.7 9 14.7H14.563C14.9736 14.7 15.2092 15.1676 14.9647 15.4976L14.2222 16.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
