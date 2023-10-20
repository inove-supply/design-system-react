export const DeskIcon = ({
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
        d="M3 8H21V12C21 14.357 21 15.5355 20.2678 16.2678C19.5355 17 18.357 17 16 17H8C5.64298 17 4.46447 17 3.73223 16.2678C3 15.5355 3 14.357 3 12V8Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 6C7 4.11438 7 3.17157 7.58579 2.58579C8.17157 2 9.11438 2 11 2H13C14.8856 2 15.8284 2 16.4142 2.58579C17 3.17157 17 4.11438 17 6V8H7V6Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5 17V22M19 17V22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 17V20M16 17V20"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 8L3.81818 8M20.1818 8L22 8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
