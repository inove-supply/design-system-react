export const Train01Icon = ({
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
        d="M4 11V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V11C20 14.7712 20 16.6569 18.8284 17.8284C17.6569 19 15.7712 19 12 19C8.22876 19 6.34315 19 5.17157 17.8284C4 16.6569 4 14.7712 4 11Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M4 12C4 12 7.73333 13 12 13C16.2667 13 20 12 20 12"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M7 19L5 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19L19 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.5 16H6.5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M17.5 16H19.5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M5 5H19" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
