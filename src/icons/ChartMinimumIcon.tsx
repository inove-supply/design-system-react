export const ChartMinimumIcon = ({
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
      <path
        d="M8 3C8 9.07513 10.6863 14 14 14C17.3137 14 20 9.07513 20 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17H6.00898M8.9982 17H9.00718M11.9964 17H12.0054M14.9946 17H15.0036M17.9928 17H18.0018M20.991 17H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
