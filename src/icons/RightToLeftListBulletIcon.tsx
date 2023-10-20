export const RightToLeftListBulletIcon = ({
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
      <path d="M4 5L16 5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M20 5H20.009"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H20.009"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 19H20.009"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 12L16 12" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M4 19L16 19" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
