export const LockSync02Icon = ({
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
        d="M20 11H22C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 2 6.47715 2 12C2 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2154 16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 10.9824V9.1905C14.25 7.98072 13.2426 7 12 7C10.7574 7 9.75 7.98072 9.75 9.1905V10.9824M12 17C10.067 17 8.5 15.4744 8.5 13.5926C8.5 11.7107 10.067 10.1851 12 10.1851C13.933 10.1851 15.5 11.7107 15.5 13.5926C15.5 15.4744 13.933 17 12 17Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
