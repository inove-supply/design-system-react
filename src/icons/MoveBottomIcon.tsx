export const MoveBottomIcon = ({
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
        d="M11.9999 22L11.9999 12M11.9999 22C12.5619 22 12.9891 21.5619 13.8436 20.6857L15.5 19.0294M11.9999 22C11.4378 22 11.0106 21.5619 10.1561 20.6857L8.5 19.0296"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        r="3"
        transform="matrix(4.37114e-08 1 1 -4.37114e-08 12 5)"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
