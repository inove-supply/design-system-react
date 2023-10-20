export const WifiOff02Icon = ({
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
        d="M12 18.5H12.0118"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 15.5C10.1286 13.8714 12.502 13.569 14.5 14.5928"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 12.5001C7 11 8.42668 10.3536 10 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 12.5001C17.0073 11.1795 15.2848 10.2742 13.5 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9.49989C3.5 8 4.96138 7.16241 6.5 6.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 9.49989C18.0717 6.18273 13.7362 4.92879 9.5 5.73808"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 2L22 22" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
