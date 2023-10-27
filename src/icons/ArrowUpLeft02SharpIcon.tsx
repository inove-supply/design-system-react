export const ArrowUpLeft02SharpIcon = ({
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
        d="M18 18.002L10.5 10.502"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8672 7.88907L7.92584 12.861C7.6448 13.1438 7.1645 12.9972 7.09393 12.6071L6.00415 6.5825C5.94304 6.24467 6.23886 5.94702 6.57706 6.00605L12.6083 7.05874C12.9988 7.1269 13.1483 7.60628 12.8672 7.88907Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
