export const CircleArrowRight01SharpIcon = ({
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
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
      <path
        d="M10.5 16L13.275 12.3C13.4083 12.1222 13.4083 11.8778 13.275 11.7L10.5 8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
