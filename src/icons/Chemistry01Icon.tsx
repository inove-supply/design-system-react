export const Chemistry01Icon = ({
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
        d="M3 9L11 9M20 9L17 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M17 4V14.7857C17 16.5609 15.6569 18 14 18C12.3431 18 11 16.5609 11 14.7857V4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M10 4L18 4" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
