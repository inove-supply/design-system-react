export const RightAngleIcon = ({
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
        d="M3 5C3.39322 4.59544 4.43982 3 5 3C5.56018 3 6.60678 4.59544 7 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 17C19.4046 17.3932 21 18.4398 21 19C21 19.5602 19.4046 20.6068 19 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H6C8.82843 12 10.2426 12 11.1213 12.8787C12 13.7574 12 15.1716 12 18V19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19H11C8.17157 19 6.75736 19 5.87868 18.1213C5 17.2426 5 15.8284 5 13L5 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
