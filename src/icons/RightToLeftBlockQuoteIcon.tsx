export const RightToLeftBlockQuoteIcon = ({
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
      <path d="M7 6L15 6" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M5 12L15 12" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 18L15 18" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M19 3L19 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
