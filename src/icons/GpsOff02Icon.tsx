export const GpsOff02Icon = ({
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
      <g clipPath="url(#clip0_3_670)">
        <path
          d="M20.5137 12C20.5137 16.6944 16.7081 20.5 12.0137 20.5C7.31925 20.5 3.51367 16.6944 3.51367 12C3.51367 7.30558 7.31925 3.5 12.0137 3.5C16.7081 3.5 20.5137 7.30558 20.5137 12Z"
          strokeWidth={strokeWidth}
          style={{ strokeWidth: `${strokeWidth} !important` }}
        />
        <path
          d="M15.0002 9L9.00019 15M15.0002 15L9.00019 9"
          strokeWidth={strokeWidth}
          style={{ strokeWidth: `${strokeWidth} !important` }}
          strokeLinecap="round"
        />
        <path
          d="M22.5 12H20.5"
          strokeWidth={strokeWidth}
          style={{ strokeWidth: `${strokeWidth} !important` }}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 12H1.5"
          strokeWidth={strokeWidth}
          style={{ strokeWidth: `${strokeWidth} !important` }}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 1.5L12 3.5"
          strokeWidth={strokeWidth}
          style={{ strokeWidth: `${strokeWidth} !important` }}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20.5V22.5"
          strokeWidth={strokeWidth}
          style={{ strokeWidth: `${strokeWidth} !important` }}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_670">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
