export const GridOffIcon = ({
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
      <path d="M17 22V17" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M17 2V12.5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M22 7L11.5 7" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M2 7L7 7" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M22 17L21 17" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M2 17L17 17" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M2 2L22 22" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
