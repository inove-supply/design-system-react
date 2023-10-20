export const Target03Icon = ({
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
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M11.9959 12H12.0049"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 2V6" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M22 12L18 12" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M12 18V22" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M6 12L2 12" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
