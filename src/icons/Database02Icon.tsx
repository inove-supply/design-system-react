export const Database02Icon = ({
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
      <ellipse cx="12" cy="5" rx="8" ry="3" strokeWidth={strokeWidth} />
      <path
        d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
        strokeWidth={strokeWidth}
      />
      <path
        d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
        strokeWidth={strokeWidth}
      />
      <path d="M8 8V10" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 15V17" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
