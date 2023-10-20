export const WifiDisconnected02Icon = ({
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
        d="M14.5002 15L9.50016 20M14.5002 20L9.50016 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18.5 13C14.7324 9 9.5 9 5.5 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8C8.31579 2.66669 15.6842 2.66668 22 7.99989"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
