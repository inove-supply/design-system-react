export const ComputerPhoneSyncIcon = ({
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
        d="M20 17.1862C18.843 18 17.2107 18 13.9462 18H9.96412C6.6996 18 5.06734 18 3.9103 17.1862C3.48223 16.8851 3.1099 16.5111 2.81017 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81017 3.91891C3.1099 3.48891 3.48223 3.1149 3.9103 2.81382C5.06734 2 6.6996 2 9.96412 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M12 18V22" strokeWidth={strokeWidth} />
      <path d="M8 22H16" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V10C22 11.8856 22 12.8284 21.4142 13.4142C20.8284 14 19.8856 14 18 14H17C15.1144 14 14.1716 14 13.5858 13.4142C13 12.8284 13 11.8856 13 10L13 6C13 4.11438 13 3.17157 13.5858 2.58579C14.1716 2 15.1144 2 17 2L18 2Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M17.5 11.5H17.509" strokeWidth={strokeWidth} />
    </svg>
  )
}
