export const SnapchatIcon = ({
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
        d="M6.57556 7.42444C6.57556 4.42861 9.00416 2 12 2C14.9958 2 17.4244 4.42861 17.4244 7.42444C17.4244 12.1722 17.6611 14.5456 22 16.4444C19.7778 17 19.2222 17.5556 18.6667 19.7778C14.7778 19.7778 14.2222 22 12 22C9.77778 22 9.22222 19.7778 5.33333 19.7778C4.77778 17.5556 4.22222 17 2 16.4444C6.33889 14.5456 6.57556 12.1722 6.57556 7.42444Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 16C5.82356 13.9171 5.82356 11.9503 2.95589 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M22 16C18.1764 13.9171 18.1764 11.9503 21.0441 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
