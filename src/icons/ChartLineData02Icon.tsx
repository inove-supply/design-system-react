export const ChartLineData02Icon = ({
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
      <circle cx="8.5" cy="10.5" r="1.5" strokeWidth={strokeWidth} />
      <circle cx="14.5" cy="15.5" r="1.5" strokeWidth={strokeWidth} />
      <circle cx="18.5" cy="7.5" r="1.5" strokeWidth={strokeWidth} />
      <path
        d="M15.4341 14.2963L18 9M9.58251 11.5684L13.2038 14.2963M3 19L7.58957 11.8792"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 21H9C5.70017 21 4.05025 21 3.02513 19.9749C2 18.9497 2 17.2998 2 14V3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
