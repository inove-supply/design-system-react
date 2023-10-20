export const ChartBubble01Icon = ({
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
        d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="2" strokeWidth={strokeWidth} />
      <circle cx="11.5" cy="15.5" r="2.5" strokeWidth={strokeWidth} />
      <circle cx="17.5" cy="7.5" r="3.5" strokeWidth={strokeWidth} />
    </svg>
  )
}
