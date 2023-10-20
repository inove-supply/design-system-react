export const ArrowUpLeft01SharpIcon = ({
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
      <path d="M7 7L18 18" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M6 13V7C6 6.5286 6 6.29289 6.14645 6.14645C6.29289 6 6.5286 6 7 6H13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
