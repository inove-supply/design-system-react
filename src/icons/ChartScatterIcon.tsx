export const ChartScatterIcon = ({
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
      <path d="M18 11H18.009" strokeWidth={strokeWidth} />
      <path d="M20 4H20.009" strokeWidth={strokeWidth} />
      <path d="M11 6H11.009" strokeWidth={strokeWidth} />
      <path d="M11 11H11.009" strokeWidth={strokeWidth} />
      <path d="M9 16H9.00898" strokeWidth={strokeWidth} />
      <path
        d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
