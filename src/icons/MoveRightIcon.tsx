export const MoveRightIcon = ({
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
      <circle cx="5" cy="12" r="3" strokeWidth={strokeWidth} />
      <path
        d="M22 11.9999L12 11.9999M22 11.9999C22 12.5619 21.5619 12.9891 20.6857 13.8436L19.0294 15.5M22 11.9999C22 11.4378 21.5619 11.0106 20.6857 10.1561L19.0296 8.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
