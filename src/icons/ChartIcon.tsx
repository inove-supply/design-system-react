export const ChartIcon = ({
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
        d="M2 21.5L22 21.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 15.5H18.009M18 18.5H18.009" strokeWidth={strokeWidth} />
      <path
        d="M6 18.5H6.00898M6 15.5H6.00898M6 12.5H6.00898M6 9.5H6.00898"
        strokeWidth={strokeWidth}
      />
      <path
        d="M7.79063 5.39186L16.2183 9.5904M8 4.5C8 5.60457 7.10457 6.5 6 6.5C4.89543 6.5 4 5.60457 4 4.5C4 3.39543 4.89543 2.5 6 2.5C7.10457 2.5 8 3.39543 8 4.5ZM20 10.5C20 11.6046 19.1046 12.5 18 12.5C16.8954 12.5 16 11.6046 16 10.5C16 9.39543 16.8954 8.5 18 8.5C19.1046 8.5 20 9.39543 20 10.5Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
