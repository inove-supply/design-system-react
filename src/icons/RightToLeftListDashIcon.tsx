export const RightToLeftListDashIcon = ({
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
      <path d="M3 5L15 5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M19 5L21 5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M3 12L15 12" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M19 12L21 12" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M3 19L15 19" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M19 19L21 19" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
