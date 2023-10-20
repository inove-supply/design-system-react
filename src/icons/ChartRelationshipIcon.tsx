export const ChartRelationshipIcon = ({
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
        d="M11 5L18 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L14.5 14.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11L5 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.44444" cy="6.44444" r="4.44444" strokeWidth={strokeWidth} />
      <circle cx="5" cy="20" r="2" strokeWidth={strokeWidth} />
      <circle cx="16" cy="16" r="2" strokeWidth={strokeWidth} />
      <circle cx="20" cy="5" r="2" strokeWidth={strokeWidth} />
    </svg>
  )
}
