export const ArrowTurnDownSharpIcon = ({
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
        d="M6 13L6 8.5C6 6.01472 8.01472 4 10.5 4C12.9853 4 15 6.01472 15 8.5V19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17L14.2929 19.2929C14.6262 19.6262 14.7929 19.7929 15 19.7929C15.2071 19.7929 15.3738 19.6262 15.7071 19.2929L18 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
