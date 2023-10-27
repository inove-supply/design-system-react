export const StartUp02Icon = ({
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
        d="M6 11.9144C11.6363 1.40966 18.6544 1.28853 21.4589 2.54105C22.7115 5.3456 22.5903 12.3637 12.0856 18C11.9767 17.3737 11.3708 15.7332 9.81881 14.1812C8.26679 12.6292 6.62626 12.0233 6 11.9144Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 17.5C15.5428 18.5 15.7609 20.2931 16.0439 21.9999C16.0439 21.9999 20.3223 18.8372 17.5856 14.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.49995 10.5853C5.49995 8.54254 3.70683 8.32444 2 8.04146C2 8.04146 5.16277 3.76298 9.49995 6.49976"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.35342 15.2347C4.78472 15.8034 3.81792 17.4527 4.50037 19.5C6.5477 20.1824 8.19694 19.2156 8.76564 18.6469"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10C17.1046 10 18 9.10457 18 8Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
