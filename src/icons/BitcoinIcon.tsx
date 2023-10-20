export const BitcoinIcon = ({
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
        d="M6 4H14.4C16.3882 4 18 5.79086 18 8C18 10.2091 16.3882 12 14.4 12M14.4 12C16.3882 12 18 13.7909 18 16C18 18.2091 16.3882 20 14.4 20H6M14.4 12H7.2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M7 4V20" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M9 2L9 4M14 2V4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 20L9 22M14 20V22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
