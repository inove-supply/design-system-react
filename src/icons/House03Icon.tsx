export const House03Icon = ({
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
        d="M2 10L7 4M7 4L12.4142 9.41421C12.7032 9.70324 12.8478 9.84776 13.0315 9.92388C13.2153 10 13.4197 10 13.8284 10H22L18.1994 5.43926C17.6096 4.73152 17.3147 4.37764 16.9116 4.18882C16.5084 4 16.0478 4 15.1265 4H7Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 8V20H3V8.85714"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 20H21V9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7.5V4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.00801 12L6.99902 12" strokeWidth={strokeWidth} />
      <path
        d="M7 20V16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 14L17 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
