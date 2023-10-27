export const Cylinder02Icon = ({
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
        d="M17 4C17 5.10457 14.7614 6 12 6C9.23858 6 7 5.10457 7 4C7 2.89543 9.23858 2 12 2C14.7614 2 17 2.89543 17 4Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21 18C21 20.2091 16.9706 22 12 22C7.02944 22 3 20.2091 3 18C3 15.7909 7.02944 14 12 14C16.9706 14 21 15.7909 21 18Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M3.5 16.5L7 4M20.5 16.5L17 4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
