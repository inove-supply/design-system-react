export const LeftToRightListBulletIcon = ({
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
      <path d="M8 5L20 5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M4 5H4.00898"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12H4.00898"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19H4.00898"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 12L20 12" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 19L20 19" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
