export const Building05Icon = ({
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
      <path d="M2 22H22" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M18 9H14C11.518 9 11 9.518 11 12V22H21V12C21 9.518 20.482 9 18 9Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M15 22H3V5C3 2.518 3.518 2 6 2H12C14.482 2 15 2.518 15 5V9"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M3 6H6M3 10H6M3 14H6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M15 13H17M15 16H17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16 22L16 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
