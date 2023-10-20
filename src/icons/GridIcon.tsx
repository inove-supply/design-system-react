export const GridIcon = ({
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
      <path d="M7 2V22" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M17 2V22" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M22 7L2 7" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M22 17L2 17" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
